#!/usr/bin/env node
/**
 * Verify the assembled site in dist/:
 *  - every root-relative href/src/poster referenced by generated HTML exists
 *  - no generated blog page links back to the bare site root
 *  - CNAME / .nojekyll / landing files are in place
 *  - the landing page stays static: no links / navigation
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.resolve(root, '..', 'dist');
const blogDir = path.join(publicDir, 'hexo');

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function resolveUrl(url) {
  const clean = url.split('#')[0].split('?')[0];
  if (!clean.startsWith('/') || clean.startsWith('//')) return null;
  let decoded;
  try {
    decoded = decodeURIComponent(clean);
  } catch {
    decoded = clean;
  }
  let target = path.join(publicDir, decoded);
  if (decoded.endsWith('/') || (fs.existsSync(target) && fs.statSync(target).isDirectory())) {
    target = path.join(target, 'index.html');
  }
  return target;
}

const missing = new Map();
let checked = 0;
const rootLinks = [];

for (const file of walk(blogDir)) {
  if (!file.endsWith('.html')) continue;
  const html = fs.readFileSync(file, 'utf8');
  const attrRe = /\b(?:href|src|poster)="([^"]+)"/g;
  for (const match of html.matchAll(attrRe)) {
    const url = match[1];
    if (url === '/') rootLinks.push(path.relative(blogDir, file));
    const target = resolveUrl(url);
    if (!target) continue;
    checked += 1;
    if (!fs.existsSync(target)) {
      if (!missing.has(url)) missing.set(url, []);
      missing.get(url).push(path.relative(publicDir, file));
    }
  }
}

const landing = fs.readFileSync(path.join(publicDir, 'index.html'), 'utf8');
for (const url of ['/photo.jpg']) {
  if (!landing.includes(`"${url}"`)) missing.set(url, ['index.html (landing)']);
}
if (/<a\b/i.test(landing)) {
  console.log('landing page contains a link; it must not navigate anywhere');
  process.exitCode = 1;
}

console.log(`checked ${checked} root-relative URLs in blog HTML`);
if (rootLinks.length) {
  console.log(`\n${rootLinks.length} page(s) still link to "/":`);
  for (const page of [...new Set(rootLinks)].slice(0, 20)) console.log(`  ${page}`);
}
if (missing.size) {
  console.log(`\nMISSING (${missing.size}):`);
  for (const [url, pages] of missing) {
    console.log(`  ${url}  <- ${pages.slice(0, 3).join(', ')}${pages.length > 3 ? ` (+${pages.length - 3})` : ''}`);
  }
  process.exitCode = 1;
} else {
  console.log('all referenced files exist');
}

for (const required of [
  'index.html',
  '404.html',
  'photo.jpg',
  'CNAME',
  '.nojekyll',
  'hexo/index.html',
  'ECLMA/index.html',
  'ECLMA/style.css',
  'ECLMA/assets/emblem.png',
  'ECLMA/assets/favicon.png',
  'source/index.html',
  'source/style.css',
  'source/url/index.html',
  'source/assets/source-sky.webp',
  'source/assets/source-sky.jpg',
]) {
  if (!fs.existsSync(path.join(publicDir, required))) {
    console.log(`MISSING dist/${required}`);
    process.exitCode = 1;
  }
}
console.log(`CNAME: ${fs.readFileSync(path.join(publicDir, 'CNAME'), 'utf8').trim()}`);

const sourceIndex = fs.readFileSync(path.join(publicDir, 'source', 'index.html'), 'utf8');
if (!sourceIndex.includes('网址') || !sourceIndex.includes('href="url/"')) {
  console.log('source index is missing the "网址" entry');
  process.exitCode = 1;
}
for (const hidden of ['上消化道内镜诊断培训（上册）', 'edu.lndjzz.cn']) {
  if (sourceIndex.includes(hidden)) {
    console.log(`source index shows "${hidden}" before the entry is opened`);
    process.exitCode = 1;
  }
}

const sourceDetail = fs.readFileSync(path.join(publicDir, 'source', 'url', 'index.html'), 'utf8');
const sourceUrl =
  'http://edu.lndjzz.cn/videos?pageType=5&resourceTypes=1&resourceId=a6b499d789204d84adaddd2b07f8bc1b&organizeId=d5406e15-32eb-43fa-a6b3-3793cb50f5a4';
for (const needle of ['上消化道内镜诊断培训（上册）', 'edu.lndjzz.cn', '微信中打开', sourceUrl.replaceAll('&', '&amp;')]) {
  if (!sourceDetail.includes(needle)) {
    console.log(`source detail page is missing "${needle}"`);
    process.exitCode = 1;
  }
}

#!/usr/bin/env node
/** Local preview of dist/, emulating GitHub Pages (404.html fallback). */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'dist');
const port = Number(process.env.PORT) || 8123;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

http
  .createServer((req, res) => {
    let pathname;
    try {
      pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    } catch {
      res.writeHead(400).end('Bad Request');
      return;
    }

    let file = path.join(root, pathname);
    if (!file.startsWith(root)) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
      file = path.join(file, 'index.html');
    }

    const send = (target, status) => {
      fs.readFile(target, (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not Found');
          return;
        }
        res.writeHead(status, { 'Content-Type': types[path.extname(target)] || 'application/octet-stream' });
        res.end(data);
      });
    };

    if (fs.existsSync(file) && fs.statSync(file).isFile()) {
      send(file, 200);
    } else {
      send(path.join(root, '404.html'), 404);
    }
  })
  .listen(port, '127.0.0.1', () => {
    console.log(`preview: http://127.0.0.1:${port}/  (blog: /hexo/, source: /source/)`);
  });

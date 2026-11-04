# May_wind's Blog

仓库根目录只保留主站文件，Hexo 的源码和构建工具全部封装在 `Hexo/` 中；主站图片 `photo.jpg` 也留在根目录，不进入 `Hexo/`。

## 结构

```text
/
├─ index.html       主站：单图首页（静态展示，不包含任何跳转）
├─ photo.jpg        主站图片（不放入 Hexo/）
├─ Hexo/            Hexo 博客源码与构建工具
│  ├─ source/
│  ├─ themes/
│  ├─ tools/
│  └─ _config.yml
└─ dist/            构建产物（已忽略）
```

部署到 GitHub Pages 的 `main` 分支后：

- `/`：主站单图首页
- `/hexo/`：Hexo 博客（需要直接输入该地址进入）
- 其他路径：GitHub Pages 返回根目录的 `404.html`，内容同样是主站首页

## 常用命令

所有命令都在 `Hexo/` 目录下执行：

```bash
cd Hexo
npm run build    # 生成 ../dist/：主站首页在根目录，博客在 dist/hexo/
npm run preview  # 本地预览 http://127.0.0.1:8123
npm run verify   # 检查站内链接、主站无 <a> 标签等
npm run deploy   # 构建并推送 dist/ 到 main（会 force push）
```

## 关键配置

- `Hexo/_config.yml`：`url: https://maywindsdu.cn/hexo`、`root: /hexo/`、`public_dir: ../dist`
- `Hexo/_config.yml` 的 deploy 段使用 `ignore_hidden: false`，保证 `.nojekyll` 被部署
- 主题里调用 Hexo 的 `css()` / `js()` 时不要再传 `url_for()`，否则 `/hexo/` 会被加两次
- 不要把 `root` 改回 `/`，否则博客的站内链接会缺少 `/hexo/` 前缀
- 主站 `index.html` 只放一张全屏图片，不包 `<a>`；目前只能手动输入 `/hexo/` 进入博客

`dist/`、`Hexo/db.json`、`Hexo/node_modules/` 都是生成物或依赖，已写入 `.gitignore`，不需要提交。

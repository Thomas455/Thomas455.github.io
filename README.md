# Thomas455.github.io

个人主页，基于 GitHub Pages 的静态站点。

## 技术栈

- 纯 HTML / CSS / JS，零依赖、零构建
- 部署在 GitHub Pages（https://thomas455.github.io）

## 目录结构

```
├── index.html        # 主页
├── 404.html          # 404 页面
└── assets/
    ├── css/style.css # 全局样式
    └── favicon.svg   # 网站图标
```

## 部署步骤

1. 初始化并提交到 GitHub：

```bash
git init
git add .
git commit -m "init: personal homepage"
git branch -M main
git remote add origin https://github.com/thomas455/thomas455.github.io.git
git push -u origin main
```

2. 在 GitHub 仓库页面打开 **Settings → Pages**，Source 选择 `Deploy from a branch`，分支选 `main` 根目录，保存。

3. 等一两分钟，访问 `https://thomas455.github.io` 即可上线。

> 注意：用户站点仓库名必须是 `thomas455.github.io` 才能生效。

## 后续规划

- [ ] 补充项目详情页与截图
- [ ] 补充新项目
- [ ] 补充联系方式

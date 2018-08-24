# react-dva-demo

## Getting Started
Install dependencies.

```bash
$ npm install  
```
or use yarn
```
$ npm install -g yarn
$ yarn install --pure-lockfile
```

Start server.

```bash
$ npm start # visit http://localhost:8000
```

提交代码

```bash
$ git commit -m "xxx"   会自动运行 npm run lint 做语法规则检测
```

构建

```bash
$ npm run build
```

技术栈约定

```
1. 总体技术栈 React/webpack/Ant-design
2. 语言：使用es6; 如无必要，不推荐ts
3. 测试暂定 jest
```

## 文件介绍

```
  public: 一些静态资源
    app:   为habo预留,放置内置插件
    css:   为habo server预留
    emails:为habo server预留; 邮件模板
    views: habo server 渲染的页面, 内容与 public/index.html一致
  
  src: 开发主目录
    assets: 静态资源,图片等, 可参考webpack
    components: 公用组件
    models: dva models
    pages: 子页面, 可包含子组件
    services: 后端服务
    utils:
    
  .webpackrc: roadhog配置,包含webpack & proxy(mock)
  .roadhogrc.mock.js: mock配置
  webpack.config.js: webpack 额外配置

```

---
title: 研发模板
group: 快速上手
---

# 研发模板

我们提供了一个插件模板 [lobe-chat-plugin-template](https://github.com/lobehub/chat-plugin-template)，供你快速上手。

这个模板项目使用了 Next.js 作为开发框架，它的核心目录结构如下：

```
➜  chat-plugin-template
├── public
│   └── manifest-dev.json            # 描述清单文件
├── src
│   └── pages
│   │   ├── api                      # nextjs 服务端文件夹
│   │   │   ├── clothes.ts           # recommendClothes 接口实现
│   │   │   └── gateway.ts           # 本地插件代理网关
│   │   └── index.tsx                # 前端展示界面
```

当然，你可以使用任何你熟悉的开发框架与开发语言，只要能够实现 manifest 中描述的功能即可。 除了上述模板以外，也可以基于 LobeChat 的官网插件来了解插件开发：

- [chat-plugin-realtime-weather](https://github.com/lobehub/chat-plugin-realtime-weather): 实时天气插件，基于 Next.js 框架开发。
- [chat-plugin-search-engine](https://github.com/lobehub/chat-plugin-search-engine): 搜索引擎插件，使用 Vercel Serverless Edge Runtime, 前端使用 System.js 模块化开发。
- [chat-plugin-web-crawler](https://github.com/lobehub/chat-plugin-web-crawler): 网页内容提取插件，使用 Vercel Serverless NodeJs Runtime ，无前端。

同时也欢迎贡献更多框架与语言的插件模板。

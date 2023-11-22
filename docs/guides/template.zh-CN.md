---
title: 研发模板
group: 快速上手
---

# 研发模板

我们提供了一个插件模板 [lobe-chat-plugin-template](https://github.com/lobehub/chat-plugin-template)，供你快速上手。

这个模板项目使用了 Next.js 作为开发框架，它的核心目录结构如下：

```text
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

## 模板使用

介绍如何将该模板一键替换为你自己的插件项目：

### 1. 基于模板创建插件项目

你可以使用 github 上的 **`Use this template`** 快速创建你的项目，或者使用 `git clone` 命令拉取模板仓库：

```bash
git clone https://github.com/lobehub/chat-plugin-template.git
```

### 2. 修改仓库项目基本信息

你需要在模板基础上修改项目信息，由于模板已经聚合大部分必要的文档内容，你只需要按如下步骤修改部分信息即可：

1. **替换项目仓库地址**：全局搜索`lobehub/chat-plugin-template` 替换为你的项目地址，例如 `arvinxx/chat-plugin-open-interpreter`；
2. **清空 Changelog 内容**：模板中的 Changelog 记录了模板的更新历史，你需要移除里面的内容，由于模板集成 [Semantic Release](https://github.com/semantic-release/semantic-release)，插件会自动触发版本的发布，发布日志将会自动写入 Changelog；
3. **修改 README.md**：模板中的 README.md 包含了模板的使用说明，你需要将其替换为你自己的内容；

- 替换标题：将 `Template` 替换为你的项目名，例如 `Open Interpreter`；
- 替换图标：将 `package.webp` 替换为你的项目图标名称，你可以在 [emojipedia](https://emojipedia.org/) 上查找满意的图标，或者直接使用 Logo 的 URL；
- 替换简介：将 `This is the plugin template for LobeChat plugin...` 替换为你的项目一句话介绍；
- 替换特性描述：将特性部分替换为你的项目特性描述，可以借助 \[Markdown 特性描述专家]，帮你快速生成美观的特性描述；
- 替换使用方法：将 usage 部分替换为你的项目使用方法；

完成以上步骤，你就完成了仓库项目基本信息的修改，获得和 LobeChat 官方插件风格气质一致的项目介绍文档。

### 3. 全局搜索并替换标记符

每个插件都需要有全局唯一的 identifier，在模板中我们使用 `plugin-identifier` 作为占位符，你需要将其替换为你自己的 identifier。

- 替换 identifier：全局搜索：`plugin-identifier` 替换为你的 identifier，例如 `chat-plugin-open-interpreter`。

## 参考项目

当然，你可以使用任何你熟悉的开发框架与开发语言，只要能够实现 manifest 中描述的功能即可。 除了上述模板以外，也可以基于 LobeChat 的官网插件来了解插件开发：

- [chat-plugin-realtime-weather](https://github.com/lobehub/chat-plugin-realtime-weather): 实时天气插件，基于 Next.js 框架开发。
- [chat-plugin-search-engine](https://github.com/lobehub/chat-plugin-search-engine): 搜索引擎插件，使用 Vercel Serverless Edge Runtime, 前端使用 System.js 模块化开发。
- [chat-plugin-web-crawler](https://github.com/lobehub/chat-plugin-web-crawler): 网页内容提取插件，使用 Vercel Serverless NodeJs Runtime ，无前端。

同时也欢迎贡献更多框架与语言的插件模板。

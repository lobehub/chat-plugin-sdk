---
title: 默认类型插件
group: 插件类型
order: 0
---

# Default 类型插件

`default` 插件是默认的插件类型，它们主要用于纯后端驱动插件与展示型的插件，没有编辑、删除等富交互能力。它们适用于不需要复杂用户交互，且主要依赖 GPT 进行内容总结的场景。

例如官方实现的网站爬虫插件：

![web-crawler](https://github.com/lobehub/lobe-chat/assets/28616219/8a7191af-da07-4419-a0a1-37792b5c0c51)

搜索引擎插件：

![search-engine](https://github.com/lobehub/lobe-chat/assets/28616219/573a905f-6df4-476b-8e1e-6c3098808ef8)

以及所有兼容的 OpenAI ChatGPT 插件均为 `default` 类型。

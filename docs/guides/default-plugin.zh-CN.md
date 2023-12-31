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

## 如何选择

对于默认情况下，我们建议选择 `default` 类型插件，因为默认插件涵盖了常见的主流场景，比如：

- 你希望插件的内容能够被 GPT 进行总结或进一步处理。
- 你的插件需要简单的后端处理，并且希望与 GPT 的回复紧密结合。
- 你需要的插件主要用于内容展示，可能需要自定义前端展示，但不涉及用户与插件的交互操作（例如点击确认按钮等）；

例如，一个网站内容摘要插件，用户提供一个链接，插件返回摘要信息，然后由 GPT 进行解读或补充。

## 开发 Default 插件

快速上手中的 [教程](/zh-CN/quick-start/define-plugin-manifest) 已经介绍了 default 插件的开发流程，此处不再赘述。

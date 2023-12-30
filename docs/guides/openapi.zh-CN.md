---
title: OpenAPI
group: 基本概念
order: 4
---

# OpenAPI

LobeChat 的插件机制支持 OpenAPI 规范，这是一个用于定义和描述 RESTful APIs 的标准。通过使用 OpenAPI，开发者可以创建一个明确的、与语言无关的 API 描述，以促进 API 的正确实现和使用。以下是 LobeChat 对 OpenAPI 支持的简介内容：

## LobeChat 插件兼容性

LobeChat 的插件系统完全兼容 OpenAPI 文档。这意味着，当你创建一个 LobeChat 插件时，你只需按照以下步骤进行，就可以将一个 OpenAPI 服务转换为一个会话插件：

1. **构建 API** - 开发你的服务 API，确保它能够处理来自 LobeChat 的请求并返回适当的响应。
2. **OpenAPI 文档** - 使用 OpenAPI 规范（YAML 或 JSON 格式）来描述你的 API。这个文档应该详细说明你的 API 的各个端点、参数、响应格式等。
3. **创建插件清单** - 创建一个 LobeChat 的 `manifest.json` 插件清单文件，该文件包含了插件的元数据，如插件的名称、描述等，最关键的则是在 `openapi` 字段中填写你的 OpenAPI 文档的 URL。

## OpenAPI 规范

OpenAPI 规范是一个标准，用于描述 RESTful API 的结构和行为。这个规范允许开发者定义如下内容：

- API 的基本信息（如标题、描述和版本）
- API 服务器的 URL
- 可用的端点（路径）和操作（如 GET、POST、PUT、DELETE）
- 每个操作的输入和输出参数
- 认证方法（如无认证、HTTP 基本认证、OAuth2）
- 通用的响应消息和错误代码

你可以从这里查看 [天气插件](https://github.com/steven-tey/weathergpt) 的 OpenAPI 文档示例： [openapi.json](https://weathergpt.vercel.app/openapi.json)。

关于 OpenAPI 的详细介绍，可以查阅 [OpenAPI 规范](https://swagger.io/specification/)。

## 使用 OpenAPI 与 LobeChat 集成

当你的 API 和插件清单文件准备好后，你可以将其与 LobeChat 集成。在 LobeChat UI 中，用户可以安装你的插件，并通过 OpenAPI 文档中定义的端点与你的服务交互。你的 OpenAPI 文档将指导 LobeChat 如何与你的 API 通信，确保正确解释和处理请求和响应。

例如 AskYourPDF 插件：

我们努力在 LobeChat 的插件机制上实现与 OpenAPI 的集成，以确保你的服务可以无缝地与 LobeChat 集成，提供丰富的用户体验。通过遵循 OpenAPI 规范，你可以确保你的 API 文档准确、一致，并且易于使用。

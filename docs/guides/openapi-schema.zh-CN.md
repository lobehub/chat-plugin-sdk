---
title: OpenAPI Schema
group: 插件服务端
order: 4
---

# OpenAPI Schema 配置与使用

LobeChat 的插件机制提供了一种强大而灵活的方式来扩展聊天功能，与此同时，支持 OpenAPI 规范使得插件开发变得更加标准化和简便。本文档旨在指导开发者如何在 LobeChat 服务端实现中配置和使用 OpenAPI schema，从而创建能与 LobeChat 无缝集成的插件。

## OpenAPI 在 LobeChat 插件中的作用

通过 OpenAPI schema，开发者可以定义插件的 API 接口，包括请求的路径、方法、参数、响应等。LobeChat 通过解析 OpenAPI 文档来理解如何与插件进行交互，这样用户就可以通过 LobeChat 的界面安装和使用插件，而不需要担心接口的具体实现细节。

### 步骤 1：构建你的服务 API

开发你的服务 API，并确保它能响应 LobeChat 的请求和返回适当的响应。可以使用任何你喜欢的语言和框架来构建这个 API。

### 步骤 2：创建 OpenAPI 文档

使用 OpenAPI 规范来描述你的服务，这包括定义 API 的路径、操作、参数、响应等。你可以选择 YAML 或 JSON 格式来编写你的 OpenAPI 文档。确保文档中包含了所有必要的细节，这样 LobeChat 才能正确地与你的服务交互。

### 步骤 3：创建 LobeChat 插件清单文件

创建 `manifest.json` 文件，该文件包含了插件的元数据和配置信息。最重要的是，在 `openapi` 字段中提供你的 OpenAPI 文档的 URL。

插件清单 Schema 示例：

```json5
{
  openapi: 'https://yourdomain.com/path/to/openapi.json',
  api: [], // 配置 openapi 后便不需要再配置 api 字段

  // ... 其他配置
}
```

## OpenAPI 规范的关键要素

当创建 OpenAPI 文档时，请确保包含以下内容：

- **基本信息**：如标题、描述、版本等。
- **服务器 URL**：API 服务器的 URL。
- **端点**：可用的 API 路径和操作。
- **参数**：每个操作的输入和输出参数。
- **认证**：API 所使用的认证方法。
- **响应**：通用的响应消息和错误代码。

## 使用 OpenAPI 与 LobeChat 集成

一旦你的 API 和 OpenAPI 文档准备就绪，你可以在 LobeChat UI 中安装和测试你的插件。用户将能够通过你在 OpenAPI 文档中定义的端点与你的服务交互。

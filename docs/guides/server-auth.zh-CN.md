---
title: 服务端鉴权
group: 插件服务端
order: 5
---

# 服务端鉴权

在开发 LobeChat 插件时，服务端鉴权是确保插件安全性的重要环节。本文档旨在指导开发者如何使用不同模式进行鉴权，以保护 API 访问不被未授权使用。

## 简单模式鉴权

简单模式鉴权允许开发者在插件配置中指定必须的鉴权字段。通过 `settings` 字段，您可以要求用户输入特定的认证信息，比如 API 密钥。

### 示例：搜索引擎插件鉴权

以下是一个搜索引擎插件的配置示例，它要求用户提供 `SERPAPI_API_KEY` 作为鉴权字段。如果没有合适的鉴权字段，插件会提示用户输入必要的信息。

```json
{
  "settings": {
    "type": "object",
    "required": ["SERPAPI_API_KEY"],
    "properties": {
      "SERPAPI_API_KEY": {
        "title": "SerpAPI API Key",
        "description": "该插件使用 SerpAPI 作为搜索服务。了解更多信息，请访问 [SerpAPI 官网](https://serpapi.com/)。",
        "type": "string",
        "minLength": 64,
        "maxLength": 64,
        "format": "password"
      }
    }
  }
}
```

在上述配置中，用户将需要输入一个长度为 64 个字符的 API 密钥。这个密钥将在服务端被用来验证请求是否有权访问 SerpAPI 服务。

## OpenAPI 鉴权

对于使用 OpenAPI 规范描述的 API，开发者可以在 OpenAPI Schema 中定义多种鉴权模式。这些模式可能包括基本认证、API 密钥、OAuth2 等。

目前，我们的 OpenAPI 鉴权实现可能并不完善。如果您在使用过程中遇到问题或有特殊需求，欢迎提交 issue 给我们。我们计划在插件的后续版本中进一步完善鉴权机制，以满足更多的安全需求。

### 鉴权模式

- `apiKey`：通过 API 密钥进行鉴权。
- `http`：使用 HTTP 标准认证（例如，Basic Auth）。
- `oauth2`：利用 OAuth 2.0 协议进行鉴权。

### 提交问题

如果您在实现鉴权时遇到任何问题，或者希望我们支持更多的鉴权方式，请通过以下方式与我们联系：

- 在 GitHub 上创建一个 [新的 issue](https://github.com/lobehub/chat-plugin-sdk/issues/new)
- 加入我们的 [discord 社区](https://discord.gg/AYFPHvv2jT)，在社群频道和我们反馈。

我们将积极响应您的反馈，并在插件的后续版本中考虑您的需求。

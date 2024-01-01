---
title: 插件通信
group: 基本概念
order: 4
---

# 插件通信机制概述

## 服务端通信

针对 `default` 和 `markdown`类型的插件，你需要提供一个后端服务（standalone 类型的插件可以为纯前端应用），进而与 LobeChat 主体进行数据交换和处理请求。

下面会介绍 LobeChat 主体和插件的服务端通信的实现原理与关键细节。

### 插件服务端通信流程

LobeChat 主体与插件的服务端通信通过一个中间件层，即 [Plugin Gateway](https://github.com/lobehub/chat-plugins-gateway)，来协调 LobeChat 主体与插件后端服务之间的通信。这一机制确保了通信的安全性和灵活性，同时提供了一套标准化的协议来管理请求和响应。

1. **请求初始化**：LobeChat 主体通过 HTTP POST 请求向 Gateway 发送请求，携带着包含插件标识符、API 名称、参数等信息的 `PluginRequestPayload`。
2. **Gateway 处理**：Gateway 接收到请求后，解析请求体中的 `PluginRequestPayload`，并进行参数校验。
3. **处理与响应请求**：验证通过后，Gateway 根据请求中的 API 名称和参数去调用插件的服务端，获得响应结果后将处理结果封装为响应数据，通过 HTTP 响应发送回 LobeChat 主体。
4. **错误处理**：如果在处理请求的过程中发生错误，Gateway 会生成错误响应，包括错误类型和错误信息，返回给 LobeChat 主体。

### Gateway 通信实现细节

以下是 LobeChat 插件服务端的关键实现细节：

- **请求负载处理**：Gateway 通过解析 `PluginRequestPayload` 中的 `identifier` 来确定插件身份，并根据 `apiName` 执行相应的 API 逻辑。
- **插件清单获取**：如果请求负载中不包含插件清单 (`manifest`)，Gateway 将从 [插件商店索引](https://github.com/lobehub/lobe-chat-plugins) 中获取，保证插件的正确识别和功能实现。
- **参数校验**：Gateway 会根据插件清单中定义的 API 参数模式对请求中的参数进行校验，确保参数的有效性和安全性。
- **设置处理**：Gateway 会通过将插件请求的设置信息，添加到请求头中，在插件侧可以通过 [getPluginSettingsFromRequest](/zh-CN/api/request) 方法获取插件设置，例如 API 密钥或其他认证信息进行校验。
- **OpenAPI 支持**：如果插件清单指定了 [OpenAPI 清单](/zh-CN/guides/openapi)，Gateway 将会利用 `SwaggerClient` 与定义在 OpenAPI 规范中的第三方服务进行交互。

### 错误处理

服务端通信中的错误处理是一个重要的方面。Gateway 中定义了多种错误类型，例如 `PluginErrorType.MethodNotAllowed` 表示不支持的请求方法，`PluginErrorType.PluginGatewayError` 表示网关错误等。每种错误类型都有对应的处理逻辑，确保在出现问题时，可以向 LobeChat 主体提供清晰的错误反馈。关于错误的详细类型，请查阅：[服务端错误类型](/zh-CN/api/error)

## 前端通信

LobeChat 主体和插件的前端通信实现是基于 HTML5 的`window.postMessage` API，该 API 允许不同来源的页面之间安全地进行通信。在这种机制下，LobeChat 的主体可以与嵌入其中的插件（通常是通过`<iframe>`嵌入）安全地传递信息。

### 前端通信流程

以下是通信流程的概述：

1. **初始化通信**：当插件加载完成并准备好与 LobeChat 主体进行交互时，可以通过 `lobeChat.getPluginPayload()` 方法来获取初始化数据。这一过程背后是插件监听 `message` 事件，等待来自 LobeChat 主体的初始化消息，并在接收到该消息时返回解析后的插件参数、名称、设置和状态。
2. **接收插件载荷**：插件通过调用 `lobeChat.getPluginPayload()` 方法接收来自 LobeChat 主体的初始化数据。这一方法内部监听 `message` 事件，等待并处理 LobeChat 主体发送的包含插件所需数据的消息。
3. **获取、更新基础信息**：插件可以调用 `lobeChat.setPluginSettings(settings)`、`lobeChat.setPluginMessage(content)`、`lobeChat.setPluginState(key, value)` 等方法来更新设置、消息内容和插件状态。
4. **自定义触发动作**：针对 standalone 插件，可以利用通过 `lobeChat.triggerAIMessage(id)` 和 `lobeChat.createAssistantMessage(content)` 等方法自定义控制 AI 消息的触发、助理消息的创建，进而提供更加丰富的产品体验。

总结来说，LobeChat 和插件之间的通信是通过`postMessage` API 进行异步消息交换来实现的，插件可以请求数据、接收数据、更新状态、触发消息等，而 LobeChat 主体则负责响应这些请求并提供所需的数据。这种机制允许插件以独立的方式运行并与 LobeChat 主体进行有效的双向通信。

同时，我们在 SDK 中提供了 `lobeChat` 方法简化插件前端通信的开发。 通过 `lobeChat` 提供的一系列方法与 LobeChat 主体进行交互，这些方法和 Hooks 抽象了通信的细节，使得插件能够以简洁的 API 调用来与 LobeChat 主体进行互动。

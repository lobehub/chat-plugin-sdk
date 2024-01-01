---
title: 客户端 SDK
group: 插件前端
order: 2
---

# LobeChat 客户端 SDK

LobeChat Client SDK 是一套提供给插件开发者的前端开发工具包，它允许插件与 LobeChat 应用进行高效、安全的通信。通过这个 SDK，开发者可以轻松地获取 LobeChat 传递给插件的数据、发送消息、更新插件状态以及管理插件的配置信息等。

SDK 的核心功能是封装了与 LobeChat 交互所需的所有底层通信逻辑，这包括使用浏览器的 `postMessage` 和 `addEventListener` 方法进行跨窗口通信。这意味着开发者不需要深入了解复杂的通信协议，就可以专注于插件功能的实现。

## 使用示例

### 获取插件初始化信息

当插件加载完成时，开发者可能需要获取 LobeChat 传递的初始化参数和配置。使用 LobeChat Client SDK，这可以通过以下几行代码轻松完成：

```javascript
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

// 获取初始化信息
lobeChat.getPluginPayload().then((payload) => {
  console.log('插件名称:', payload.name);
  console.log('插件参数:', payload.arguments);
  console.log('插件设置:', payload.settings);
});
```

### 更新插件消息内容

如果插件需要在与用户的交互中发送消息，可以使用 SDK 提供的方法来更新消息内容：

```javascript
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

// 发送消息内容
lobeChat.setPluginMessage('欢迎使用我们的插件！');
```

LobeChat Client SDK 是插件开发者的得力助手，提供了一套完整、简洁且强大的工具，用以实现 LobeChat 插件的各种交互功能。通过这些工具，开发者可以更专注于创新和提升用户体验，而无需担心通信机制的实现细节。

## API

关于 LobeChat Client SDK 的完整使用 API，可以查阅：[LobeChat Client SDK API 文档](/zh-CN/api/lobe-chat-client)。

---
title: 消息通信类型
order: 10
group: 前端渲染
atomId: PluginChannel
description: 提供了关于插件通信的消息类型的详细说明
nav:
  title: API
  order: 1
---

# PluginChannel 通信消息

一般来说你可能用不到 `PluginChannel` ，但如果你希望使用 LobeChat 底层的消息通信机制，你可能需要了解这些消息类型。 本文档包含了通信消息类型的详细说明。

## fetchPluginMessage

- 字面量：`'lobe-chat:fetch-plugin-message`

用于插件主动向 LobeChat 发起消息请求的通道

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.fetchPluginMessage;
```

## pluginReadyForRender

- 字面量：`lobe-chat:plugin-ready-for-render`

用于通知 LobeChat 主体，插件已准备好进行渲染的通道

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.pluginReadyForRender;
```

:::info
主程序将会在收到此消息后，通过 `renderPlugin` 通道发送插件的信息
:::

## renderPlugin

- 字面量：`'lobe-chat:render-plugin`

用于主程序向插件发送渲染指令的通道。

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.pluginReadyForRender;
```

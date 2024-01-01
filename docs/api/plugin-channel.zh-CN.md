---
title: PluginChannel 消息通信类型
order: 10
group:
  title: 杂项
  order: 10000
atomId: PluginChannel
description: 提供了关于插件通信的消息类型的详细说明
nav:
  title: API
  order: 100
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk'
---

# PluginChannel 通信消息

一般来说你可能用不到 `PluginChannel` ，但如果你希望使用 LobeChat 底层的消息通信机制，你可能需要了解这些消息类型。 本文档包含了通信消息类型的详细说明。

## 初始化

### pluginReadyForRender

- 字面量：`lobe-chat:plugin-ready-for-render`

用于通知 LobeChat 主体，插件已准备好进行渲染的通道

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.pluginReadyForRender;
```

:::info
主程序将会在收到此消息后，通过 `renderPlugin` 通道发送插件的信息
:::

### initStandalonePlugin

- 字面量：`lobe-chat:init-standalone-plugin`

针对 `standalone` 类型的插件，通知 LobeChat 插件已经初始化的通道

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.initStandalonePlugin;
```

## Message Content 相关

### fetchPluginMessage

- 字面量：`lobe-chat:fetch-plugin-messag`

用于插件主动向 LobeChat 发起消息请求的通道

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.fetchPluginMessage;
```

### renderPlugin

- 字面量：`lobe-chat:render-plugin`

用于主程序向插件发送渲染指令的通道。

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.pluginReadyForRender;
```

### fillStandalonePluginContent

- 字面量：`lobe-chat:fill-plugin-content`

用于在插件独立运行时，向 LobeChat 发送填充插件内容的通道

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.fillStandalonePluginContent;
```

## 插件运行态相关

### fetchPluginState

- 字面量：`lobe-chat:fetch-plugin-state`

用于插件主动向 LobeChat 请求获取插件的状态信息的通道

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.fetchPluginState;
```

### renderPluginState

- 字面量：`lobe-chat:render-plugin-state`

用于主程序向插件发送渲染插件状态的通道。

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.renderPluginState;
```

### updatePluginState

- 字面量：`lobe-chat:update-plugin-state`

用于插件向 LobeChat 发送更新插件状态的通道。

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.updatePluginState;
```

## Settings 相关

### fetchPluginSettings

- 字面量：`lobe-chat:fetch-plugin-settings`

用于插件主动向 LobeChat 请求获取插件的设置信息的通道

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.fetchPluginSettings;
```

### renderPluginSettings

- 字面量：`lobe-chat:render-plugin-settings`

用于主程序向插件发送渲染插件设置的通道。

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.renderPluginSettings;
```

### updatePluginSettings

- 字面量：`lobe-chat:update-plugin-settings`

用于插件向 LobeChat 发送更新插件设置的通道。

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.updatePluginSettings;
```

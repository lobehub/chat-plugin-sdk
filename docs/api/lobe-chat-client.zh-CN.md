---
title: lobeChat
description: LobeChat 插件客户端 SDK 实例
group:
  title: 客户端
  order: 10
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
nav: API
---

该实例包含插件侧与 LobeChat 交互的所有关键方法。

- 该实例的所有方法均使用了浏览器的 `postMessage` 和 `addEventListener` 方法，因此需要在浏览器环境中使用；
- 该函数的所有方法均通过 `postMessage` 向父窗口发送消息，因此插件必须嵌入在 LobeChat 中才能返回正确的消息；

## getPluginPayload

获取初始化插件的 Function Call 信息。

```ts
interface PluginPayload<T = any> {
  arguments?: T;
  name: string;
}

type GetPluginPayload = <T = any>() => Promise<PluginPayload<T>>;
```

#### 出参

- `name`: Function Call 的 api 名称
- `arguments`: Function Call 的参数对象
- `state`: 如果该消息存在 state，则可通过该值获取到
- `settings`: 插件的设置信息

#### 示例

```ts
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

lobeChat.getPluginPayload().then((payload) => {
  console.log(payload);
});
// payload:
// {
//   name: 'showMJ',
//   arguments: {
//     rawInput: '一只小黄鸭摄影师，在湖边度假，在冬天的下雪天。湖面结冰了',
//   },
// };
```

## getPluginMessage

用于获取插件消息的内容（`content` 字段）。

LobeChat 将插件返回的消息对象序列化后存储在 `content` 字段中，该方法将会获取该字段的内容，并反序列化为 JSON 对象。

```ts
type GetPluginMessage = <T = object>() => Promise<T>;
```

#### 示例

```ts | pure
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

lobeChat.getPluginMessage().then((message) => {
  console.log(message);
});
```

## setPluginMessage

该方法用于向 LobeChat 发送消息以更新插件消息的内容。 内容将会序列化后，发送给 LobeChat，并继续会话流程。

```ts
type SetPluginMessage = <T = object>(content: T) => Promise<void>;
```

#### 参数

- `content`：要填充的插件内容。

#### 示例

```ts
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

lobeChat.setPluginMessage({ title: 'Hello', message: 'Welcome to my plugin' });
```

## getPluginState

用于获取存储在消息中的运行时状态

```ts
type GetPluginState = <T = any>(key: string) => Promise<T>;
```

#### 入参

- `key`：要获取的状态信息的键值。

#### 示例

```ts
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

lobeChat.getPluginState('counter').then((state) => {
  console.log(state);
});
```

## setPluginState

该方法用于更新插件的指定状态信息。

```ts
type SetPluginState = (key: string, value: any) => Promise<void>;
```

#### 参数

- `key`：要更新的状态信息的键值。
- `value`：要更新的状态信息的值。

#### 示例

```ts
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

lobeChat.setPluginState('counter', 5);
```

## getPluginSettings

用于获取插件在 LobeChat 中存储的配置信息。

```ts
type GetPluginSettings = <T = any>() => Promise<T>;
```

#### 示例

```ts
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

lobeChat.getPluginSettings().then((state) => {
  console.log(state);
});
```

## setPluginSettings

该方法用于更新插件的配置信息。

```ts
type SetPluginSettings<T> = (settings: Partial<T>) => Promise<void>;
```

#### 入参

- `settings`：要更新的插件配置信息，默认为局部更新。

#### 示例

```ts
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

lobeChat.setPluginSettings({ theme: 'dark', fontSize: 12 });
```

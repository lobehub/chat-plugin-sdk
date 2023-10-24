---
title: fetchPluginMessage
description: 该方法用于从插件通道获取插件消息
group: 通信方法
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
nav: API
---

该方法用于从插件通道获取插件消息。

## 类型

```ts
export const fetchPluginMessage = <T = any>() => Promise<T>;
```

## 返回值

一个 Promise，返回插件消息的内容。

### 示例

```ts | pure
import { fetchPluginMessage } from '@lobehub/chat-plugin-sdk/client';

fetchPluginMessage()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
```

## 注意事项

- 该函数使用了浏览器的 `postMessage` 和 `addEventListener` 方法，因此需要在浏览器环境中使用；
- 该函数通过插件通道向父窗口发送消息，因此调用该方法的应用必须嵌入在 LobeChat 中才能返回正确的消息；

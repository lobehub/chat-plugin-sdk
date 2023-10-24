---
title: postToUpdatePluginState
description: 该方法用于向 LobeChat 发送消息以更新插件的指定状态信息
group: 通信方法
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
nav: API
---

该方法用于向 LobeChat 发送消息以更新插件的指定状态信息。

## 语法

```ts
postToUpdatePluginState(key: string, value: any): void;
```

## 参数

- `key`：要更新的状态信息的键值。
- `value`：要更新的状态信息的值。

## 示例

```ts
import { postToUpdatePluginState } from '@lobehub/chat-plugin-sdk/client';

const updateState = (key, value) => {
  postToUpdatePluginState(key, value);
};

updateState('counter', 5);
```

## 注意事项

- 请确保在插件加载完成后调用 `postToUpdatePluginState` 函数。
- 请确保在插件的页面中使用该函数。
- 传入的 `key` 参数是要更新的状态信息的键值。
- 传入的 `value` 参数是要更新的状态信息的值。
- 更新的状态信息将会被发送给 LobeChat 并更新插件的状态。
- 该方法不返回任何值。

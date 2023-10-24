---
title: fetchPluginState
description: 该方法用于获取存储在消息中的运行时状态
group: 通信方法

apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
nav: API
---

该方法用于获取存储在消息中的运行时状态

## 语法

```ts
const promise = fetchPluginState<T>(key: string);
```

## 参数

- `T`：可选参数，用于指定返回值的类型，默认为 `any`。
- `key`：要获取的状态信息的键值。

## 返回值

返回一个 Promise 对象，该 Promise 对象将在指定状态信息准备好时被解析为该状态信息的值。

## 示例

```ts
import { fetchPluginState } from '@lobehub/chat-plugin-sdk/client';

const getState = async () => {
  try {
    const state = await fetchPluginState('counter');
    console.log(state);
  } catch (error) {
    console.error(error);
  }
};

getState();
```

## 注意事项

- 请确保在插件加载完成后调用 `fetchPluginState` 函数。
- 请确保在插件的页面中使用该函数。
- 可以通过泛型 `T` 来指定返回值的类型，以便进行类型检查和提示。如果不指定类型，则默认为 `any` 类型。
- 需要传入要获取的状态信息的键值作为参数 `key`。

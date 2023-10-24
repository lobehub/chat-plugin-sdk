---
title: fetchPluginSettings
description: 该方法用于用于获取插件在 LobeChat 中存储的配置信息
group:
  title: 通信方法
  order: 10
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
nav: API
---

该方法用于用于获取插件在 LobeChat 中存储的配置信息。

## 语法

```ts
const promise = fetchPluginSettings<T>();
```

## 参数

- `T`：可选参数，用于指定返回值的类型，默认为 `any`。

## 返回值

返回一个 Promise 对象，该 Promise 对象将在插件设置数据准备好时被解析为插件设置数据。

## 示例

```ts
import { fetchPluginSettings } from '@lobehub/chat-plugin-sdk/client';

const getSettings = async () => {
  try {
    const settings = await fetchPluginSettings();
    console.log(settings);
  } catch (error) {
    console.error(error);
  }
};

getSettings();
```

## 注意事项

- 请确保在插件加载完成后调用 `fetchPluginSettings` 函数。
- 请确保在插件的页面中使用该函数。
- 可以通过泛型 `T` 来指定返回值的类型，以便进行类型检查和提示。如果不指定类型，则默认为 `any` 类型。

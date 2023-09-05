---
title: getPluginSettingsStringFromRequest
description: 从请求中获取插件设置字符串
group:
  title: 服务端
  order: 1
nav: API
---

用于从请求中获取插件设置字符串。

## 语法

```ts
const settings = getPluginSettingsStringFromRequest<T>(req: Request): T | undefined;
```

## 参数

| 参数名 | 类型      | 描述         |
| ------ | --------- | ------------ |
| `req`  | `Request` | 标准请求对象 |

## 返回值

返回值类型为 `T | undefined`，表示插件设置字符串。

## 示例

```ts
import {
  createHeadersWithPluginSettings,
  getPluginSettingsStringFromRequest,
} from '@lobehub/chat-plugin-sdk';

const req = new Request('https://api.example.com', {
  headers: createHeadersWithPluginSettings({ theme: 'dark' }),
});

const settings = getPluginSettingsStringFromRequest(req);

console.log(settings); // 输出: { theme: "dark" }
```

## 注意事项

- 请确保传入的请求对象包含 `Lobe-Plugin-Settings` 头部字段。

- 如果解析插件设置字符串失败，则返回 `undefined`。

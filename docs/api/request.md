---
title: getPluginSettingsFromRequest
description: 从请求中获取插件设置
group:
  title: 服务端
  order: 1
nav: API
---

Used to retrieve the plugin settings string from the request.

## Syntax

```ts
const settings = getPluginSettingsFromRequest<T>(req: Request): T | undefined;
```

## Parameters

| Parameter Name | Type      | Description             |
| -------------- | --------- | ----------------------- |
| `req`          | `Request` | Standard request object |

## Return Value

The return value is `T | undefined`, which represents the plugin settings string.

## Example

```ts
import {
  createHeadersWithPluginSettings,
  getPluginSettingsFromRequest,
} from '@lobehub/chat-plugin-sdk';

const req = new Request('https://api.example.com', {
  headers: createHeadersWithPluginSettings({ theme: 'dark' }),
});

const settings = getPluginSettingsFromRequest(req);

console.log(settings); // 输出: { theme: "dark" }
```

## Notes

- Please ensure that the incoming request object contains the `Lobe-Plugin-Settings` header field.

- If the parsing of the plugin settings string fails, it returns `undefined`。

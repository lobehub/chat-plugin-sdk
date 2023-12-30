---
title: 服务端错误类型 PluginErrorType
atomId: PluginErrorType
description: 服务端错误类型
group: 服务端
nav: API
order: 100
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk'
---

LobeChat 在插件服务请求中所有的错误类型，包括业务语义错误、客户端错误和服务端错误。

## 使用方式

搭配 `createErrorResponse` 使用：

```ts
import { PluginErrorType } from '@lobehub/chat-plugin-sdk';

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  // ...
};
```

## 错误类型明细

### 业务错误

| 错误类型                    | 描述                    |
| --------------------------- | ----------------------- |
| `PluginMarketIndexNotFound` | 插件市场索引解析失败    |
| `PluginMarketIndexInvalid`  | 插件市场索引无效        |
| `PluginMetaNotFound`        | 没有找到插件元数据      |
| `PluginMetaInvalid`         | 插件元数据无效          |
| `PluginManifestNotFound`    | 插件描述文件不存在      |
| `PluginManifestInvalid`     | 插件描述文件格式不正确  |
| `PluginSettingsInvalid`     | 插件设置不正确          |
| `PluginApiNotFound`         | 插件 API 不存在         |
| `PluginApiParamsError`      | 插件 API 请求入参有问题 |
| `PluginServerError`         | 插件服务端出错          |

### 客户端错误

| 错误类型           | 描述                   |
| ------------------ | ---------------------- |
| `BadRequest`       | 400 Bad Request        |
| `Unauthorized`     | 401 Unauthorized       |
| `Forbidden`        | 403 Forbidden          |
| `ContentNotFound`  | 404 Not Found          |
| `MethodNotAllowed` | 405 Method Not Allowed |
| `TooManyRequests`  | 429 Too Many Requests  |

### 服务端错误

| 错误类型              | 描述                      |
| --------------------- | ------------------------- |
| `InternalServerError` | 500 Internal Server Error |
| `BadGateway`          | 502 Bad Gateway           |
| `ServiceUnavailable`  | 503 Service Unavailable   |
| `GatewayTimeout`      | 504 Gateway Timeout       |

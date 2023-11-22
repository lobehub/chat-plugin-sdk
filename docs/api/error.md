---
title: Server Error Type
atomId: PluginErrorType
description: Plugin error types
group: Server
nav: API
order: 100
---

LobeChat includes all error types in plugin service requests, including semantic errors, client errors, and server errors.

## Usage

Combined with `createErrorResponse` :

```ts
import { PluginErrorType } from '@lobehub/chat-plugin-sdk';

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  // ...
};
```

## Error Type Details

### Business Error

| Error Type                  | Description                              |
| --------------------------- | ---------------------------------------- |
| `PluginMarketIndexNotFound` | Plugin market index parse failed         |
| `PluginMarketIndexInvalid`  | Invalid plugin market index              |
| `PluginMetaNotFound`        | No plugin metadata found                 |
| `PluginMetaInvalid`         | Invalid plugin metadata                  |
| `PluginManifestNotFound`    | Plugin description file does not exist   |
| `PluginManifestInvalid`     | Incorrect plugin description file format |
| `PluginSettingsInvalid`     | Incorrect plugin settings                |
| `PluginApiNotFound`         | Plugin API does not exist                |
| `PluginApiParamsError`      | Issue with plugin API request parameters |
| `PluginServerError`         | Server error in plugin                   |

### Client Error

| Error Type         | Description            |
| ------------------ | ---------------------- |
| `BadRequest`       | 400 Bad Request        |
| `Unauthorized`     | 401 Unauthorized       |
| `Forbidden`        | 403 Forbidden          |
| `ContentNotFound`  | 404 Not Found          |
| `MethodNotAllowed` | 405 Method Not Allowed |
| `TooManyRequests`  | 429 Too Many Requests  |

### Server Error

| Error Type            | Description               |
| --------------------- | ------------------------- |
| `InternalServerError` | 500 Internal Server Error |
| `BadGateway`          | 502 Bad Gateway           |
| `ServiceUnavailable`  | 503 Service Unavailable   |
| `GatewayTimeout`      | 504 Gateway Timeout       |

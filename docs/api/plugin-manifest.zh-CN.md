---
title: 插件描述清单 Schema
group: Schema
atomId: pluginManifestSchema
description: 插件描述文件的 Schema
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk'
---

## pluginManifestSchema

**描述**：插件的清单文件（Manifest）数据模式定义。

### 使用示例

```typescript
import { pluginManifestSchema } from '@lobehub/chat-plugin-sdk';

const manifestData = {
  api: [
    {
      description: 'API 描述',
      name: 'API 名称',
      parameters: {
        properties: {},
        type: 'object',
      },
      url: 'http://example.com/api',
    },
  ],
  gateway: 'http://example.com/gateway',
  identifier: 'plugin-identifier',
  openapi: 'http://example.com/openapi',
  settings: {
    properties: {},
    type: 'object',
  },
  ui: {
    height: 500,
    mode: 'iframe',
    url: 'http://example.com/plugin',
    width: 800,
  },
};

const result = pluginManifestSchema.parse(manifestData);

console.log(result);

// 输出：{ api: [ { description: 'API 描述', name: 'API 名称', parameters: { properties: {}, type: 'object' }, url: 'http://example.com/api' } ], gateway: 'http://example.com/gateway', identifier: 'plugin-identifier', openapi: 'http://example.com/openapi', settings: { properties: {}, type: 'object' }, ui: { height: 500, mode: 'iframe', url: 'http://example.com/plugin', width: 800 } }
```

## `pluginApiSchema`

**描述**：插件 API 的数据模式定义。

```typescript
import { z } from 'zod';

const JSONSchema = z.object({
  properties: z.object({}),
  type: z.enum(['object']),
});

const pluginApiSchema = z.object({
  description: z.string(),
  name: z.string(),
  parameters: JSONSchema,
  url: z.string().url(),
});

export default pluginApiSchema;
```

### 使用示例

```typescript
import { pluginApiSchema } from '@lobehub/chat-plugin-sdk';

const apiData = {
  description: 'API 描述',
  name: 'API 名称',
  parameters: {
    properties: {},
    type: 'object',
  },
  url: 'http://example.com/api',
};

const result = pluginApiSchema.parse(apiData);
console.log(result);
// 输出：{ description: 'API 描述', name: 'API 名称', parameters: { properties: {}, type: 'object' }, url: 'http://example.com/api' }
```

## Schema 定义

### pluginManifestSchema

| 属性         | 类型                | 描述                    |
| ------------ | ------------------- | ----------------------- |
| `api`        | `pluginApiSchema[]` | 插件的 API 列表         |
| `gateway`    | `string` (可选)     | 插件的网关 URL          |
| `identifier` | `string`            | 插件的标识符            |
| `openapi`    | `string` (可选)     | 插件的 OpenAPI 文档 URL |
| `settings`   | `JSONSchema` (可选) | 插件的设置数据定义      |
| `ui`         | `object` (可选)     | 插件的 UI 配置          |
| `ui.height`  | `number` (可选)     | 插件 UI 的高度          |
| `ui.mode`    | `'iframe'` (可选)   | 插件 UI 的模式          |
| `ui.url`     | `string`            | 插件 UI 的 URL          |
| `ui.width`   | `number` (可选)     | 插件 UI 的宽度          |

### pluginApiSchema

| 属性          | 类型         | 描述                |
| ------------- | ------------ | ------------------- |
| `description` | `string`     | 插件 API 的描述     |
| `name`        | `string`     | 插件 API 的名称     |
| `parameters`  | `JSONSchema` | 插件 API 的参数定义 |
| `url`         | `string`     | 插件 API 的 URL     |

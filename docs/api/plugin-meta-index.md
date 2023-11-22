---
title: 插件市场元数据 Schema
group: Schema
atomId: pluginMetaSchema
description: 上架到插件市场中的插件元数据的数据模式定义。
nav: API
---

Schema for plugin metadata.

## Usage Example

```typescript
import { pluginMetaSchema } from '@lobehub/chat-plugin-sdk';

const meta = {
  author: 'John Doe',
  createAt: '2022-01-01',
  homepage: 'http://example.com',
  identifier: 'plugin-identifier',
  manifest: 'http://example.com/manifest',
  meta: {
    avatar: 'http://example.com/avatar.png',
    tags: ['tag1', 'tag2'],
  },
  schemaVersion: 1,
};

const result = pluginMetaSchema.parse(meta);

console.log(result);

// 输出：{ author: 'John Doe', createAt: '2022-01-01', homepage: 'http://example.com', identifier: 'plugin-identifier', manifest: 'http://example.com/manifest', meta: { avatar: 'http://example.com/avatar.png', tags: ['tag1', 'tag2'] }, schemaVersion: 1 }
```

## Schema Definition

| Property        | Type                 | Description                                           |
| --------------- | -------------------- | ----------------------------------------------------- |
| `author`        | `string`             | Author of the plugin                                  |
| `createAt`      | `string`             | Creation date of the plugin                           |
| `homepage`      | `string`             | Homepage URL of the plugin                            |
| `identifier`    | `string`             | Identifier of the plugin                              |
| `manifest`      | `string`             | URL of the plugin's description file                  |
| `meta`          | `object`(optional)   | Metadata of the plugin                                |
| `meta.avatar`   | `string`(optional)   | URL of the plugin author's avatar                     |
| `meta.tags`     | `string[]`(optional) | List of tags for the plugin                           |
| `schemaVersion` | `number`             | Version number of the data schema for plugin metadata |

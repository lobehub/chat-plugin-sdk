---
title: 插件市场元数据 Schema
group: Schema
atomId: pluginMetaSchema
description: 上架到插件市场中的插件元数据的数据模式定义。
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk'
---

插件元数据的 Schema。

## 使用示例

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

## Schema 定义

| 属性            | 类型              | 描述                             |
| --------------- | ----------------- | -------------------------------- |
| `author`        | `string`          | 插件的作者                       |
| `createAt`      | `string`          | 插件的创建日期                   |
| `homepage`      | `string`          | 插件的主页 URL                   |
| `identifier`    | `string`          | 插件的标识符                     |
| `manifest`      | `string`          | 插件描述文件的 URL               |
| `meta`          | `object` (可选)   | 插件的元数据                     |
| `meta.avatar`   | `string` (可选)   | 插件作者的头像 URL               |
| `meta.tags`     | `string[]` (可选) | 插件的标签列表                   |
| `schemaVersion` | `number`          | 插件元数据的数据模式定义的版本号 |

---
title: Plugin Manifest Schema
group: Schema
atomId: pluginManifestSchema
description: Schema for the plugin manifest file
nav: API
---

## PluginManifestSchema

**Description**: Defines the data schema for the plugin manifest file.

### Usage Example

```typescript
import { pluginManifestSchema } from '@lobehub/chat-plugin-sdk';

const manifestData = {
  api: [
    {
      description: 'API Description',
      name: 'API Name',
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

// Output: { api: [ { description: 'API Description', name: 'API Name', parameters: { properties: {}, type: 'object' }, url: 'http://example.com/api' } ], gateway: 'http://example.com/gateway', identifier: 'plugin-identifier', openapi: 'http://example.com/openapi', settings: { properties: {}, type: 'object' }, ui: { height: 500, mode: 'iframe', url: 'http://example.com/plugin', width: 800 } }
```

## `pluginApiSchema`

**Description**: Defines the data schema for the plugin API.

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

### Usage Example

```typescript
import { pluginApiSchema } from '@lobehub/chat-plugin-sdk';

const apiData = {
  description: 'API Description',
  name: 'API Name',
  parameters: {
    properties: {},
    type: 'object',
  },
  url: 'http://example.com/api',
};

const result = pluginApiSchema.parse(apiData);
console.log(result);
// Output: { description: 'API Description', name: 'API Name', parameters: { properties: {}, type: 'object' }, url: 'http://example.com/api' }
```

## Schema Definitions

### pluginManifestSchema

| Property     | Type                    | Description                               |
| ------------ | ----------------------- | ----------------------------------------- |
| `api`        | `pluginApiSchema[]`     | List of APIs for the plugin               |
| `gateway`    | `string` (optional)     | URL of the plugin's gateway               |
| `identifier` | `string`                | Identifier of the plugin                  |
| `openapi`    | `string` (optional)     | URL of the plugin's OpenAPI documentation |
| `settings`   | `JSONSchema` (optional) | Definition of the plugin's settings data  |
| `ui`         | `object` (optional)     | Configuration for the plugin's UI         |
| `ui.height`  | `number` (optional)     | Height of the plugin's UI                 |
| `ui.mode`    | `'iframe'` (optional)   | Mode of the plugin's UI                   |
| `ui.url`     | `string`                | URL of the plugin's UI                    |
| `ui.width`   | `number` (optional)     | Width of the plugin's UI                  |

### pluginApiSchema

| Property      | Type         | Description                               |
| ------------- | ------------ | ----------------------------------------- |
| `description` | `string`     | Description of the plugin API             |
| `name`        | `string`     | Name of the plugin API                    |
| `parameters`  | `JSONSchema` | Definition of the plugin API's parameters |
| `url`         | `string`     | URL of the plugin API                     |

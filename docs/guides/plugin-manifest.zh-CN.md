---
title: 插件 Manifest
group:
  title: 基本概念
  order: 0
nav:
  title: 完全指南
  order: 1
order: 1
---

# 插件 Manifest

LobeChat 插件 Manifest 是一个关键的配置文件，它用于描述和定义一个 LobeChat 插件的基本信息和行为。Manifest 文件作为插件的 “身份证”，为 LobeChat 平台提供了如何处理和集成该插件的必要信息。

## 简介

Manifest 文件通常是以 JSON 格式提供的，以确保 LobeChat 平台能够正确解析和使用插件：

- **标识插件**: Manifest 包含了插件的唯一标识符 ( `identifier` )，这个标识符用于在 LobeChat 平台中区分不同的插件。
- **配置元数据**: 插件的元数据 ( `meta` )，如标题、描述、标签和头像，用于在 LobeChat 的用户界面中展示插件的信息，帮助用户理解插件的用途。
- **设定插件描述**: 通过指定系统设定 ( `systemRole` )，我们可以设定插件的描述信息，以便模型能够更好地理解插件的功能和用途。
- **定义接口**: 通过在 Manifest 中声明 API 接口 ( `api` )，插件可以清晰地告诉 LobeChat 平台它能够提供哪些功能和服务。
- **指定 UI 展示**: 插件的 UI 配置 ( `ui` ) 决定了插件如何在 LobeChat 中显示，包括其模式、尺寸和加载的 URL。

## Manifest Schema

LobeChat 的插件系统允许开发者使用 Manifest 文件定义插件的配置和行为。 下面是 Manifest 文件的详细结构说明。

manifest 是一个 JSON 文件，其中包含以下字段：

```typescript
{
  "api": Array<PluginApi>,       // 插件 API 的定义数组
  "author": String,              // 插件作者，可选
  "createAt": String,            // 插件创建日期，可选
  "gateway": String,             // 插件网关地址，可选
  "homepage": String,            // 插件主页 URL，可选
  "identifier": String,          // 插件唯一标识符
  "meta": {                      // 插件元数据
    "avatar": String,            // 插件头像 URL，可选
    "description": String,       // 插件描述，可选
    "tags": Array<String>,       // 插件标签数组，可选
    "title": String              // 描述插件的标题，可选
  },
  "openapi": String,             // 插件 OpenAPI 规范 URL，可选
  "settings": JSONSchema,        // 插件设置的 JSON Schema，可选
  "systemRole": String,          // 插件系统角色，可选
  "type": Enum['default', 'markdown', 'standalone'], // 插件类型，可选
  "ui": {                        // 插件 UI 配置，可选
    "height": Number,            // UI 高度，可选
    "mode": Enum['iframe', 'module'], // UI 模式，可选
    "url": String,               // UI 地址
    "width": Number              // UI 宽度，可选
  }
}
```

一个示例如下：

```json
{
  "$schema": "../node_modules/@lobehub/chat-plugin-sdk/schema.json",
  "api": [
    {
      "url": "http://localhost:3400/api/clothes",
      "name": "recommendClothes",
      "description": "根据用户的心情，给用户推荐他有的衣服",
      "parameters": {
        "properties": {
          "mood": {
            "description": "用户当前的心情，可选值有：开心（happy）, 难过（sad）,生气 （anger）,害怕（fear）,惊喜（ surprise）,厌恶 （disgust）",
            "enums": ["happy", "sad", "anger", "fear", "surprise", "disgust"],
            "type": "string"
          },
          "gender": {
            "type": "string",
            "enum": ["man", "woman"],
            "description": "对话用户的性别，需要询问用户后才知道这个信息"
          }
        },
        "required": ["mood", "gender"],
        "type": "object"
      }
    }
  ],
  "gateway": "http://localhost:3400/api/gateway",
  "identifier": "chat-plugin-template",
  "ui": {
    "url": "http://localhost:3400",
    "height": 200
  },
  "version": "1"
}
```

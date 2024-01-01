---
title: Plugin Manifest
group:
  title: Concepts
  order: 0
nav:
  title: Complete Guide
  order: 2
order: 1
---

# Plugin Manifest

The LobeChat Plugin Manifest is a crucial configuration file used to describe and define the basic information and behavior of a LobeChat plugin. The Manifest file serves as the "identity card" of the plugin, providing the necessary information for the LobeChat platform to handle and integrate the plugin.

## Introduction

The Manifest file is typically provided in JSON format to ensure that the LobeChat platform can correctly parse and use the plugin:

- **Identify the plugin**: The Manifest contains the unique identifier (`identifier`) of the plugin, which is used to distinguish different plugins within the LobeChat platform.
- **Configure metadata**: The plugin's metadata (`meta`), such as title, description, tags, and avatar, is used to display the plugin's information in the LobeChat user interface, helping users understand the purpose of the plugin.
- **Set plugin description**: By specifying the system role (`systemRole`), we can set the plugin's description to help the model better understand the functionality and purpose of the plugin.
- **Define interfaces**: By declaring API interfaces (`api`) in the Manifest, the plugin can clearly inform the LobeChat platform about the functionality and services it can provide.
- **Specify UI display**: The plugin's UI configuration (`ui`) determines how the plugin is displayed in LobeChat, including its mode, size, and the URL to load.

## Manifest Schema

The LobeChat plugin system allows developers to define the configuration and behavior of plugins using the Manifest file. Below is a detailed description of the structure of the Manifest file.

The manifest is a JSON file containing the following fields:

```typescript
{
  "api": Array<PluginApi>,       // Array defining the plugin's API
  "author": String,              // Plugin author, optional
  "createAt": String,            // Plugin creation date, optional
  "gateway": String,             // Plugin gateway address, optional
  "homepage": String,            // Plugin homepage URL, optional
  "identifier": String,          // Plugin unique identifier
  "meta": {                      // Plugin metadata
    "avatar": String,            // Plugin avatar URL, optional
    "description": String,       // Plugin description, optional
    "tags": Array<String>,       // Array of plugin tags, optional
    "title": String              // Title describing the plugin, optional
  },
  "openapi": String,             // Plugin OpenAPI specification URL, optional
  "settings": JSONSchema,        // JSON Schema for plugin settings, optional
  "systemRole": String,          // Plugin system role, optional
  "type": Enum['default', 'markdown', 'standalone'], // Plugin type, optional
  "ui": {                        // Plugin UI configuration, optional
    "height": Number,            // UI height, optional
    "mode": Enum['iframe', 'module'], // UI mode, optional
    "url": String,               // UI URL
    "width": Number              // UI width, optional
  }
}
```

An example is as follows:

```json
{
  "$schema": "../node_modules/@lobehub/chat-plugin-sdk/schema.json",
  "api": [
    {
      "url": "http://localhost:3400/api/clothes",
      "name": "recommendClothes",
      "description": "Recommend clothes based on the user's mood",
      "parameters": {
        "properties": {
          "mood": {
            "description": "The user's current mood, optional values are: happy, sad, anger, fear, surprise, disgust",
            "enums": ["happy", "sad", "anger", "fear", "surprise", "disgust"],
            "type": "string"
          },
          "gender": {
            "type": "string",
            "enum": ["man", "woman"],
            "description": "User's gender, this information is known only after asking the user"
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

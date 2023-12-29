---
title: Definition of Plugin Manifest
group: Plugin Development
order: 1
---

# Manifest Definition

The manifest aggregates information on how plugin functionality is implemented. The core fields are `api` and `ui`, which respectively describe the server-side API capabilities of the plugin and the frontend rendering interface addresses.

Taking the [manifest](https://github.com/lobehub/chat-plugin-template/blob/main/public/manifest-dev.json) in our provided template as an example:

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
            "description": "Current mood of the user, optional values are: happy, sad, anger, fear, surprise, disgust",
            "enums": ["happy", "sad", "anger", "fear", "surprise", "disgust"],
            "type": "string"
          },
          "gender": {
            "type": "string",
            "enum": ["man", "woman"],
            "description": "User's gender, this information needs to be obtained from the user"
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

In this manifest, the main sections include the following:

## `identifier`

This is the unique identifier for the plugin, used to differentiate between different plugins. This field needs to be globally unique.

## `api`

This is an array containing all the API interface information provided by the plugin. Each interface includes fields such as url, name, description, and parameters, all of which are required.

The `description` and `parameters` fields of each interface will be sent to the GPT as the `functions` parameter in a [Function Call](https://sspai.com/post/81986), as shown below:

```json
{
  "functions": [
    {
      "name": "realtimeWeather",
      "description": "Get the current weather condition",
      "parameters": {
        "type": "object",
        "properties": {
          "city": {
            "description": "City name",
            "type": "string"
          }
        },
        "required": ["city"]
      }
    }
  ],
  "messages": [
    {
      "role": "user",
      "content": "What should I wear tomorrow?"
    },
    {
      "role": "assistant",
      "content": "Please tell me the city you are in."
    },
    {
      "role": "user",
      "content": "Hangzhou"
    }
  ]
}
```

The parameters need to align with the [JSON Schema](https://json-schema.org/) specification and can be validated using the following approach:

```ts
import { z } from 'zod';

const JSONSchema = z.object({
  properties: z.object({}),
  type: z.enum(['object']),
});
```

In our provided template example, the API interface corresponds to the `recommendClothes` endpoint, which recommends clothes based on the user's mood and gender. The parameters for this interface include the user's mood and gender, both of which are required.

## `ui`

This field contains information about the plugin's user interface, indicating where LobeChat can load the plugin's frontend interface from. Since the loading of plugin interfaces in LobeChat is based on iframes, the height and width of the plugin interface can be specified as needed.

## `gateway`

This field specifies the gateway for LobeChat to query the plugin's API interface. LobeChat's default plugin gateway is a cloud-based service, and custom plugin requests need to be sent to a local service. By specifying the gateway in the manifest, LobeChat will directly request this address and access the local plugin service. Published online plugins may omit this field.

## API and Schema

For a complete introduction to the various fields of the manifest, refer to: [manifest](/api/plugin-manifest).

## JSON Type Hints

The SDK provides a JSON Schema definition for the manifest, which can be used to provide type information and intelligent hints for IDEs when writing the `manifest.json` file.

When using this, you only need to declare the `$schema` field in the JSON configuration file to point to the schema definition file. For example, in [lobehub/chat-plugin-template](https://github.com/lobehub/chat-plugin-template/blob/main/public/manifest-dev.json), with a project structure like:

```plaintext
lobehub/chat-plugin-template
├── CHANGELOG.md
├── node_modules
├── README.md
├── src
├── public
│   ├── foo.json
│   ├── manifest-dev.json
│   └── manifest-standalone.json
└── package.json
```

The `$schema` field of `manifest-dev.json` can be configured with a relative path like this:

```json filename=manifest-dev.json
{
  "$schema": "../node_modules/@lobehub/chat-plugin-sdk/schema.json",
  "api": [],
  "gateway": "http://localhost:3400/api/gateway",
  "identifier": "plugin-identifier",
  "ui": {
    "url": "http://localhost:3400",
    "height": 200
  },
  "version": "1"
}
```

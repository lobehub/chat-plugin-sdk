---
title: Frontend Overview
group:
  title: Plugin Frontend
  order: 4
order: 0
---

# Overview of LobeChat Frontend Plugin Development

LobeChat frontend plugin development allows developers to build and implement the user interface (UI) and interaction logic of plugins on the LobeChat platform. This document will provide a high-level overview to help developers understand how to develop the frontend part of LobeChat plugins and introduce the key steps required to interact with the LobeChat platform.

## Plugin Types and Frontend Requirements

Before starting development, it is important to understand the frontend development requirements for different plugin types:

- **Markdown Plugin**: No frontend development is needed as they directly return content in Markdown format to be displayed in the chat.
- **Default Plugin**: Frontend UI is optional, and if needed, a simple UI display can be built.
- **Standalone Plugin**: Frontend development is mandatory as they require providing a rich interactive experience.

## Using Chat Plugin SDK

LobeChat provides the Chat Plugin SDK, which is a set of tools and components to help developers build plugins. For plugin types that require frontend (such as `default` and `standalone`), you need to install the SDK in your project and use it to build the frontend part of the plugin.

```fish
pnpm i @lobehub/chat-plugin-sdk
```

or

```fish
bun i @lobehub/chat-plugin-sdk
```

## Developing Frontend UI and Logic

Depending on your plugin type, you may need to develop the user interface and interaction logic. For `standalone` plugins, implementing the complete application logic and communication mechanism with LobeChat is crucial.

## Configuring the Manifest File

To integrate with the LobeChat platform, each plugin needs to have a configuration manifest (`manifest.json`). For plugins that require frontend, you need to configure the `ui` field in the `manifest.json`. The following is the basic configuration for the `ui` field:

```json
"ui": {
  "height": 500,
  "mode": "iframe",
  "url": "http://example.com/iframe",
  "width": 800
}
```

The `ui` field specifies the loading method, size, and source address of the plugin UI. The `mode` here is usually set to `iframe`, meaning your UI will be loaded as an embedded frame in LobeChat. For the complete `manifest.json` configuration and its explanation, please refer to the [Plugin Manifest Documentation](/en-US/api/plugin-manifest).

## Embedding UI in an Iframe

The UI of LobeChat plugins is essentially embedded in an iframe, which means the plugins support all types of frontend technology stacks. Whether you choose React, Vue, Angular, or other frameworks, they can be used to build your plugin UI.

### Support for React Technology Stack

LobeChat provides templates and component libraries `@lobehub/ui` specifically designed for the React technology stack, enabling developers to quickly get started and build plugin UI.

```sh
npm install @lobehub/ui
```

or

```sh
yarn add @lobehub/ui
```

## Key Considerations

It is recommended to follow the following steps and considerations to build an extension plugin that provides an excellent experience for users:

- Understand the frontend requirements of different plugin types.
- Use the SDK and component library provided by LobeChat to simplify frontend development.
- Configure the `ui` field in the `manifest.json` to ensure the plugin interface loads correctly.
- Consider the complexity of user interaction and the responsiveness of the plugin.

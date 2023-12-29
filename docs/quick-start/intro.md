---
title: Introduction
group: Quick Start
nav:
  title: Guide
  order: 1
---

# Introduction

## What is LobeChat Plugin?

LobeChat plugin is an extension feature that enhances the chatting experience in LobeChat. The plugin can provide various functionalities, including but not limited to the following:

1. **Message Handling**: The plugin can listen to and handle messages sent from LobeChat. By using the plugin, users can execute specific actions in the chat using custom commands or trigger words, such as sending messages, querying data, calling APIs, etc.
2. **Interface Enhancement**: The plugin can provide custom interface elements for displaying richer information or providing interactive functions. These interface elements can be embedded in the chat window, allowing users to perform certain actions directly in the chat interface without switching to other applications or web pages.
3. **Data Processing**: The plugin can handle and transform the data received from LobeChat to meet specific business needs. For example, the plugin can format, filter, or sort the received data, and then display the processed data to users or send it to other systems.
4. **Integration with Third-Party Services**: The plugin can integrate with third-party services to implement more complex functionalities. For example, the plugin can integrate with email services, allowing users to send emails via chat; or integrate with calendar services, enabling users to create and manage schedules in the chat.

By installing and using plugins, users can customize and extend the functionality of LobeChat according to their needs, making it more applicable to different scenarios and workflows.

## Composition of LobeChat Plugin

A LobeChat plugin consists of the following components:

1. **Plugin Index**: Used to display basic information about the plugin, including the plugin name, description, author, version, and a link to the plugin manifest. The official plugin index can be found at: [lobe-chat-plugins](https://github.com/lobehub/lobe-chat-plugins). To list a plugin in the official plugin marketplace, a PR needs to be submitted to the [repository](https://github.com/lobehub/lobe-chat-plugins/pulls).
2. **Plugin Manifest**: Used to describe the functionality of the plugin, including the server-side description of the plugin, frontend display information, version number, etc. For detailed information about the manifest, please refer to the [manifest documentation](manifest-docs-url).
3. **Plugin Service**: Used to implement the server-side and frontend modules described in the plugin manifest:
   - **Server-Side**: Implementation of the interface capabilities described in the `api` section of the manifest.
   - **Frontend UI** (optional): Implementation of the interface described in the `ui` section of the manifest, which will be exposed in the plugin messages, enabling a richer way of presenting information than plain text.

## Get Started

- [Quick Start](/guides/get-start)
- [Development Template](/guides/template)
- Plugin Development
  - [Plugin Manifest](/guides/plugin-manifest)
  - [Server-Side Development](/guides/plugin-server)
  - [UI Interface](/guides/plugin-ui)
  - [Plugin Settings](/guides/plugin-settings)
- [API Documentation](/api/plugin-manifest)

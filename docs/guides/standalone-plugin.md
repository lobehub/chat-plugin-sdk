---
title: Standalone Type Plugin
group: Plugin Types
order: 2
---

# Standalone Plugin

The `standalone` plugin represents a powerful and flexible type of plugin in the LobeChat plugin ecosystem, allowing developers to build independent application-level interactive experiences. These plugins completely control user interaction logic independently of LobeChat's basic conversation flow. They are suitable for scenarios that require deep user involvement, such as form filling, games, or any application requiring multi-step interaction. The uniqueness of Standalone plugins lies in their ability to independently decide whether and when to trigger AI messages, and even trigger AI replies programmatically.

The `standalone` type of plugin is the biggest difference between LobeChat and the ChatGPT plugin system. It is because of the existence of this type of plugin that we can achieve more complex conversation interaction experiences through plugins. For example, the official [Clock plugin](https://github.com/lobehub/chat-plugin-clock-time) is a standard Standalone plugin, which does not include any backend API and is implemented purely on the frontend.

<video src="https://github.com/lobehub/lobe-chat/assets/28616219/206b4c94-4674-4007-ac4f-450b9778d7f6" width="100%" autoplay mute ></video>

## Advantages and Scenarios

The Standalone plugin mechanism is very friendly to pure frontend applications, allowing developers to integrate with LobeChat without changing existing code. This mechanism not only provides a broad development space for frontend developers but also enables richer interaction modes than ChatGPT plugins.

If your plugin scenario meets any of the following conditions, a Standalone plugin may be your ideal choice:

- The plugin needs to provide a rich and complex interactive experience.
- The plugin needs complete control over interaction logic, including the timing of triggering AI messages.
- The plugin is a standalone application, possibly including forms, games, or other complex functionality.
- The plugin requires completely custom frontend display and wants to programmatically control AI behavior.

## Standalone Plugin Communication Mechanism

As a Standalone plugin, you need to pay special attention to the communication mechanism with LobeChat. To achieve independent interaction logic, you need to use the Plugin SDK to listen for messages, send status updates, and complete interactions.

The communication between Standalone plugins and LobeChat is achieved through a carefully designed API and event listening mechanism. These API methods encapsulate the internal communication details, providing a concise and powerful way to exchange data and trigger behavior. The following is a detailed explanation of the Standalone plugin communication mechanism:

### Initializing Communication

When a Standalone plugin loads and is ready to interact with LobeChat, it first needs to obtain initialization data. This can be achieved through the `lobeChat.getPluginPayload()` method. This method internally listens for the `message` event, waiting for the initialization message sent by LobeChat, and returns the parsed data upon receiving the message, including plugin parameters, name, settings, and status.

### Getting and Setting Plugin Messages

Using the `lobeChat.getPluginMessage()` method, the plugin can request the current message content. This method also relies on the `message` event listener and returns the message content upon receiving the message sent by LobeChat.
To update the plugin message content, the plugin can call the `lobeChat.setPluginMessage(content)` method. The `content` parameter is the new message content the plugin wishes to set.

### Getting and Setting Plugin State

Getting and setting plugin state can be done through the `lobeChat.getPluginState(key)` and `lobeChat.setPluginState(key, value)` methods. This allows the plugin to maintain and manage its own state information.

### Getting and Updating Plugin Settings

The plugin can request its settings by calling the `lobeChat.getPluginSettings()` method. If the plugin needs to update its settings, it can use the `lobeChat.setPluginSettings(settings)` method to send the new settings data to LobeChat. The `settings` parameter contains the information to be updated.

### Triggering AI Messages and Creating Assistant Messages

The plugin can use the `lobeChat.triggerAIMessage(id)` and `lobeChat.createAssistantMessage(content)` methods to trigger AI messages or create new assistant messages, thereby interacting with AI.

## Configuring as a Standalone Plugin

### Configuring the Manifest

To configure your plugin as a Standalone type, you need to specify the `type` field as `standalone` in the plugin's `manifest.json` file.

```json5
{
  // Other configurations...
  type: 'standalone',
}
```

### Modifying Plugin Rendering Implementation

Since the communication mechanism of Standalone plugins is different from other types of plugins, you need to modify the frontend implementation of the plugin. Use the `lobeChat` instance object to communicate with the LobeChat core. Also, the entire lifecycle of the plugin application needs to be managed by you.

## Plugin Examples and Templates

To help you better understand and develop Standalone plugins, you can refer to the following resources:

- [Standalone Plugin Template](https://github.com/lobehub/chat-plugin-template/blob/main/public/manifest-standalone.json) - Understand the basic structure and configuration of Standalone type plugins.
- [Clock Time](https://github.com/lobehub/chat-plugin-clock-time) - An example of a Standalone plugin that is implemented purely on the frontend without the need for a backend API.
- [MidJourney Plugin](https://github.com/lobehub/chat-plugin-midjourney) - Another plugin that implements a unique Standalone interaction experience.

Through these examples and templates, you will be able to quickly get started and build your own Standalone plugins, providing users with a richer and more personalized interaction experience.

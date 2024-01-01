---
title: LobeChat Plugin Types
group: Concepts
order: 2
---

# LobeChat Plugin Types

LobeChat's plugin mechanism provides developers with powerful extension capabilities, allowing custom functions and interactions to be embedded in chats. Currently, LobeChat supports three types of plugins: `default`, `markdown`, and `standalone`. Here is a brief introduction to these three types of plugins:

## Default Plugin

The `default` plugin is the default type, mainly used for pure backend-driven plugins and display-oriented plugins, without interactive capabilities such as editing or deletion. They are suitable for scenarios that do not require complex user interaction and mainly rely on GPT for content summarization.

For example, the officially implemented web crawler plugin:

![web-crawler](https://github.com/lobehub/lobe-chat/assets/28616219/8a7191af-da07-4419-a0a1-37792b5c0c51)

Search engine plugin:

![search-engine](https://github.com/lobehub/lobe-chat/assets/28616219/573a905f-6df4-476b-8e1e-6c3098808ef8)

And all compatible OpenAI ChatGPT plugins are of the `default` type.

## Markdown Plugin

The `markdown` plugin type allows plugins to return content in Markdown format directly displayed in the chat. This rendering method is suitable for scenarios where the results are clear and do not need to be sent to AI for processing again. For example, when a user asks for specific information, the plugin can directly return a Markdown message containing the answer, without the need for additional AI summarization process. In addition, the configuration associated with this type can be set to no longer trigger AI messages, thus avoiding unnecessary AI calls.

![clothes](https://github.com/lobehub/lobe-chat/assets/28616219/7077a4d4-5b0f-4d4e-b332-d79b7df2b411)

## Standalone Plugin

The `standalone` plugin type is designed to support complex interactions. These plugins can fully control the interaction logic and run in the form of independent applications. They are suitable for scenarios that require rich user interaction, such as form filling, games, or other multi-step operations. `Standalone` plugins can decide whether to trigger AI messages on their own, and can even trigger AI replies programmatically.

The `standalone` type of plugin is the biggest difference between LobeChat and ChatGPT plugin systems. It is because of the existence of this type of plugin that we can achieve more complex conversation interaction experiences through plugins.

For example, the officially implemented clock plugin is a standard Standalone plugin, which is characterized by not containing any backend API and being implemented purely on the frontend.

<video src="https://github.com/lobehub/lobe-chat/assets/28616219/206b4c94-4674-4007-ac4f-450b9778d7f6" width="100%" autoplay mute ></video>

## How to Choose

When developing LobeChat plugins, choosing the correct plugin type is crucial to achieving the expected user experience. Here is a guide to help you choose the most suitable plugin type based on different scenarios and requirements.

### Default Plugin

Choose the `default` plugin if your needs fit the following scenarios:

- You want the plugin's content to be summarized or further processed by GPT.
- Your plugin requires simple backend processing and needs to be closely integrated with GPT's replies.
- Your plugin is mainly used for content display, may require custom frontend display, but does not involve user interaction with the plugin (such as clicking a confirm button).

For example, a website content summarization plugin, where the user provides a link, and the plugin returns a summary, which is then interpreted or supplemented by GPT.

### Markdown Plugin

Choose the `markdown` plugin if your needs fit the following scenarios:

- You need to quickly return clear, formatted text results.
- You do not need complex frontend interaction, but want the results to support rich Markdown format display.
- You want to avoid unnecessary AI summarization or processing and directly display the results to the user.
- Your plugin is for answering simple and specific queries, such as time or name queries.

For example, a plugin to query the current time, where the user asks "What time is it in Beijing now?" and the plugin returns a formatted Markdown message displaying the current time.

### Standalone Plugin

Choose the `standalone` plugin if your needs fit the following scenarios:

- Your plugin needs to provide a complex, interactive user experience.
- You want full control over the interaction logic, including whether to trigger subsequent AI messages.
- Your plugin is an independent application, possibly including forms, games, or other complex functions.
- You need a completely custom frontend display and want to control AI behavior programmatically.

For example, a plugin for an online booking system, where users can select a date and time through a form, and after submission, the plugin processes the booking and provides feedback.

When choosing a plugin type, consider the complexity of user interaction, the degree of dependence on AI, and the requirements for displaying content. Each type of plugin has its specific advantages and use cases. Choosing wisely can help you better meet the needs of users and provide an excellent chat experience.

## Summary

Through these three types of plugins, LobeChat provides developers with flexible choices for plugin development, covering chat experiences from simple display to complex interaction. As a developer, you can choose the most suitable plugin type for development based on your own needs and scenarios, to enhance user interaction and satisfaction.

---
title: Default Type Plugin
group: Plugin Types
order: 0
---

# Default Type Plugin

The `default` plugin is the default type of plugin, mainly used for pure backend-driven plugins and display-oriented plugins, without rich interactive capabilities such as editing or deletion. They are suitable for scenarios that do not require complex user interaction and mainly rely on GPT for content summarization.

For example, the officially implemented website crawler plugin:

![web-crawler](https://github.com/lobehub/lobe-chat/assets/28616219/8a7191af-da07-4419-a0a1-37792b5c0c51)

Search engine plugin:

![search-engine](https://github.com/lobehub/lobe-chat/assets/28616219/573a905f-6df4-476b-8e1e-6c3098808ef8)

And all compatible OpenAI ChatGPT plugins are of the `default` type.

## How to Choose

By default, we recommend choosing the `default` type plugin because default plugins cover common mainstream scenarios, such as:

- You want the plugin's content to be summarized or further processed by GPT.
- Your plugin requires simple backend processing and tight integration with GPT's responses.
- The plugin you need is mainly used for content display, may require custom frontend display, but does not involve user interaction with the plugin (such as clicking confirm buttons);

For example, a website content summarization plugin, where the user provides a link, and the plugin returns summary information, which is then interpreted or supplemented by GPT.

## Developing Default Plugins

The [tutorial](/zh-CN/quick-start/define-plugin-manifest) in the quick start has already introduced the development process of default plugins, so it will not be repeated here.

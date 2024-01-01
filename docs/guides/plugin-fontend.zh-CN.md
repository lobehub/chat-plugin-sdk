---
title: 前端实现概述
group:
  title: 插件前端
  order: 4
order: 0
---

# LobeChat 插件前端开发概述

LobeChat 插件前端开发允许开发者在 LobeChat 平台上构建和实现插件的用户界面 (UI) 和交互逻辑。本文档将提供一个高层次的概述，帮助开发者了解如何开发 LobeChat 插件的前端部分，并介绍与 LobeChat 平台进行交互所需的关键步骤。

## 插件类型与前端需求

在开始开发前，重要的是要理解不同插件类型对前端开发的需求：

- **Markdown 插件**：不需要前端开发，因为它们直接返回 Markdown 格式的内容显示在聊天中。
- **Default 插件**：前端 UI 是可选的，如有需要，可以构建简单的 UI 展示。
- **Standalone 插件**：前端开发是必须的，因为它们需要提供丰富的交互体验。

## 使用 Chat Plugin SDK

LobeChat 提供了 Chat Plugin SDK，它是一套工具和组件，用于帮助开发者构建插件。对于需要前端的插件类型（如 `default` 和 `standalone`），你需要在项目中安装 SDK 并使用它来构建插件的前端部分。

```fish
pnpm i @lobehub/chat-plugin-sdk
```

或

```fish
bun i @lobehub/chat-plugin-sdk
```

## 开发前端 UI 和逻辑

根据你的插件类型，你可能需要开发用户界面和交互逻辑。对于 `standalone` 插件，实现完整的应用逻辑和与 LobeChat 的通信机制至关重要。

## 配置 manifest 文件

为了与 LobeChat 平台集成，每个插件都需要有一个配置清单（`manifest.json`）。对于需要前端的插件，你需要在 `manifest.json` 中配置 `ui` 字段。以下是 `ui` 字段的基本配置：

```json
"ui": {
  "height": 500,
  "mode": "iframe",
  "url": "http://example.com/iframe",
  "width": 800
}
```

`ui` 字段指定了插件 UI 的加载方式、尺寸和源地址。这里的 `mode` 通常设置为 `iframe`，意味着你的 UI 将作为一个内嵌的框架加载到 LobeChat 中。完整的 `manifest.json` 配置及其解释，请查看[插件描述清单文档](/zh-CN/api/plugin-manifest)。

## UI 嵌入 iframe

LobeChat 插件的 UI 本质上是嵌入了一个 iframe，这意味着插件支持所有类型的前端技术栈。无论你选择 React、Vue、Angular 或其他框架，都可以用来构建你的插件 UI。

### React 技术栈支持

LobeChat 提供了专门为 React 技术栈设计的模板和组件库 `@lobehub/ui`，以便开发者能够快速上手和构建插件 UI。

```sh
npm install @lobehub/ui
```

或

```sh
yarn add @lobehub/ui
```

## 关键考虑因素

建议遵循以下步骤和考虑因素，以此构建一个为用户提供出色体验的扩展插件。

- 了解不同插件类型的前端需求。
- 使用 LobeChat 提供的 SDK 和组件库来简化前端开发。
- 配置 `manifest.json` 中的 `ui` 字段以确保插件界面能正确加载。
- 考虑用户交互的复杂度和插件的响应性。

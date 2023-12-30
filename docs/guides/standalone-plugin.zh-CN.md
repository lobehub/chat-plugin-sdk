---
title: Standalone 类型插件
group: 插件类型
order: 2
---

# Standalone 插件

`standalone` 插件代表着 LobeChat 插件生态中的一种强大且灵活的插件类型，允许开发者构建独立的应用级交互体验。这类插件完全自主地控制用户交互逻辑，独立于 LobeChat 的基本会话流程。适用于那些需要深度用户参与的场景，如表单填写、游戏或者任何需要多步骤交互的应用。Standalone 插件的独特之处在于它们可以自行决定是否和何时触发 AI 消息，甚至可以编程方式触发 AI 回复。

`standalone` 类型的插件正是 LobeChat 与 ChatGPT 插件系统的最大差别，正因为该类插件的存在，我们才能够通过插件实现更加复杂的会话交互体验。 例如：官方实现的 [时钟插件](https://github.com/lobehub/chat-plugin-clock-time) 就是标准的 Standalone 插件，该插件的特点是不包含任何后端 API，由纯前端实现。

<video src="https://github.com/lobehub/lobe-chat/assets/28616219/206b4c94-4674-4007-ac4f-450b9778d7f6" width="100%" autoplay mute ></video>

## 优势与场景

Standalone 插件机制对于纯前端应用非常友好，允许开发者无需改变现有代码即可与 LobeChat 集成。这种机制不仅为前端开发者提供了广阔的发展空间，而且能够实现比 ChatGPT 插件更加丰富的交互模式。

如果你的插件场景满足以下任一条件，Standalone 插件可能是你的理想选择：

- 插件需要提供丰富而复杂的交互体验。
- 插件需要完全控制交互逻辑，包括触发 AI 消息的时机。
- 插件是一个独立应用，可能包含表单、游戏或其他复杂功能。
- 插件需要完全自定义的前端展示，并且希望能够编程控制 AI 行为。

## standalone 插件通信机制

作为 Standalone 插件，你需要特别注意与 LobeChat 的通信机制。为了实现独立的交互逻辑，你需要自行利用 Plugin SDK 来监听消息、发送状态更新和完成交互。

Standalone 插件与 LobeChat 主体之间的通信是通过一套精心设计的 API 和事件监听机制来实现的。这些 API 方法封装了内部的通信细节，提供了一种简洁而强大的方式来交换数据和触发行为。以下是 Standalone 插件通信机制的详细说明：

### 初始化通信

当 Standalone 插件加载并准备好与 LobeChat 交互时，它首先需要获取初始化数据。这可以通过`lobeChat.getPluginPayload()`方法实现。该方法内部监听 `message` 事件，等待 LobeChat 发送的初始化消息，并在接收到消息后返回解析后的数据，包括插件参数、名称、设置和状态。

### 获取、设置插件消息

使用`lobeChat.getPluginMessage()`方法，插件可以请求当前的消息内容。此方法同样基于`message`事件监听，并在接收到 LobeChat 发送的消息后，返回该消息内容。
为了更新插件消息的内容，插件可以调用`lobeChat.setPluginMessage(content)`方法。`content`参数是插件希望设置的新消息内容。

### 获取和设置插件状态

插件状态的获取和设置可以通过`lobeChat.getPluginState(key)`和`lobeChat.setPluginState(key, value)`方法进行。这使得插件能够维护和管理自己的状态信息。

### 获取和更新插件设置

插件可以通过调用`lobeChat.getPluginSettings()`方法来请求其设置。 若插件需要更新其设置，可以使用`lobeChat.setPluginSettings(settings)`方法，将新的设置数据发送给 LobeChat。`settings`参数包含了要更新的设置信息。

### 触发 AI 消息和创建助理消息

插件可以利用`lobeChat.triggerAIMessage(id)`和`lobeChat.createAssistantMessage(content)`方法来触发 AI 消息或创建新的助理消息，从而与 AI 进行交互。

## 配置为 standalone 插件

### 配置 manifest

要将你的插件配置为 Standalone 类型，需要在插件的`manifest.json`文件中指定`type`字段为`standalone`。

```json5
{
  // 其他配置...
  type: 'standalone',
}
```

### 修改插件渲染实现

由于 standalone 插件的通信机制与其他类型的插件不同，因此你需要修改插件的前端实现。通过 `lobeChat` 实例对象来完成与 LobeChat 主体的通信。同时整个插件应用的生命周期也需要你自行管理。

## 插件示例和模板

为了帮助你更好地理解和开发 Standalone 插件，你可以参考以下资源：

- [Standalone 插件模板](https://github.com/lobehub/chat-plugin-template/blob/main/public/manifest-standalone.json) - 了解 Standalone 类型插件的基本结构和配置。
- [时钟时刻](https://github.com/lobehub/chat-plugin-clock-time) - 一个无需后端 API，纯前端实现的 Standalone 插件示例。
- [MidJourney 插件](https://github.com/lobehub/chat-plugin-midjourney) - 另一个实现了独特 Standalone 交互体验的插件。

通过这些示例和模板，你将能够更快速地入门并构建自己的 Standalone 插件，为用户带来更加丰富和个性化的交互体验。

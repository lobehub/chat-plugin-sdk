---
title: Standalone 类型插件
group: 插件类型
order: 2
---

# Standalone 插件

`standalone` 插件类型是为了支持复杂交互而设计的。这类插件可以完全控制交互逻辑，并且以独立的应用的形态运行。它们适合于需要丰富用户交互的场景，例如表单填写、游戏或其他需要多步骤操作的应用。`standalone` 插件可以通过自行控制来决定是否触发 AI 消息，甚至可以通过程序化的方式来触发 AI 回复。

`standalone` 类型的插件正是 LobeChat 与 ChatGPT 插件系统的最大差别，正因为该类插件的存在，我们才能够通过插件实现更加复杂的会话交互体验。

例如：官方实现的时钟插件就是标准的 Standalone 插件，该插件的特点是不包含任何后端 API，由纯前端实现。

<video src="https://github.com/lobehub/lobe-chat/assets/28616219/206b4c94-4674-4007-ac4f-450b9778d7f6" width="100%" autoplay mute ></video>

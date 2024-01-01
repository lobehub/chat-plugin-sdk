---
title: Markdown Type Plugin
group:
  title: Plugin Types
  order: 1
order: 2
---

# Markdown Type Plugin

The `Markdown` plugin type allows plugins to return content in Markdown format directly displayed in the chat. This rendering method is suitable for scenarios where the result is clear and does not need to be sent to AI for processing again. For example, when a user asks for specific information, the plugin can directly return a Markdown message containing the answer, without the need for additional AI summarization process. In addition, plugins of this type by default will not trigger AI messages, thus avoiding unnecessary AI calls.

![clothes](https://github.com/lobehub/lobe-chat/assets/28616219/7077a4d4-5b0f-4d4e-b332-d79b7df2b411)

## How to Choose

You can choose the `markdown` plugin if your needs align with the following scenarios:

- You need to quickly return clear, formatted text results.
- You do not require complex front-end interactions, but want the results to support rich Markdown format display.
- You want to avoid unnecessary AI summarization or processing and directly display the results to the user.
- Your plugin is for answering simple and specific queries, such as time or name queries.

For example, a plugin that queries the current time, when a user asks "What time is it in Beijing now?" the plugin returns a formatted Markdown message displaying the current time.

## Configuring as a Markdown Plugin

### Configure the Manifest

In the plugin's `manifest.json` file, set the `type` field to `markdown`.

```json
{
  "type": "markdown"
}
```

### Adjust the Output Request Format

Additionally, you need to return your request in plain text in Markdown format:

```ts
export default async (req: Request) => {
  // ... Other implementation code

  return new Response(
    `Since your mood is ${result.mood}, I recommend you wear ${result.clothes
      .map((c) => c.name)
      .join('、')}.`,
  );
};
```

The effect is as follows:

![clothes](https://github.com/lobehub/lobe-chat/assets/28616219/7077a4d4-5b0f-4d4e-b332-d79b7df2b411)

## Plugin Example

You can view the [Markdown Plugin Example](https://github.com/lobehub/chat-plugin-template/blob/main/public/manifest-markdown.json) in the chat-plugin-template to understand the implementation of the markdown type plugin.

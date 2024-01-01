---
title: Markdown 类型插件
group:
  title: 插件类型
  order: 1
order: 2
---

# Markdown 类型插件

`Markdown` 插件类型允许插件返回 Markdown 格式的内容直接显示在聊天中。这种渲染方式适用于结果明确，不需要再次发送给 AI 进行处理的场景。例如，当用户询问某个特定信息时，插件可以直接返回一个包含答案的 Markdown 消息，而不需要额外的 AI 总结过程。此外，与这种类型搭配的插件默认将不再触发 AI 消息，这样就可以避免不必要的 AI 调用。

![clothes](https://github.com/lobehub/lobe-chat/assets/28616219/7077a4d4-5b0f-4d4e-b332-d79b7df2b411)

## 如何选择

如果你的需求符合以下场景，可以选择 `markdown` 插件：

- 你需要快速返回明确的、格式化的文本结果。
- 你不需要复杂的前端交互，但希望结果能够支持 Markdown 格式的丰富展示。
- 你希望避免不必要的 AI 总结或处理，直接将结果展示给用户。
- 你的插件是为了解答简单且明确的查询，例如时间查询、人名查询等。

例如，一个查询当前时间的插件，用户询问 “现在北京时间几点？” 插件返回一个格式化的 Markdown 消息，显示当前时间。

## 配置为 markdown 插件

### 配置 manifest

在插件的 `manifest.json` 文件中，将 `type` 字段设置为 `markdown` 即可。

```json
{
  "type": "markdown"
}
```

### 调整输出请求格式

同时，你需要将你的请求以 markdown 格式的纯文本返回：

```ts
export default async (req: Request) => {
  // ... 其他实现代码

  return new Response(
    `由于你的心情是${result.mood},我推荐你穿 ${result.clothes.map((c) => c.name).join('、')}。`,
  );
};
```

效果如下：

![clothes](https://github.com/lobehub/lobe-chat/assets/28616219/7077a4d4-5b0f-4d4e-b332-d79b7df2b411)

## 插件示例

你可以在 chat-plugin-template 中查看 [Markdown 插件示例](https://github.com/lobehub/chat-plugin-template/blob/main/public/manifest-markdown.json)，以了解 markdown 类型插件的实现。

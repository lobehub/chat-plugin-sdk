---
title: postToFillPluginContent
description: 该方法用于向 LobeChat 发送消息以填充插件的内容
group: 通信方法
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
nav: API
---

该方法用于向 LobeChat 发送消息以填充插件的内容。

## 语法

```ts
postToFillPluginContent(content: any): void;
```

## 参数

- `content`：要填充的插件内容。

## 示例

```ts
import { postToFillPluginContent } from '@lobehub/chat-plugin-sdk/client';

const fillContent = (content) => {
  postToFillPluginContent(content);
};

fillContent({ title: 'Hello', message: 'Welcome to my plugin' });
```

## 注意事项

- 请确保在插件加载完成后调用 `postToFillPluginContent` 函数。
- 请确保在插件的页面中使用该函数。
- 传入的 `content` 参数是要填充的插件内容。
- 填充的插件内容将会序列化后，发送给 LobeChat，并继续会话流程。
- 该方法不返回任何值。

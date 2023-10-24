---
title: postToUpdatePluginSettings
description: 通知 LobeChat 更新插件的配置信息
group: 通信方法
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
nav: API
---

该方法用于向 LobeChat 发送消息以更新插件的配置信息。

## 语法

```ts
postToUpdatePluginSettings(settings: any): void;
```

## 参数

- `settings`：要更新的插件配置信息。

## 示例

```ts
import { postToUpdatePluginSettings } from '@lobehub/chat-plugin-sdk/client';

const updateSettings = (settings) => {
  postToUpdatePluginSettings(settings);
};

updateSettings({ theme: 'dark', fontSize: 12 });
```

## 注意事项

- 请确保在插件加载完成后调用 `postToUpdatePluginSettings` 函数。
- 请确保在插件的页面中使用该函数。
- 传入的 `settings` 参数是要更新的插件配置信息。
- 更新的插件配置信息将会被发送给 LobeChat 并更新插件的配置。
- 该方法不返回任何值。

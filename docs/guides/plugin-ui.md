---
title: 插件 UI
group: 插件开发
order: 3
---

# 插件 UI 界面

对于 LobeChat 插件而言，UI 界面是一个可选项。例如 [「网页内容提取」插件](https://github.com/lobehub/chat-plugin-web-crawler) 就没有实现相应的用户界面。

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265263241-0e765fdc-3463-4c36-a398-aef177a30df9.png)

如果你希望在插件消息中展示更加丰富的信息，或者包含一些富交互，可以为插件定义一个用户界面。例如下图，则为搜索引擎插件的用户界面。

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265263427-9bdc03d5-aa61-4f62-a2ce-88683f3308d8.png)

## UI 界面实现

LobeChat 通过 `iframe` + `postMessage` 实现插件 ui 的加载与通信。因此， 插件 UI 的实现方式与普通的网页开发一致，你可以使用任何你熟悉的前端框架与开发语言。

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265263653-4ea87abc-249a-49f3-a241-7ed93ddb1ddf.png)

在我们提供的模板中，我们使用了 React + Next.js + antd 作为前端界面框架，你可以在 `src/pages/index.tsx` 中找到用户界面的实现。

## 插件通信

其中关于插件通信，我们提供了两个方法实现插件与 LobeChat 主体的双向通信。

### 插件主动请求

你可以通过 [fetchPluginMessage](/api/message) 方法主动向 LobeChat 获取当前消息的数据。

```tsx | pure
import { fetchPluginMessage } from '@lobehub/chat-plugin-sdk';
import { memo, useEffect, useState } from 'react';

import { ResponseData } from '@/type';

const Render = memo(() => {
  const [data, setData] = useState<ResponseData>();

  useEffect(() => {
    // 从 LobeChat 获取当前插件的消息
    fetchPluginMessage().then((e: ResponseData) => {
      setData(e);
    });
  }, []);

  return <>...</>;
});

export default Render;
```

:::info
`fetchPluginMessage` 方法是一个普通的异步请求方法，因此可以搭配 `swr` 或 `react-query` 实现数据的缓存与自动更新，达到更加优良的用户体验。
:::

### 接受 LobeChat 推送

你可以通过 [useWatchPluginMessage](/api/use-watch-plugin-message) 方法订阅 LobeChat 向插件发送的消息。

```tsx | pure
import { useWatchPluginMessage } from '@lobehub/chat-plugin-sdk';

const Demo = () => {
  const { data, loading } = useWatchPluginMessage();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>插件发送的消息数据：</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Demo;
```

---
title: useWatchPluginMessage
description: 监听获取 LobeChat 发过来的插件消息
nav: API
order: 1
group:
  title: Hooks
  order: 10
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
---

`useWatchPluginMessage` 是 Chat Plugin SDK 封装一个的 React Hook，用于监听从 LobeChat 发过来的插件消息。

## 语法

```ts
const { data, loading } = useWatchPluginMessage<T>();
```

## 示例

```tsx | pure
import { useWatchPluginMessage } from '@lobehub/chat-plugin-sdk/client';

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

## 注意事项

- 请确保 `useWatchPluginMessage` 在 React 函数组件内部使用。

## 返回值类型定义

| 属性      | 类型      | 描述                 |
| --------- | --------- | -------------------- |
| `data`    | `T`       | 插件发送的消息数据   |
| `loading` | `boolean` | 表示是否正在加载数据 |

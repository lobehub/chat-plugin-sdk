---
title: useWatchPluginMessage
description: used to listen for plugin messages sent from LobeChat
nav: API
order: 1
group:
  title: Hooks
  order: 10
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
---

`useWatchPluginMessage`This is a React Hook encapsulating the Chat Plugin SDK, used to listen for plugin messages sent from LobeChat.

## Syntax

```ts
const { data, loading } = useWatchPluginMessage<T>();
```

## Examples

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

## Notes

- Please ensure that `useWatchPluginMessage` is used within a React functional component.

## Return Value Type Definition

| Property  | Type      | Description                                          |
| --------- | --------- | ---------------------------------------------------- |
| `data`    | `T`       | Data of the message sent by the plugin               |
| `loading` | `boolean` | Indicates whether the data is currently being loaded |

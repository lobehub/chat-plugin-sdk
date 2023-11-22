---
title: useOnStandalonePluginInit
description: listen for the initialization of standalone type
nav: API
order: 10
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
group: Hooks
---

## Used to listen for the initialization of standalone type plugins.

Syntax

## Parameters

```ts
useOnStandalonePluginInit<T>(callback: (payload: PluginPayload<T>) => void): void;
```

## Parameters

| Type       | Description                           | A callback function that will be invoked when the plugin initialization event is triggered, and the payload of the plugin initialization event will be passed as a parameter to the callback function. |
| ---------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `callback` | `(payload: PluginPayload<T>) => void` | Example                                                                                                                                                                                                |

## Notes

```tsx | pure
import { useOnStandalonePluginInit } from '@lobehub/chat-plugin-sdk/client';

const Demo = () => {
  useOnStandalonePluginInit((payload) => {
    console.log('插件初始化事件触发');
    console.log('payload:', payload);
  });

  return <div>监听插件初始化事件</div>;
};

export default Demo;
```

## Please ensure that it is used within a React functional component.

- Will only be executed once when the component is mounted.`useOnStandalonePluginInit`In the callback function, you can process the payload of the plugin initialization event, such as obtaining initialization parameters, calling initialization functions, etc.
- `useOnStandalonePluginInit`Callback function parameter type definition
- Property

## Type

```ts
interface PluginPayload<T = any> {
  args?: T;
  func: string;
}
```

| Description | Plugin initialization event parameters | Plugin initialization event function name |
| ----------- | -------------------------------------- | ----------------------------------------- |
| `arguments` | `T`                                    | 插件初始化事件的参数                      |
| `name`      | `string`                               | 插件初始化事件的函数名称                  |

---
title: usePluginState
description: Used to retrieve and update the running state of the plugin
nav: API
order: 11
group: Hooks
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
---

Used to retrieve and update the running state of the plugin.

## Syntax

```ts
const [value, updateValue] = usePluginState<T>(key, initialValue);
```

## Parameters

| Parameter      | Type     | Description                     |
| -------------- | -------- | ------------------------------- |
| `key`          | `string` | Unique identifier for the state |
| `initialValue` | `T`      | Initial value of the state      |

## Return value

| Properties    | Type                 | Description                  |
| ------------- | -------------------- | ---------------------------- |
| `value`       | `T`                  | Current value of the state   |
| `updateValue` | `(value: T) => void` | Function to update the state |

## Example

```tsx | pure
import { usePluginState } from '@lobehub/chat-plugin-sdk/client';

const Demo = () => {
  const [count, setCount] = usePluginState('count', 0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>当前计数值：{count}</h1>
      <button onClick={increment}>增加</button>
    </div>
  );
};

export default Demo;
```

## Notes

- Make sure to use within a React function component.`usePluginState`The parameter must be of type string and is used to uniquely identify the plugin state.
- `key`The parameter is the initial value of the state.
- `initialValue`Represents the current state value, obtained through destructuring assignment.
- `value`Is the function to update the state value, which accepts a new value as a parameter.
- `updateValue`Usage Example

## In the example above, we use 'usePluginState' to manage the state of a counter. The initial value is 0, and each click of the button increases the counter value by 1.

Related Links`usePluginState`React Hook Documentation

## 相关链接

- [React Hook 文档](https://reactjs.org/docs/hooks-intro.html)

---
title: usePluginState
description: 用于管理插件状态的 React Hook
nav: API
order: 11
group: Hooks
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
---

用于获取读取和更新插件的运行状态。

## 语法

```ts
const [value, updateValue] = usePluginState<T>(key, initialValue);
```

## 参数

| 参数           | 类型     | 描述             |
| -------------- | -------- | ---------------- |
| `key`          | `string` | 状态的唯一标识符 |
| `initialValue` | `T`      | 初始状态的值     |

## 返回值

| 属性          | 类型                 | 描述           |
| ------------- | -------------------- | -------------- |
| `value`       | `T`                  | 当前状态的值   |
| `updateValue` | `(value: T) => void` | 更新状态的函数 |

## 示例

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

## 注意事项

- 请确保 `usePluginState` 在 React 函数组件内部使用。
- `key` 参数必须是字符串类型，用于唯一标识插件状态。
- `initialValue` 参数是状态的初始值。
- `value` 是当前的状态值，通过解构赋值获取。
- `updateValue` 是更新状态值的函数，接受一个新的值作为参数。

## 使用示例

在上述示例中，我们使用 `usePluginState` 来管理一个计数器的状态。初始值为 0，每次点击按钮时，计数器的值会加 1。

## 相关链接

- [React Hook 文档](https://reactjs.org/docs/hooks-intro.html)

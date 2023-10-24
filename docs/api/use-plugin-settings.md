---
title: usePluginSettings
description: 用于管理插件 Settings
nav: API
order: 12
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
group: Hooks
---

用于获取和更新插件的设置。

## 语法

```ts
const [value, updateValue] = usePluginSettings<T>(initialValue);
```

## 参数

| 参数           | 类型 | 描述             |
| -------------- | ---- | ---------------- |
| `initialValue` | `T`  | 插件设置的初始值 |

## 返回值

`usePluginSettings` 返回一个包含两个元素的数组，分别是当前的插件设置值 `value` 和更新插件设置的函数 `updateValue`。

## 示例

```tsx | pure
import { usePluginSettings } from '@lobehub/chat-plugin-sdk/client';

const Demo = () => {
  const [value, updateValue] = usePluginSettings('default value');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(e.target.value);
  };

  return (
    <div>
      <h1>插件设置：</h1>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Demo;
```

## 注意事项

- 请确保 `usePluginSettings` 在 React 函数组件内部使用。
- 初始值 `initialValue` 可以是任意类型的值。
- 更新插件设置时，会自动调用 `postToUpdatePluginSettings` 方法向 LobeChat 发送更新消息。

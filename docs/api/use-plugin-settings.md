---
title: usePluginSettings
description: 用于管理插件 Settings
nav: API
order: 12
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
group: Hooks
---

Used to retrieve and update plugin settings.

## Syntax

```ts
const [value, updateValue] = usePluginSettings<T>(initialValue);
```

## Parameters

| Parameter      | Type | Description                      |
| -------------- | ---- | -------------------------------- |
| `initialValue` | `T`  | Initial value of plugin settings |

## Return Value

`usePluginSettings`Returns an array containing two elements, which are the current plugin settings value and the function to update plugin settings.`value` 和更新插件设置的函数 `updateValue`。

## Example

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

## Notes

- Please ensure to use `usePluginSettings` inside a React function component.
- Initial value `initialValue`can be of any type of value.
- When updating plugin settings, the `postToUpdatePluginSettings` method will automatically send update messages to LobeChat.

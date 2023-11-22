---
title: lobeChat
description: LobeChat Client SDK
group:
  title: Client
  order: 10
apiHeader:
  pkg: '@lobehub/chat-plugin-sdk/client'
  nav: API
---

This example contains all the key methods for the interaction between the plugin and LobeChat.

- All the methods in this example use the browser's `postMessage` and `addEventListener` methods, so they need to be used in a browser environment;
- All methods of this function send messages to the parent window through `postMessage`so the plugin must be embedded in LobeChat to return the correct message;

## getPluginPayload

Get the Function Call information to initialize the plugin.

```ts
interface PluginPayload<T = any> {
  arguments?: T;
  name: string;
}

type GetPluginPayload = <T = any>() => Promise<PluginPayload<T>>;
```

#### Output parameters

- `name`: the api name of the Function Call
- `arguments`: the parameter object of the Function Call
- `state`: if exist the plugin message have state, you can get it from thi
- `settings`: the plugin settings

#### Example

```ts
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

lobeChat.getPluginPayload().then((payload) => {
  console.log(payload);
});

// payload:
// {
//   name: 'showMJ',
//   arguments: {
//     rawInput: '一只小黄鸭摄影师，在湖边度假，在冬天的下雪天。湖面结冰了',
//   },
// };
```

## getPluginMessage

Used to retrieve the content of the plugin message (`content` field).

LobeChat serializes the message object returned by the plugin and stores it in the `content` field.This method retrieves the content of this field and deserializes it into a JSON object.

```ts
type GetPluginMessage = <T = object>() => Promise<T>;
```

#### Example

```ts | pure
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

lobeChat.getPluginMessage().then((message) => {
  console.log(message);
});
```

## setPluginMessage

This method is used to send messages to LobeChat to update the content of the plugin message. The content will be serialized, sent to LobeChat, and the conversation flow will continue.

```ts
type SetPluginMessage = <T = object>(content: T) => Promise<void>;
```

#### Parameter

- `content`: the plugin content to be filled in.

#### Example

```ts
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

lobeChat.setPluginMessage({ title: 'Hello', message: 'Welcome to my plugin' });
```

## getPluginState

Used to retrieve the runtime state stored in the message.

```ts
type GetPluginState = <T = any>(key: string) => Promise<T>;
```

#### Input parameter

- `key`: the key value of the state information to be retrieved.

#### Example

```ts
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

lobeChat.getPluginState('counter').then((state) => {
  console.log(state);
});
```

## setPluginState

This method is used to update the specified state information of the plugin.

```ts
type SetPluginState = (key: string, value: any) => Promise<void>;
```

#### Parameter

- `key`: the key value of the state information to be updated.
- `value`: the value of the state information to be updated.

#### Example

```ts
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

lobeChat.setPluginState('counter', 5);
```

## getPluginSettings

Used to retrieve the configuration information stored by the plugin in LobeChat.

```ts
type GetPluginSettings = <T = any>() => Promise<T>;
```

#### Example

```ts
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

lobeChat.getPluginSettings().then((state) => {
  console.log(state);
});
```

## setPluginSettings

This method is used to update the configuration information of the plugin.

```ts
type SetPluginSettings<T> = (settings: Partial<T>) => Promise<void>;
```

#### Input parameter

- `settings`: the plugin configuration information to be updated, default is partial update.

#### Example

```ts
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

lobeChat.setPluginSettings({ theme: 'dark', fontSize: 12 });
```

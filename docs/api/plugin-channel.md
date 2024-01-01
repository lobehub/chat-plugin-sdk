---
title: PluginChannel
order: 10
group:
  title: Miscellaneous
  order: 10000
atomId: PluginChannel
description: Provides detailed explanations of message types for plugin communication
nav:
  title: API
  order: 2
---

# PluginChannel Communication Messages

You may not need to use `PluginChannel` , but if you want to use the underlying message communication mechanism of LobeChat, you may need to understand these message types. This document contains detailed explanations of communication message types.

## Initialization

### pluginReadyForRender

- Literal:`lobe-chat:plugin-ready-for-render`

Used to notify the LobeChat host that the plugin is ready for rendering

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.pluginReadyForRender;
```

:::info
The main program will send information about the plugin through the `renderPlugin` channel after receiving this message
:::

### initStandalonePlugin

- Literal:`lobe-chat:init-standalone-plugin`

For plugins of type `standalone`, notifies LobeChat that the plugin has been initialized

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.initStandalonePlugin;
```

## Message Content Related

### fetchPluginMessage

- Literal:`lobe-chat:fetch-plugin-messag`

Used for the plugin to initiate a message request to LobeChat

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.fetchPluginMessage;
```

### renderPlugin

- Literal:`lobe-chat:render-plugin`

Used for the main program to send rendering instructions to the plugin.

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.pluginReadyForRender;
```

### fillStandalonePluginContent

- Literal:`lobe-chat:fill-plugin-content`

Used to send plugin content to LobeChat when the plugin is running independently

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.fillStandalonePluginContent;
```

## Plugin Runtime Related

### fetchPluginState

- Literal:`lobe-chat:fetch-plugin-state`

Used for the plugin to actively request plugin state information from LobeChat

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.fetchPluginState;
```

### renderPluginState

- Literal:`lobe-chat:render-plugin-state`

Used for the main program to render plugin state to the plugin

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.renderPluginState;
```

### updatePluginState

- Literal:`lobe-chat:update-plugin-state`

Used for the plugin to send updated plugin state to LobeChat

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.updatePluginState;
```

## Settings Related

### fetchPluginSettings

- Literal:`lobe-chat:fetch-plugin-settings`

Used for the plugin to actively request plugin settings information from LobeChat

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.fetchPluginSettings;
```

### renderPluginSettings

- Literal:`lobe-chat:render-plugin-settings`

Used for the main program to render plugin settings to the plugin

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.renderPluginSettings;
```

### updatePluginSettings

- Literal:`lobe-chat:update-plugin-settings`

Used for the plugin to send updated plugin settings to LobeChat

```ts
import { PluginChannel } from '@lobehub/chat-plugin-sdk';

const channel = PluginChannel.updatePluginSettings;
```

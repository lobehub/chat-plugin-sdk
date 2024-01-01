---
title: Client SDK
group: Plugin Frontend
order: 2
---

# LobeChat Client SDK

The LobeChat Client SDK is a frontend development toolkit provided to plugin developers, allowing plugins to communicate efficiently and securely with the LobeChat application. Through this SDK, developers can easily access data passed to the plugin by LobeChat, send messages, update plugin status, and manage plugin configuration information.

The core functionality of the SDK is to encapsulate all the underlying communication logic required to interact with LobeChat, including using the browser's `postMessage` and `addEventListener` methods for cross-window communication. This means that developers do not need to delve into complex communication protocols and can focus on implementing plugin functionality.

## Usage Example

### Obtaining Plugin Initialization Information

When the plugin is loaded, developers may need to obtain the initialization parameters and configuration passed by LobeChat. Using the LobeChat Client SDK, this can be easily accomplished with the following lines of code:

```javascript
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

// Obtain initialization information
lobeChat.getPluginPayload().then((payload) => {
  console.log('Plugin Name:', payload.name);
  console.log('Plugin Arguments:', payload.arguments);
  console.log('Plugin Settings:', payload.settings);
});
```

### Updating Plugin Message Content

If the plugin needs to send messages during interaction with the user, it can use the methods provided by the SDK to update the message content:

```javascript
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';

// Send message content
lobeChat.setPluginMessage('Welcome to using our plugin!');
```

The LobeChat Client SDK is a powerful assistant for plugin developers, providing a complete, concise, and powerful set of tools to implement various interactive features of LobeChat plugins. With these tools, developers can focus more on innovation and enhancing user experience without worrying about the implementation details of communication mechanisms.

## API

For the complete usage API of the LobeChat Client SDK, please refer to: [LobeChat Client SDK API Documentation](/en-US/api/lobe-chat-client).

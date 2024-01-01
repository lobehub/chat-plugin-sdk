---
title: Plugin Gateway
group:
  title: Plugin Server
  order: 3
order: 2
---

# LobeChat Plugin Gateway

When developing LobeChat plugins, an indispensable component is the Plugin Gateway. This backend service provides a secure and efficient intermediary layer for communication between the plugins and the LobeChat core. It not only handles requests from the core, but also forwards these requests to the respective plugin server, and then returns the results of the plugin processing to the LobeChat core.

## Functions of the Plugin Gateway

The core functions of the Plugin Gateway are:

- **Request Forwarding**: It receives plugin invocation requests from the LobeChat core and routes these requests to the designated plugin server for execution.
- **Response Aggregation**: After the plugin processing is completed, the gateway is responsible for aggregating the results and returning them to the LobeChat core, completing a full communication cycle.
- **Security Isolation**: The gateway provides a layer of secure isolation between the core and the plugin server, ensuring the security of data transmission and the independence of the plugin execution environment.
- **Performance Optimization**: Deployed as an Edge Function, the gateway ensures low latency and high performance in processing requests.

## Configuring and Using the Plugin Gateway in Local Development

When developing LobeChat plugins locally, correctly configuring and using the Plugin Gateway is crucial for enabling communication between the plugins and LobeChat. This section will guide you on how to set up the Plugin Gateway in the local development environment and create corresponding gateway routes to handle requests.

### Configuring the Local Plugin Gateway Address

In the local development environment, you need to specify the address of the local Plugin Gateway in the `manifest.json` file of the plugin. This allows LobeChat to directly send requests to your local service for local debugging.

Open the `manifest.json` file in your plugin project and add or update the `gateway` field, setting it to the address of your local gateway. For example, if your local gateway is running on port `3400`, you can configure it as follows:

```json
{
  "gateway": "http://localhost:3400/api/gateway"
}
```

In this way, when LobeChat attempts to communicate with the plugin, it will directly request the configured local gateway address to resolve cross-origin issues in network requests.

### Creating Local Gateway Routes

Next, you need to create a gateway route in the local service to handle requests from LobeChat. You can use the functions provided by the [`@lobehub/chat-plugins-gateway`](https://github.com/lobehub/chat-plugins-gateway) package to quickly create this route.

First, ensure that you have installed the `@lobehub/chat-plugins-gateway` package. If not, you can install it using the following command:

```sh
pnpm install @lobehub/chat-plugins-gateway
```

Then, in your local Next.js project, create a new TypeScript file in the `api` directory, for example, `pages/api/gateway.ts`, and add the following code:

```ts
import { createLobeChatPluginGateway } from '@lobehub/chat-plugins-gateway';

export default createLobeChatPluginGateway();
```

This code will create a gateway route to handle LobeChat requests. The `createLobeChatPluginGateway` function will automatically handle tasks such as request forwarding, response aggregation, and security validation.

If you are not using Next.js but instead using Vercel API service, you can create a NodeJS serverless API in the `api` directory:

```ts
import { createGatewayOnNodeRuntime } from '@lobehub/chat-plugins-gateway';

export default createGatewayOnNodeRuntime();
```

### Starting the Local Service

Finally, start your local service, ensuring that it listens on the port configured in your `manifest.json`. For example, if your gateway address is `http://localhost:3400/api/gateway`, your service should run on port `3400`.

Now, when you run LobeChat plugins in the local development environment, LobeChat will communicate with your plugin through the local gateway address you configured. This allows you to test and debug the functionality of the plugin in the local environment.

## Using the Plugin Gateway with Backend in Other Languages

To support the development of plugin gateways implemented in languages other than JavaScript, we will provide a universal plugin gateway CLI in the SDK. By executing a command, you can quickly start a plugin gateway service. This issue will be tracked in [#38](https://github.com/lobehub/chat-plugin-sdk/issues/38).

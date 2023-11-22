---
title: Server Development
group: Plugin Development
order: 1
---

# Server-side Development for Plugins

The server only needs to implement the API interfaces described in the manifest. In the template, we use vercel's [Edge Runtime](https://nextjs.org/docs/pages/api-reference/edge) as the service, eliminating the need for maintenance costs.

## API Implementation

For the Edge Runtime, we provide the `createErrorResponse` method in `@lobehub/chat-plugin-sdk` to quickly return error responses. Currently, the provided error types can be found in [PluginErrorType](/api/error).

The implementation of the "clothes" interface in the template is as follows:

```ts
export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const { gender, mood } = (await req.json()) as RequestData;

  const clothes = gender === 'man' ? manClothes : womanClothes;

  const result: ResponseData = {
    clothes: clothes[mood] || [],
    mood,
    today: Date.now(),
  };

  return new Response(JSON.stringify(result));
};
```

Where `manClothes` and `womanClothes` are hard-coded mock data and can be replaced with database requests in actual scenarios.

## Gateway

Since LobeChat's default plugin gateway is a cloud service (<https://chat.lobehub.com/api/plugins>), the cloud service sends requests to the API address specified in the manifest to address cross-origin issues.

For custom plugins, the plugin requests need to be sent to the local service. Therefore, by specifying the gateway in the manifest (<http://localhost:3400/api/gateway>), LobeChat will directly request this address, and then only a gateway implementation needs to be created at that address.

```ts
import { createLobeChatPluginGateway } from '@lobehub/chat-plugins-gateway';

export const config = {
  runtime: 'edge',
};

export default async createLobeChatPluginGateway();
```

The [`@lobehub/chat-plugins-gateway`](https://github.com/lobehub/chat-plugins-gateway) contains the [implementation](https://github.com/lobehub/lobe-chat/blob/main/src/pages/api/plugins.api.ts) of the plugin gateway in LobeChat. You can directly use this package to create a gateway, allowing LobeChat to access the local plugin service.

## Other Server-Side Implementation Examples

As the server-side support for plugins allows for implementation in any framework or language, here are some implementation examples for reference:

- Vercel Node.js runtime server implementation: [chat-plugin-web-crawler](https://github.com/lobehub/chat-plugin-web-crawler/blob/main/api/v1/index.ts)
- Contributions are welcome

## Support for OpenAPI Manifest

In addition to using the API field to define the plugin's server, we also plan to support the OpenAPI specification to describe the plugin's functionality. This will make it more convenient to use existing OpenAPI tools to define plugin services. This capability will be tracked in [lobehub/chat-plugin-sdk#13](https://github.com/lobehub/chat-plugin-sdk/issues/13).

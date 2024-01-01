---
title: JavaScript Server
group: Plugin Server
order: 6
---

# JavaScript Server

When developing LobeChat plugins, you may need a server to handle requests and send responses. This document will guide you through developing plugins on the server using JavaScript and recommend using the Vercel platform for deployment.

## Vercel as a Server Platform

[Vercel](https://vercel.com/) is a cloud platform that provides simple deployment and hosting services, suitable for static websites and server-side applications. For LobeChat plugin development, the following features of Vercel are very useful:

- **Simple deployment process**: You can deploy your code to the cloud in a few simple steps.
- **Custom domain support**: Vercel allows you to associate your service with a custom domain.
- **Automatic scaling**: Resources are automatically scaled based on traffic to ensure service availability.

## Edge Runtime Example

Edge Runtime is an execution environment provided by Vercel, allowing your code to run on a global edge network, reducing latency and improving response speed.

Here is an example of a plugin server using Edge Runtime:

```ts
import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { manClothes, womanClothes } from '@/data';
import { RequestData, ResponseData } from '@/type';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return createErrorResponse(PluginErrorType.MethodNotAllowed);
  }

  const { gender, mood } = (await req.json()) as RequestData;

  const clothes = gender === 'man' ? manClothes : womanClothes;

  const result: ResponseData = {
    clothes: mood ? clothes[mood] : Object.values(clothes).flat(),
    mood,
    today: Date.now(),
  };

  return new Response(JSON.stringify(result));
};
```

In this example, the server receives a POST request and returns the corresponding clothing recommendation data based on the request content.

## Node Runtime Example

If you are more familiar with the Node.js environment, Vercel also supports Node Runtime. Here is an example of a server using Node Runtime:

```ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

import fetchContent from './_utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

  const result = await fetchContent(data);

  res.status(200).send(result);
}
```

In this example, the server handles POST requests and processes the request content using a utility function `fetchContent`, then returns the processed result.

Whether you choose Edge Runtime or Node Runtime, Vercel provides a convenient deployment and runtime environment for LobeChat plugin server development. You can choose the appropriate execution environment based on your needs and familiar technology stack, and leverage the advantages of Vercel to enhance user experience.

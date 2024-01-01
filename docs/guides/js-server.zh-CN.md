---
title: JavaScript 服务端
group: 插件服务端
order: 6
---

# JavaScript 服务端

在开发 LobeChat 插件时，您可能需要一个服务端来处理请求和发送响应。本文档将引导您使用 JavaScript 在服务端进行插件的开发，并推荐使用 Vercel 平台进行部署。

## Vercel 作为服务端平台

[Vercel](https://vercel.com/) 是一个云平台，它提供了简单的部署和托管服务，适合用于静态网站和服务端应用程序。对于 LobeChat 插件的开发，Vercel 的以下特性非常有用：

- **简单的部署流程**：您可以通过几个简单的步骤将代码部署到云端。
- **自定义域名支持**：Vercel 允许您将服务关联到自定义域名。
- **自动扩展**：根据流量自动扩展资源，保证服务的可用性。

## Edge Runtime 示例

Edge Runtime 是 Vercel 提供的一个执行环境，它允许您的代码在全球各地的边缘网络上运行，从而减少延迟，提高响应速度。

以下是一个使用 Edge Runtime 的插件服务端示例：

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

在此示例中，服务端接收 POST 请求，并根据请求内容返回相应的服装推荐数据。

## Node Runtime 示例

如果您更熟悉 Node.js 环境，Vercel 也支持 Node Runtime。以下是一个 Node Runtime 的服务端示例：

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

在此示例中，服务端处理 POST 请求，并通过一个工具函数 `fetchContent` 来处理请求内容，然后返回处理结果。

无论你选择 Edge Runtime 还是 Node Runtime，Vercel 都为 LobeChat 插件的服务端开发提供了便捷的部署和运行环境。您可以根据自己的需求和熟悉的技术栈选择合适的执行环境，并利用 Vercel 的优点来提升用户体验。

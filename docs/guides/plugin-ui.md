---
title: Plugin UI
group: Plugin Development
order: 3
---

# Plugin UI Interface

For LobeChat plugins, the UI interface is optional. For example, the [Web Content Extraction](https://github.com/lobehub/chat-plugin-web-crawler) plugin does not have a corresponding user interface.

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265263241-0e765fdc-3463-4c36-a398-aef177a30df9.png)

If you wish to display more enriched information in plugin messages, or include some rich interactions, you can define a user interface for the plugin. Below is an example of the user interface for a search engine plugin.

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265263427-9bdc03d5-aa61-4f62-a2ce-88683f3308d8.png)

## Implementing UI Interface

LobeChat implements plugin UI loading and communication through `iframe` + `postMessage`. Therefore, the implementation of the plugin UI is consistent with regular web development. You can use any frontend framework and development language that you are familiar with.

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265263653-4ea87abc-249a-49f3-a241-7ed93ddb1ddf.png)

In the template we provide, we use React + Next.js + antd as the frontend interface framework. You can find the implementation of the user interface in `src/pages/index.tsx`.

## Plugin Communication

Regarding plugin communication, we provide two methods to achieve bidirectional communication between the plugin and the LobeChat core.

### Plugin Initiative Request

You can actively request data from LobeChat through the `getPluginMessage` method of [lobeChat](/api/lobe-chat-client).

```tsx | pure
import { lobeChat } from '@lobehub/chat-plugin-sdk/client';
import { memo, useEffect, useState } from 'react';

import { ResponseData } from '@/type';

const Render = memo(() => {
  const [data, setData] = useState<ResponseData>();

  useEffect(() => {
    // Get the current message of the plugin from LobeChat
    lobeChat.getPluginMessage().then((e: ResponseData) => {
      setData(e);
    });
  }, []);

  return <>...</>;
});

export default Render;
```

:::info
The `lobeChat.getPluginMessage` method is a regular asynchronous request method, so it can be used with `swr` or `react-query` to implement data caching and automatic updates for a better user experience.
:::

### Receive LobeChat Push

You can subscribe to messages sent from LobeChat to the plugin using the [useWatchPluginMessage](/api/use-watch-plugin-message) method.

```tsx | pure
import { useWatchPluginMessage } from '@lobehub/chat-plugin-sdk/client';

const Demo = () => {
  const { data, loading } = useWatchPluginMessage();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Plugin Sent Message Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Demo;
```

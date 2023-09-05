---
title: 定义插件描述清单
group: 插件开发
order: 1
---

# manifest 定义

manifest 聚合了插件功能如何实现的信息。核心的字段为 `api` 与 `ui`，分别描述了插件的服务端接口能力与前端渲染的界面地址。

以我们提供的模板中的 [manifest](https://github.com/lobehub/chat-plugin-template/blob/main/public/manifest-dev.json) 为例：

```json
{
  "api": [
    {
      "url": "http://localhost:3400/api/clothes",
      "name": "recommendClothes",
      "description": "根据用户的心情，给用户推荐他有的衣服",
      "parameters": {
        "properties": {
          "mood": {
            "description": "用户当前的心情，可选值有：开心（happy）, 难过（sad）,生气 （anger）,害怕（fear）,惊喜（ surprise）,厌恶 （disgust）",
            "enums": ["happy", "sad", "anger", "fear", "surprise", "disgust"],
            "type": "string"
          },
          "gender": {
            "type": "string",
            "enum": ["man", "woman"],
            "description": "对话用户的性别，需要询问用户后才知道这个信息"
          }
        },
        "required": ["mood", "gender"],
        "type": "object"
      }
    }
  ],
  "gateway": "http://localhost:3400/api/gateway",
  "identifier": "chat-plugin-template",
  "ui": {
    "url": "http://localhost:3400",
    "height": 200
  },
  "version": "1"
}
```

在这份 manifest 中，主要包含了以下几个部分：

## `identifier`

这是插件的唯一标识符，用来区分不同的插件，这个字段需要全局唯一。

## `api`

这是一个数组，包含了插件所提供的所有 API 接口信息。每个接口都包含了url、name、description和 parameters 字段，均为必填项。

其中 `description` 和 `parameters` 两个字段，将会作为 [Function Call](https://sspai.com/post/81986) 的 `functions` 参数发送给 gpt，示例如下：

```json
{
  "functions": [
    {
      "name": "realtimeWeather",
      "description": "获取当前天气情况",
      "parameters": {
        "type": "object",
        "properties": {
          "city": {
            "description": "城市名称",
            "type": "string"
          }
        },
        "required": ["city"]
      }
    }
  ],
  "messages": [
    {
      "role": "user",
      "content": "我明天应该穿什么？"
    },
    {
      "role": "assistant",
      "content": "请告诉你所在的城市？"
    },
    {
      "role": "user",
      "content": "杭州"
    }
  ]
}
```

其中，parameters 需要符合 [JSON Schema](https://json-schema.org/) 规范，可以使用下述方式进行校验：

```ts
import { z } from 'zod';

const JSONSchema = z.object({
  properties: z.object({}),
  type: z.enum(['object']),
});
```

在我们提供的模板示例中，api 对应的接口名为 `recommendClothes` ，这个接口的功能是根据用户的心情和性别来推荐衣服。接口的参数包括用户的心情和性别，这两个参数都是必填项。

## `ui`

这个字段包含了插件的用户界面信息，指明了 LobeChat 从哪个地址加载插件的前端界面。由于 LobeChat 插件界面加载是基于 iframe 实现的，因此可以按需指定插件界面的高度、宽度。

## `gateway`

这个字段指定了 LobeChat 查询 api 接口的网关。LobeChat 默认的插件网关是云端服务，而自定义插件的请求需要发送给本地服务的，因此通过在 manifest 中指定网关，LobeChat 将会直接请求这个地址，进而访问到本地的插件服务，发布到线上的插件可以不用指定该字段。

关于 manifest 各个字段的完整介绍，参见：[manifest](/api/plugin-manifest)。

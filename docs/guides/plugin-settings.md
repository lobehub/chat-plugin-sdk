---
title: 插件设置
group:
  title: 插件开发
  order: 1
order: 3
---

# 插件设置

如果你希望在插件中添加一些设置，可以在 manifest 中添加 `settings` 字段，用于标记插件的设置项。该字段同样基于 [JSON Schema](https://json-schema.org/)，用于描述插件的设置项。

例如在搜索引擎插件的 [manifest](https://github.com/lobehub/chat-plugin-search-engine/blob/main/public/manifest.json) 中定义了下面的配置项：

```json
{
  "settings": {
    "type": "object",
    "required": ["SERPAPI_API_KEY"],
    "properties": {
      "SERPAPI_API_KEY": {
        "title": "SerpAPI API Key",
        "description": "we use SerpAPI as backend service [Learn more](https://github.com/lobehub/chat-plugin-search-engine)",
        "type": "string",
        "minLength": 64,
        "maxLength": 64,
        "format": "password"
      }
    }
  }
  // ...
}
```

当开启该插件后，在 LobeChat 中就会展示出一个输入框，用于输入 SerpAPI 的 API Key, 如下图所示：

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265733057-9043ce79-0e78-40bc-98fa-be594eaa9212.png)

## 插件设置的使用

在插件服务端中，网关的请求会在请求头中携带相应的设置信息。你可通过 `getPluginSettingsFromRequest` 获取到设置信息。

```ts
import {
  PluginErrorType,
  createErrorResponse,
  getPluginSettingsStringFromRequest,
} from '@lobehub/chat-plugin-sdk';

export default async (req: Request) => {
  // 获取 settings 信息
  const settings = getPluginSettingsStringFromRequest<Settings>(req);

  if (!settings)
    // 如果获取失败，可以通过发送 PluginErrorType.PluginSettingsInvalid 唤起插件配置界面
    return createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
      message: 'Plugin settings not found.',
    });

  // ...
};
```

如果 settings 信息获取失败，我们强烈建议返回 `PluginErrorType.PluginSettingsInvalid` 错误，以唤起插件配置卡片，提升插件配置用户体验。

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265735415-9b824353-1a50-4168-9031-50b7b3bd16a2.png)

关于 `PluginErrorType` ，详见：[PluginErrorType](/api/error#%E4%B8%9A%E5%8A%A1%E9%94%99%E8%AF%AF)。

---
title: 插件触发机制
description: 如何通过 Function Call 触发 LobeChat 插件
group: 基本概念
order: 3
---

# LobeChat 插件触发机制

LobeChat 插件系统通过 [Function Call 机制](https://sspai.com/post/81986) 来触发插件，使得聊天机器人能够与外部 API 进行互动，以增强用户体验。以下是插件触发流程的详细说明。

## Function Call 基本原理

Function Call 是一项允许开发者在 GPT 模型中描述函数的新功能，使得模型能够智能地生成调用这些函数所需的 JSON 参数。这种机制通过提高与外部工具和 API 的连接可靠性来扩展大模型的能力。

## 插件触发步骤

1. **用户输入**：用户向 LobeChat 提出请求，如查询天气或添加待办事项。
2. **意图识别**：模型分析用户的输入，确定是否需调用一个插件来应对请求。
3. **生成 Function Call**：如果需要插件介入，模型会生成一个包含必要参数的 Function Call 请求。
4. **发送请求**：LobeChat 将 Function Call 以 API 请求的形式发送到指定的插件服务端。
5. **处理请求**：插件服务端接收到 Function Call 请求，处理该请求，并准备响应数据。
6. **返回响应**：插件服务端将处理后的数据以 JSON 格式返回给 LobeChat。
7. **模型处理插件响应**：模型接收到插件的响应数据，并根据这些数据继续与用户进行交互。

## 示例流程：天气预报插件

以下是一个详细的天气预报插件触发流程，包括基于 OpenAI 数据结构的 JSON 请求和响应示例。

### 1. 用户询问

用户向 LobeChat 提出了以下请求：

```json
{
  "content": "我明天的户外活动会受天气影响吗？",
  "role": "user"
}
```

### 2. 模型生成 Function Call

模型识别到用户想要了解明天的天气情况，并生成一个 Function Call，请求天气预报插件提供数据：

```json
{
  "content": {
    "arguments": {
      "city": "用户所在城市",
      "date": "明天的日期"
    }
  },
  "name": "queryWeatherForecast",
  "role": "function"
}
```

### 3. LobeChat 发送 API 请求

LobeChat 将上述 Function Call 转换为对天气预报插件的 API 请求：

```http
POST /weather-forecast HTTP/1.1
Host: plugin.example.com
Content-Type: application/json

{
  "function": "queryWeatherForecast",
  "arguments": {
    "city": "用户所在城市",
    "date": "明天的日期"
  }
}
```

### 4. 插件处理请求并返回数据

天气预报插件处理请求，并返回明天的天气预报数据：

```json
{
  "content": {
    "forecast": {
      "city": "用户所在城市",
      "date": "明天的日期",
      "condition": "晴",
      "temperature": {
        "high": 25,
        "low": 18
      },
      "advice": "温度适宜，适合户外活动。建议穿着轻便，带上太阳镜。"
    }
  },
  "name": "queryWeatherForecast",
  "role": "function"
}
```

### 5. 模型接收响应并与用户交互

模型接收到插件的响应后，根据返回的数据与用户进行交互：

```json
{
  "content": "根据插件提供的天气预报，明天您所在城市的天气是晴朗，最高气温25度，最低气温18度。温度适宜，很适合进行户外活动。建议穿着轻便，并带上太阳镜。",
  "role": "assistant"
}
```

用户将看到模型的响应，并根据建议做好相应的准备。

## 注意事项

- Function Call 的设计需要精确地反映用户的意图和所需的参数。
- 插件必须能够安全、高效地处理来自 LobeChat 的请求，并提供准确的响应。
- OpenAI 的新版实现中，Function Call 的实现已经更新为 tool_calls。LobeChat 已完成兼容适配，以适应新版实现。

## 结论

Function Call 机制为 LobeChat 插件提供了一种灵活且高效的工具触发机制，使得 LobeChat 助理能够以更为智能的方式与外部服务进行交互。这种机制不仅提升了用户体验，还为开发者提供了广阔的创新空间。

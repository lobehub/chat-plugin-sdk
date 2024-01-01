---
title: Plugin Invoking Mechanism
description: How to Trigger LobeChat Plugins through Function Call
group: Concepts
order: 3
---

# LobeChat Plugin Invoking Mechanism

The LobeChat plugin system triggers plugins through the [Function Call mechanism](https://sspai.com/post/81986), enabling chatbots to interact with external APIs to enhance user experience. The following is a detailed explanation of the plugin triggering process.

## Basic Principles of Function Call

Function Call is a new feature that allows developers to describe functions within the GPT model, enabling the model to intelligently generate the JSON parameters required to call these functions. This mechanism extends the capabilities of large models by improving the reliability of their connections with external tools and APIs.

## Plugin Trigger Steps

1. **User Input**: The user makes a request to LobeChat, such as querying the weather or adding a to-do item.
2. **Intent Recognition**: The model analyzes the user's input to determine if a plugin needs to be invoked to handle the request.
3. **Generate Function Call**: If a plugin intervention is required, the model generates a Function Call request containing the necessary parameters.
4. **Send Request**: LobeChat sends the Function Call as an API request to the designated plugin server.
5. **Process Request**: The plugin server receives the Function Call request, processes it, and prepares response data.
6. **Return Response**: The plugin server returns the processed data to LobeChat in JSON format.
7. **Model Processes Plugin Response**: The model receives the plugin's response data and continues interacting with the user based on this data.

## Example Process: Weather Forecast Plugin

Here is a detailed process for triggering a weather forecast plugin, including JSON request and response examples based on the OpenAI data structure.

### 1. User Inquiry

The user makes the following request to LobeChat:

```json
{
  "content": "Will my outdoor activities be affected by the weather tomorrow?",
  "role": "user"
}
```

### 2. Model Generates Function Call

The model recognizes that the user wants to know the weather for tomorrow and generates a Function Call to request weather forecast data from the plugin:

```json
{
  "content": {
    "arguments": {
      "city": "user's location",
      "date": "tomorrow's date"
    }
  },
  "name": "queryWeatherForecast",
  "role": "function"
}
```

### 3. LobeChat Sends API Request

LobeChat converts the above Function Call into an API request to the weather forecast plugin:

```http
POST /weather-forecast HTTP/1.1
Host: plugin.example.com
Content-Type: application/json

{
  "city": "user's location",
  "date": "tomorrow's date"
}
```

### 4. Plugin Processes Request and Returns Data

The weather forecast plugin processes the request and returns the weather forecast for tomorrow:

```json
{
  "content": {
    "forecast": {
      "city": "user's location",
      "date": "tomorrow's date",
      "condition": "sunny",
      "temperature": {
        "high": 25,
        "low": 18
      },
      "advice": "The temperature is suitable for outdoor activities. It is recommended to wear light clothing and sunglasses."
    }
  },
  "name": "queryWeatherForecast",
  "role": "function"
}
```

### 5. Model Receives Response and Interacts with User

After receiving the plugin's response, the model interacts with the user based on the returned data:

```json
{
  "content": "Based on the weather forecast provided by the plugin, the weather in your location tomorrow will be sunny with a high of 25 degrees and a low of 18 degrees. The temperature is suitable for outdoor activities. It is recommended to wear light clothing and sunglasses.",
  "role": "assistant"
}
```

The user sees the model's response and prepares accordingly based on the advice.

## Considerations

- The design of Function Call needs to accurately reflect the user's intent and the required parameters.
- Plugins must be able to securely and efficiently handle requests from LobeChat and provide accurate responses.
- In the latest implementation of OpenAI, Function Call has been updated to tool_calls. LobeChat has completed compatibility adaptation to accommodate the new implementation.

## Conclusion

The Function Call mechanism provides a flexible and efficient tool triggering mechanism for LobeChat plugins, enabling the LobeChat assistant to interact with external services in a more intelligent manner. This mechanism not only enhances user experience but also provides developers with vast innovation opportunities.

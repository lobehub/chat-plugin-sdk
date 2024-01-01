---
title: Plugin Communication
group: Concepts
order: 4
---

# Overview of Plugin Communication Mechanism

## Server Communication

For plugins of type `default` and `markdown`, you need to provide a backend service (standalone plugins can be pure frontend applications) to exchange data and process requests with the LobeChat core.

The following will introduce the implementation principles and key details of server communication between the LobeChat core and plugins.

### Plugin Server Communication Process

The server communication between the LobeChat core and plugins is coordinated through a middleware layer, namely the [Plugin Gateway](https://github.com/lobehub/chat-plugins-gateway), to ensure the security and flexibility of communication. It also provides a standardized protocol to manage requests and responses.

1. **Request Initialization**: The LobeChat core sends a request to the Gateway via HTTP POST, carrying a `PluginRequestPayload` containing the plugin identifier, API name, parameters, and other information.
2. **Gateway Processing**: Upon receiving the request, the Gateway parses the `PluginRequestPayload` in the request body and performs parameter validation.
3. **Request Handling and Response**: After successful validation, the Gateway calls the plugin's server based on the API name and parameters in the request, obtains the response, encapsulates the processing result as response data, and sends it back to the LobeChat core via HTTP response.
4. **Error Handling**: If an error occurs during request processing, the Gateway generates an error response, including the error type and message, and returns it to the LobeChat core.

### Gateway Communication Implementation Details

The following are key implementation details of the LobeChat plugin server:

- **Request Payload Processing**: The Gateway determines the plugin's identity by parsing the `identifier` in the `PluginRequestPayload` and executes the corresponding API logic based on the `apiName`.
- **Plugin Manifest Retrieval**: If the request payload does not include the plugin manifest, the Gateway retrieves it from the [Plugin Store Index](https://github.com/lobehub/lobe-chat-plugins) to ensure correct identification and functionality of the plugin.
- **Parameter Validation**: The Gateway validates the parameters in the request based on the API parameter pattern defined in the plugin manifest to ensure their validity and security.
- **Setting Handling**: The Gateway adds the plugin's requested settings to the request header, allowing the plugin to retrieve the settings, such as API keys or other authentication information, using the `getPluginSettingsFromRequest` method.
- **OpenAPI Support**: If the plugin manifest specifies an [OpenAPI manifest](/zh-CN/guides/openapi), the Gateway will utilize `SwaggerClient` to interact with third-party services defined in the OpenAPI specification.

### Error Handling

Error handling in server communication is crucial. The Gateway defines various error types, such as `PluginErrorType.MethodNotAllowed` indicating an unsupported request method, and `PluginErrorType.PluginGatewayError` indicating a gateway error, ensuring clear error feedback to the LobeChat core in case of issues. For detailed error types, please refer to: [Server Error Types](/zh-CN/api/error)

## Frontend Communication

The frontend communication between the LobeChat core and plugins is based on the HTML5 `window.postMessage` API, which allows secure communication between pages from different origins. In this mechanism, the LobeChat core can securely exchange information with embedded plugins (usually through `<iframe>` embedding).

### Frontend Communication Process

The following is an overview of the communication process:

1. **Initialization of Communication**: When the plugin is loaded and ready to interact with the LobeChat core, it can use the `lobeChat.getPluginPayload()` method to obtain initialization data. Behind the scenes, the plugin listens for the `message` event, waiting for the initialization message from the LobeChat core, and upon receiving it, returns the parsed plugin parameters, name, settings, and status.
2. **Receiving Plugin Payload**: The plugin receives initialization data from the LobeChat core by calling the `lobeChat.getPluginPayload()` method. This method internally listens for the `message` event, waiting for and processing the message containing the required plugin data sent by the LobeChat core.
3. **Retrieving and Updating Basic Information**: The plugin can call methods such as `lobeChat.setPluginSettings(settings)`, `lobeChat.setPluginMessage(content)`, `lobeChat.setPluginState(key, value)` to update settings, message content, and plugin state.
4. **Custom Trigger Actions**: For standalone plugins, custom control of AI message triggering and assistant message creation can be achieved using methods like `lobeChat.triggerAIMessage(id)` and \`lobeChat.createAssistantMessage(content), providing a richer product experience.

In summary, communication between LobeChat and plugins is achieved through asynchronous message exchange using the `postMessage` API. The plugin can request data, receive data, update state, trigger messages, etc., while the LobeChat core is responsible for responding to these requests and providing the required data. This mechanism allows plugins to operate independently and effectively communicate with the LobeChat core.

Additionally, we provide the `lobeChat` method in the SDK to simplify plugin frontend communication. Through the series of methods provided by `lobeChat`, communication details are abstracted, enabling plugins to interact with the LobeChat core using a concise API.

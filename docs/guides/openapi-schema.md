---
title: OpenAPI Schema
group: Plugin Server
order: 4
---

# Configuring and Using OpenAPI Schema

LobeChat's plugin mechanism provides a powerful and flexible way to extend chat functionality. At the same time, support for the OpenAPI specification makes plugin development more standardized and convenient. This document aims to guide developers on how to configure and use the OpenAPI schema in the LobeChat server implementation, thereby creating plugins that seamlessly integrate with LobeChat.

## Role of OpenAPI in LobeChat Plugins

Through the OpenAPI schema, developers can define the API interface of the plugin, including the request path, method, parameters, responses, and more. LobeChat interprets the OpenAPI document to understand how to interact with the plugin, allowing users to install and use the plugin through LobeChat's interface without needing to worry about the specific implementation details of the interface.

### Step 1: Build Your Service API

Develop your service API and ensure that it can respond to LobeChat's requests and return appropriate responses. You can use any language and framework of your choice to build this API.

### Step 2: Create an OpenAPI Document

Use the OpenAPI specification to describe your service, including defining the API's paths, operations, parameters, responses, and more. You can choose to write your OpenAPI document in YAML or JSON format. Ensure that the document contains all the necessary details so that LobeChat can interact with your service correctly.

### Step 3: Create the LobeChat Plugin Manifest File

Create a `manifest.json` file that includes the plugin's metadata and configuration information. Most importantly, provide the URL of your OpenAPI document in the `openapi` field.

Example of the Plugin Manifest Schema:

```json5
{
  openapi: 'https://yourdomain.com/path/to/openapi.json',
  api: [], // No need to configure the api field after setting up openapi

  // ... Other configurations
}
```

## Key Elements of the OpenAPI Specification

When creating an OpenAPI document, ensure that it includes the following:

- **Basic Information**: Such as title, description, version, and more.
- **Server URL**: The URL of the API server.
- **Endpoints**: Available API paths and operations.
- **Parameters**: Input and output parameters for each operation.
- **Authentication**: The authentication methods used by the API.
- **Responses**: Common response messages and error codes.

## Integrating with LobeChat Using OpenAPI

Once your API and OpenAPI document are ready, you can install and test your plugin in the LobeChat UI. Users will be able to interact with your service through the endpoints defined in your OpenAPI document.

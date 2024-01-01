---
title: Server Authentication
group: Plugin Server
order: 5
---

# Server Authentication

When developing LobeChat plugins, server authentication is an important step to ensure the security of the plugin. This document aims to guide developers on how to use different modes for authentication to protect API access from unauthorized use.

## Simple Authentication Mode

Simple authentication mode allows developers to specify required authentication fields in the plugin configuration. Through the `settings` field, you can require users to input specific authentication information, such as an API key.

### Example: Search Engine Plugin Authentication

Here is an example of a search engine plugin configuration that requires the user to provide `SERPAPI_API_KEY` as an authentication field. If the appropriate authentication field is not provided, the plugin will prompt the user to input the necessary information.

```json
{
  "settings": {
    "type": "object",
    "required": ["SERPAPI_API_KEY"],
    "properties": {
      "SERPAPI_API_KEY": {
        "title": "SerpAPI API Key",
        "description": "This plugin uses SerpAPI as the search service. For more information, please visit the [SerpAPI website](https://serpapi.com/).",
        "type": "string",
        "minLength": 64,
        "maxLength": 64,
        "format": "password"
      }
    }
  }
}
```

In the above configuration, the user will need to input an API key with a length of 64 characters. This key will be used on the server to verify if the request is authorized to access the SerpAPI service.

## OpenAPI Authentication

For APIs described using the OpenAPI specification, developers can define multiple authentication schemes in the OpenAPI Schema. These schemes may include basic authentication, API keys, OAuth2, and more.

Currently, our OpenAPI authentication implementation may not be perfect. If you encounter any issues during usage or have specific requirements, please feel free to submit an issue to us. We plan to further improve the authentication mechanism in subsequent versions of the plugin to meet more security needs.

### Authentication Schemes

- `apiKey`: Authentication using an API key.
- `http`: Using standard HTTP authentication (e.g., Basic Auth).
- `oauth2`: Utilizing the OAuth 2.0 protocol for authentication.

### Submitting Issues

If you encounter any problems during authentication implementation or wish for us to support more authentication methods, please contact us through the following channels:

- Create a [new issue](https://github.com/lobehub/chat-plugin-sdk/issues/new) on GitHub
- Join our [Discord community](https://discord.gg/AYFPHvv2jT) and provide feedback in the community channel.

We will actively respond to your feedback and consider your requirements in subsequent versions of the plugin.

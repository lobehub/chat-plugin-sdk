---
title: Server Overview
group:
  title: Plugin Server
  order: 3
---

# Overview of LobeChat Plugin Server

The LobeChat plugin server is an essential part of the plugin ecosystem, carrying the core logic for interacting with the LobeChat main body. The main responsibilities of the server include handling requests, executing business logic, authentication verification, and communicating with the plugin gateway. Below is a high-level overview of what the plugin server should include.

## Key Components and Functions

### Request Handling and Business Logic

- **Request Reception**: Capable of receiving HTTP requests from LobeChat or the plugin gateway.
- **Logic Execution**: Executes specific business logic, such as data processing and external service calls.
- **Response Return**: Returns structured response data based on the execution result of the business logic.

### Plugin Gateway Interaction

- **Gateway Communication**: Effectively communicates with the plugin gateway to ensure correct request routing and timely response transmission.
- **Local and Remote Compatibility**: Supports gateway configuration and interaction in both local development and remote deployment environments.

### Server Deployment and Scalability

- **Cloud Platform Deployment**: Supports deployment on cloud platforms (such as Vercel) to leverage the performance and scalability of cloud services.
- **Environment Configuration**: Provides flexible environment configuration options to adapt to different deployment needs.

### Compatibility and Cross-Language Support

- **Multi-Language Support**: The server is not limited to a specific programming language and supports implementations in various languages such as JavaScript, Python, and others.
- **Developer Tools**: Provides SDKs and tools to help developers quickly build and test plugin servers.

### OpenAPI Schema Integration (Optional)

- **Interface Definition**: Precisely defines the plugin's API interface using OpenAPI Schema, including paths, methods, parameters, and response formats.
- **Documentation**: Provides clear API documentation, enabling LobeChat to automatically recognize and seamlessly integrate with the plugin server.

### Authentication and Security (Optional)

- **Authentication Mechanism**: Implements a secure authentication mechanism to ensure that only authorized requests can access server resources.
- **Key Management**: Provides key or token management, allowing users to securely pass and verify authentication information.

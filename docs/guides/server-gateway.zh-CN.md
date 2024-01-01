---
title: 插件网关
group:
  title: 插件服务端
  order: 3
order: 2
---

# LobeChat 插件网关

在开发 LobeChat 插件时，一个不可或缺的组件就是插件网关（Plugins Gateway）。这个后端服务为插件与 LobeChat 主体之间的通信提供了一个安全、高效的中间层。它不仅处理来自主体的请求，还负责将这些请求转发给相应的插件服务端，然后再将插件处理的结果返回给 LobeChat 主体。

## 插件网关的作用

插件网关的核心作用在于：

- **请求转发**：它接收 LobeChat 主体发出的插件调用请求，并将这些请求路由到指定的插件服务端执行。
- **响应聚合**：插件处理完毕后，网关负责将结果聚合并返回给 LobeChat 主体，完成一次完整的通信周期。
- **安全隔离**：网关在主体与插件服务端之间提供了一层安全隔离，确保数据传输的安全性和插件执行环境的独立性。
- **性能优化**：作为 Edge Function 部署，网关能够确保处理请求的低延迟和高性能。

## 本地开发中的插件网关配置与使用

在进行 LobeChat 插件的本地开发时，正确配置和使用插件网关是实现插件与 LobeChat 通信的关键。本章节将指导你如何在本地开发环境中设置插件网关，并创建相应的网关路由处理请求。

### 配置本地插件网关地址

在本地开发环境中，你需要在插件的 `manifest.json` 文件中指定本地插件网关的地址。这样做允许 LobeChat 直接向你的本地服务发送请求，从而实现本地调试。

打开你的插件项目中的 `manifest.json` 文件，并添加或更新 `gateway` 字段，设置为你本地网关的地址。例如，若你的本地网关运行在端口 `3400`，你可以这样配置：

```json
{
  "gateway": "http://localhost:3400/api/gateway"
}
```

通过这种方式，当 LobeChat 尝试与插件通信时，它将直接请求配置的本地网关地址。以解决网络请求的跨域问题。

### 创建本地网关路由

接下来，你需要在本地服务中创建一个网关路由，以处理来自 LobeChat 的请求。你可以使用 [`@lobehub/chat-plugins-gateway`](https://github.com/lobehub/chat-plugins-gateway) 包提供的函数快速创建这个路由。

首先，确保你已经安装了 `@lobehub/chat-plugins-gateway` 包。如果还没有安装，可以通过以下命令进行安装：

```sh
pnpm install @lobehub/chat-plugins-gateway
```

然后，在你的本地 Next.js 项目中的 `api` 目录下创建一个新的 TypeScript 文件，例如 `pages/api/gateway.ts`，并添加以下代码：

```ts
import { createLobeChatPluginGateway } from '@lobehub/chat-plugins-gateway';

export default createLobeChatPluginGateway();
```

这段代码将创建一个处理 LobeChat 请求的网关路由。`createLobeChatPluginGateway` 函数会自动处理请求转发、响应聚合以及安全校验等任务。

如果你没有采用的 Nextjs ，但是使用了 vercel api 服务，那么可以在 api 目录下创建 NodeJS serverless API：

```ts
import { createGatewayOnNodeRuntime } from '@lobehub/chat-plugins-gateway';

export default createGatewayOnNodeRuntime();
```

### 启动本地服务

最后，启动你的本地服务。确保它侦听你在 `manifest.json` 中配置的端口。例如，如果你的网关地址是 `http://localhost:3400/api/gateway`，那么你的服务应当在 `3400` 端口上运行。

现在，当你在本地开发环境中运行 LobeChat 插件时，LobeChat 将会通过你配置的本地网关地址与你的插件进行通信。这样你就可以在本地环境中测试和调试插件的功能了。

## 其他语言后端的插件网关使用

为了兼容非 js 语言实现的插件网关开发。我们后续会在 SDK 提供一个通用的插件网关 cli ，通过执行命令行，即可快速启动一个插件网关服务。该问题将在 [#38](https://github.com/lobehub/chat-plugin-sdk/issues/38) 中跟进。

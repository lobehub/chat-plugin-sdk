---
title: Development Template
group: Quick Start
---

# Development Template

We provide a plugin template [lobe-chat-plugin-template](https://github.com/lobehub/chat-plugin-template) for you to quickly get started.

This template project uses Next.js as the development framework, and its core directory structure is as follows:

```text
➜  chat-plugin-template
├── public
│   └── manifest-dev.json            # Manifest file
├── src
│   └── pages
│   │   ├── api                      # Next.js server-side folder
│   │   │   ├── clothes.ts           # Implementation of the recommendClothes interface
│   │   │   └── gateway.ts           # Local plugin proxy gateway
│   │   └── index.tsx                # Front-end display interface
```

## Template Usage

Learn how to replace this template with your own plugin project in one click:

### 1. Create a Plugin Project Based on the Template

You can use the **`Use this template`** button on GitHub to quickly create your project, or use the `git clone` command to pull the template repository:

```bash
git clone https://github.com/lobehub/chat-plugin-template.git
```

### 2. Modify Repository Project Information

You need to modify the project information based on the template. Since the template has already aggregated most of the necessary documentation content, you only need to follow the steps below to modify some information:

1. **Replace the Repository Address**: Use a global search for `lobehub/chat-plugin-template` and replace it with your project's address, for example, `arvinxx/chat-plugin-open-interpreter`.
2. **Clear Changelog Content**: The template's Changelog records the template's update history. You need to remove its content. Since the template integrates [Semantic Release](https://github.com/semantic-release/semantic-release), the plugin will automatically trigger version releases, and release logs will be automatically written to the Changelog.
3. **Modify README.md**: The README.md in the template includes usage instructions for the template. You need to replace it with your own content.

- Replace the Title: Replace `Template` with your project name, for example, `Open Interpreter`.
- Replace the Icon: Replace `package.webp` with the name of your project's icon. You can find a suitable icon on [emojipedia](https://emojipedia.org/), or use the URL of your logo directly.
- Replace the Description: Replace `This is the plugin template for LobeChat plugin...` with a one-sentence introduction to your project.
- Replace the Feature Descriptions: Replace the feature section with descriptions of your project's features. You can use the \[Markdown Feature Description Expert] to help you quickly generate attractive feature descriptions.
- Replace the Usage Instructions: Replace the usage section with instructions for using your project.

After completing the above steps, you will have modified the basic information of the repository project and obtained a project introduction document consistent with the style and temperament of official LobeChat plugins.

### 3. Global Search and Replace Markers

Every plugin needs a globally unique identifier. In the template, we use `plugin-identifier` as a placeholder, which you need to replace with your own identifier.

- Replace the Identifier: Use a global search to replace `plugin-identifier` with your identifier, for example, `chat-plugin-open-interpreter`.

## Reference Projects

Of course, you can use any development framework and language you are familiar with, as long as it can implement the functionality described in the manifest. In addition to the above template, you can also learn about plugin development based on LobeChat's official plugins:

- [chat-plugin-realtime-weather](https://github.com/lobehub/chat-plugin-realtime-weather): Real-time weather plugin developed based on the Next.js framework.
- [chat-plugin-search-engine](https://github.com/lobehub/chat-plugin-search-engine): Search engine plugin using Vercel Serverless Edge Runtime, with front-end development using System.js modular development.
- [chat-plugin-web-crawler](https://github.com/lobehub/chat-plugin-web-crawler): Web content extraction plugin using Vercel Serverless NodeJs Runtime, without front-end.

We also welcome contributions of plugin templates for more frameworks and languages.

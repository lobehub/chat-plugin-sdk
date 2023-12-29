---
title: Get Start
group: Quick Start
---

# Quick Start

This article will introduce how to quickly add and use a custom plugin in LobeChat.

## 1. Create and launch the plugin project

You need to create a plugin project locally first, and you can use the prepared [lobe-chat-plugin-template][lobe-chat-plugin-template-url] template;

```bash
$ git clone https://github.com/lobehub/chat-plugin-template.git
$ cd chat-plugin-template
$ npm i
$ npm run dev
```

When`ready started server on 0.0.0.0:3400, url: http://localhost:3400` is displayed, it means the plugin service has been successfully launched locally.

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265259526-9ef25272-4312-429b-93bc-a95515727ed3.png)

## 2. Add a local plugin in LobeChat role settings

Next, go to LobeChat, create a new assistant, and go to its session settings page:

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265259643-1a9cc34a-76f3-4ccf-928b-129654670efd.png)

Click the 'Add' button on the right side of the 'Plugin List' to open the custom plugin adding dialog:

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265259748-2ef6a244-39bb-483c-b359-f156ffcbe1a4.png)

Enter the 'Plugin Manifest URL' as`http://localhost:3400/manifest-dev.json`, which is the address of the plugin manifest we launched locally.

At this point, you should see that the plugin identifier has been automatically recognized as`chat-plugin-template`. Next, you need to fill in the remaining form fields (only the title is required), and then click the 'Save' button to complete the custom plugin addition.

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265259964-59f4906d-ae2e-4ec0-8b43-db36871d0869.png)

After adding, you can see the newly added plugin in the plugin list. If you need to modify the plugin configuration, you can click the 'Settings' button to make changes.

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265260093-a0363c74-0b5b-48dd-b103-2db6b4a8262e.png)

## 3. Test the plugin function in the session

Next, we need to test whether the function of this custom plugin is working properly.

Click the 'Back' button to return to the session area, and then send a message to the assistant: 'What should I wear?' At this point, the assistant will try to ask you about your gender and current mood.

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265260291-f0aa0e7c-0ffb-486c-a834-08e73d49896f.png)

After completing the answers, the assistant will initiate the plugin call, retrieve recommended clothing data from the server based on your gender and mood, and push it to you. Finally, a text summary will be generated based on this information.

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265260461-c22ae797-2809-464b-96fc-d0c020f4807b.png)

After completing these operations, you have learned the basic process of adding a custom plugin and using it in LobeChat.

[lobe-chat-plugin-template-url]: https://github.com/lobehub/chat-plugin-template

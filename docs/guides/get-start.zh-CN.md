---
title: 快速上手
group: 快速上手
---

# 快速上手

本篇将会介绍如何在 LobeChat 中快速添加和使用一个自定义插件。

## 1. 创建并启动插件项目

你需要先在本地创建一个插件项目，可以使用我们准备好的 [lobe-chat-plugin-template][lobe-chat-plugin-template-url] 模板；

```bash
$ git clone https://github.com/lobehub/chat-plugin-template.git
$ cd chat-plugin-template
$ npm i
$ npm run dev
```

当出现 `ready started server on 0.0.0.0:3400, url: http://localhost:3400` 时，说明插件服务已经在本地启动成功。

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265259526-9ef25272-4312-429b-93bc-a95515727ed3.png)

## 2. 在 LobeChat 角色设置中添加本地插件

接下来进入到 LobeChat 中，创建一个新的助手，并进入它的会话设置页：

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265259643-1a9cc34a-76f3-4ccf-928b-129654670efd.png)

点击「插件列表」右侧的「添加」按钮，打开自定义插件添加弹窗：

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265259748-2ef6a244-39bb-483c-b359-f156ffcbe1a4.png)

在 「插件描述文件 Url 地址」中填入 `http://localhost:3400/manifest-dev.json` ，这是我们本地启动的插件描述清单地址。

此时，你应该可以看到看到插件的标识符一栏已经被自动识别为 `chat-plugin-template`。接下来你需要填写剩下的表单字段（只有标题必填），然后点击「保存」按钮，即可完成自定义插件添加。

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265259964-59f4906d-ae2e-4ec0-8b43-db36871d0869.png)

完成添加后，即可在插件列表中看到刚刚添加的插件，如果需要修改插件的配置，可以点击「设置」按钮进行修改。

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265260093-a0363c74-0b5b-48dd-b103-2db6b4a8262e.png)

## 3. 会话测试插件功能

接来下我们需要测试下这个自定义插件的功能是否正常。

点击「返回」按钮回到会话区，然后向助手发送消息：「我应该穿什么？ 」此时助手将会尝试向你询问，了解你的性别与当前的心情。

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265260291-f0aa0e7c-0ffb-486c-a834-08e73d49896f.png)

当回答完毕后，助手将会发起插件的调用，根据你的性别、心情，从服务端获取推荐的衣服数据，并推送给你。最后基于这些信息做一轮文本总结。

![](https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/265260461-c22ae797-2809-464b-96fc-d0c020f4807b.png)

当完成这些操作后，你已经了解了添加自定义插件，并在 LobeChat 中使用的基础流程。

[lobe-chat-plugin-template-url]: https://github.com/lobehub/chat-plugin-template

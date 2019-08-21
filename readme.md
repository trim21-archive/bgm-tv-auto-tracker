# bgm.tv auto tracker

## 介绍

在b站和爱奇艺看番剧的同时一键在[bgm.tv](https://bgm.tv/)上标记已经看过的集数.

## 使用

首先安装[tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

然后安装此脚本

https://greasyfork.org/zh-CN/scripts/369643-bgm-tv-auto-tracker

去[https://bgm.tv/oauth/authorize](https://www.trim21.cn/bgm-tv-auto-tracker/api.v1/auth)
进行授权, 授权后即可正常使用。

效果图

![bilibili](./screenshot/bilibili.png)
![iqiyi](./screenshot/iqiyi.png)

## 开发

现已支持bilibili和iqiyi

欢迎贡献代码

api server见https://www.trim21.cn/

用户脚本使用TypeScript和JavaScript

```bash
npm i #安装依赖
npm run dev # 检测文件变动,自动重新编译
```

入口是`src/js/index.ts`

使用`webpack`打包

## 已知问题

在同一集内重复点击`看到本集`会报错 这是api的设定

如果bgm的某个番没有对应条目(比如柯南的900+集),`看过本集会报错`

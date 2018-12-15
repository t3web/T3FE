# 简介

T3-admin是T3出行后台管理系统项目，是一套采用前后端分离的开发模式，基于Vue且UI组件选型iview的后台管理系统。该项目基于Wenpack4.0+Vue-Cli3.0为开发环境。

## -目录结构

```
├── src 开发
    ├── api 交互请求
    ├── assets 静态资源文件
    ├── compontents 全局公用组件
    ├── config 项目基本信息常量配置
    ├── directive 全局指令
    ├── libs axios请求响应拦截配置及全局工具函数集合
    ├── locale 项目应用语言依赖文件
    ├── mock 请求数据模拟
    ├── plugin 自定义插件安装文件
    ├── router 路由及路由拦截器配置
    ├── store vuex状态管理器
    ├── style 全局样式初始化
    ├── view 项目页面文件
    ├── App.vue 项目页面根
    ├── main.js 项目功能模块集合
    ├── index.less 项目样式配置
├── dist 打包项目文件
├── public 打包所需静态资源及HTML主页
├── tests 测试相关
├── vue.config.js 配置dev，build属性
```
# 简介

T3-admin是T3出行后台管理系统项目，是一套采用前后端分离的开发模式，基于Vue且UI组件选型iview的后台管理系统。该项目基于Wenpack4.0+Vue-Cli3.0为开发环境。

## -目录结构

```bash
├── public           单页面应用入口html		
├── src              单页应用内部开发
	├──config       开发相关配置
	        ├──index                    配置请求IP及主页等
                └──passengerTable           类型模块			
	├──api       	请求接口配置模块 
	├──assets    	静态资源
	├──components	通用组件以及公用组件
		├──login-form                 登陆表单模块
		├──custom-columns             自定义列表组件
		├──export-flie                导出组件
		├──import-table               导入组件  
		├──search-list                输入框组件
		├──treeInput-list             树形多选下拉框
		├──v-table                    table组件
		└──v-upload                   上传图片组件
	├──error-page   报错之后跳转页面
	├──login        登陆页面
	├──single-page  业务相关页面
	├──APP.vue      vue挂载主页面
	├──less         通用css
	├──main.js      主JS
├── vue.config.js   主配置文件	  
			 
```

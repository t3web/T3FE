# 全局配置

## 1. config文件夹

### 司机订单状态信息
这个文件目录里是该项目用到常量信息，示例：
``` js
export const driverStatusMap = {
  1: '正常',
  2: '短期封号',
  3: '长期封号',
  4: '未审核',
  5: '删除',
  6: '离职',
  7: '黑名单',
  8: '强制下线'
}
/** 司机管理黑名单状态 */
export const blackStatusMap = {
  1: '封号',
  2: '解封',
  3: '拉黑',
  4: '移除黑名单'
}
/** 订单类型 */
export const orderTypeStatusMap = {
  1: '实时',
  2: '预约'
}
```
### api基础路径
还有这样全局变量，在index.js文件中，包括开发和生产API接口调配

``` js
export default{
    // .....
    /**
   * @description api请求基础路径
   */
    baseUrl: {
        dev: 'xxxxxx',
        pro: 'xxxxxxx'
    }
}
```
### 应需加载插件
自定义公用插件使用及属性配置

``` js
export default{
    // .....
    /**
   * @description 需要加载的插件
   */
    plugin: {
        'error-store': {
            showInHeader: false, // 设为false后不会在顶部显示错误日志徽标
            developmentOff: false // 设为true则开发环境不会收集错误信息，开发中排查错误
        }
  }
}
```

### 首页name参数属性配置

```js
export default{
    // .....
    /**
   * @description 默认打开的首页的路由name值，默认为home
   */
    homeName: 'home'
  }
}
```

### cookieExpires
token在Cookie中存储的天数，默认为1，即1天

```js
export default{
    // .....
    /**
   * @description token在Cookie中存储的天数，默认1天
   */
    cookieExpires: 1
}
```

### useI18n

项目页面语言配置
```js
export default{
    // .....
  /**
   * @description
   * 是否使用国际化，默认为false
   * 如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   * 用来在菜单中显示文字
   */
  useI18n: false
}
```
## 2. vue.config

此文件主要用于vue项目开发项目配置信息，devServer配置，代理服务proxy配置，详细见项目文件。另附[webpack](https://webpack.css88.com/)中文说明文档参照。
# 权限控制

权限控制分两种，即整个页面具有权限控制，和页面中单个组件需要权限。


## 1. 页面访问权限控制

整个页面的权限控制较为简单，你只需要在路由配置的meta中配置access字段即可，它是一个数组，如果你没有设置access字段，那么该页面是所有用户都可以访问的；如果你设置了该字段，那么只有该字段所设置的数组中包含的权限名称的用户可访问该页面。 如下：
```js
{
  path: '/page1',
  name: 'page1',
  component: Main,
  meta: {
    access: ['super_admin'] 
  }
}
```
## 2. 组件浏览权限控制
如果一个页面上有多个组件，而不同的组件对于权限的要求又有所不同，那么，可以使用如下方法给一个组件设置根据权限值配置它的可访问性，下面代码段在`/src/plugin/error-store/index.js`中：
```js
Vue.prototype.$utils={//全局方法
  pkAccess:function(key) {//获取url中的参数
    return store.state.user.access.includes(key)
  }
}
```
然后在页面中使用，控制按钮或者某个组件是否有权限使用：
``` js{3}
<Button
  type="primary"
  v-if="this.$utils.pkAccess('agreement_control_add')"
>新建</Button>
```
根据传入的参数与权限列表中匹配是否具有该权限，以此做控制。

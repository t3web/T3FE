# 路由配置

在t3-admin中，路由配置承担着重要的作用，它影响着如下内容：

:::tip &nbsp;
1.左侧菜单内容 

2.是否缓存该页

3.该页面图标（显示在菜单、面包屑和Tab标签）
:::
接下来来看如何配置路由

路由的配置是在 `'./src/router'` 文件夹下，`'./src/router/index.js'`文件中定义路由拦截的逻辑，`'./src/router/routers.js'` 文件中定义页面路由信息。

## 1. 路由可配项

t3-admin项目使用iview作为UI组件库，除了原生参数外，还带有路由meta配置参数：
```js
meta: {
  hideInMenu: (default: false) // 设为true后在左侧菜单不会显示该页面选项
  showAlways: (default: false) // 设为true后如果该路由只有一个子路由，在菜单中也会显示该父级菜单
  notCache: (default: false) // 设为true后页面不会缓存
  access: (default: null) // 可访问该页面的权限数组，当前路由设置的权限会影响子路由
  icon: (default: -) // 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
  href: 'https://xxx' // (default: null) 用于跳转到外部连接
}
```

## 2. 在独立页面展示的页面
如登录页、错误页这种独立的页面，无需使用Main组件，则直接定义在 routers.js 中export default []的数组中，如登录页的定义如下：

```js
export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue') //路由模块按需加载
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  }
}
```

## 3. 路由嵌套
嵌套路由就是在一个被路由过来的页面下可以继续使用路由，嵌套也就是路由中的路由的意思。在vue中，我们如果不使用嵌套路由，那么只有一个`<router-view>`，但是如果使用，那么在一个组件中就还有`<router-view>`，这也就构成了嵌套。
嵌套规则写法示例如下：
```js
routes: [
  { 
    path: '/parent/:id', component: ParentCompnent,
    children: [
        {
          // 当 /parent/:id 匹配成功，
          // childCompnent 会被渲染在 ParentCompnent 的 <router-view> 中
          path: 'child',
          component: childCompnent
        }
    ]
  }
]
```

## 4. 路由拦截
在`'./src/router/index.js'`文件中，你可以配置路由跳转时的路由守卫。你可以设置文件中的`LOGIN_PAGE_NAME`常量，其默认值是`login`，这个就是路由列表中你的登录页面的name值，如果你的登录页面`name`值为`login`，则无需修改。

路由拦截功能的主要作用做权限管理，用户是否有权访问该页面，如若无权限，则导入400页面无权访问。

路由功能往往和axios请求响应拦截功能以配合，传送到[axios请求响应拦截]()

路由拦截实现方案众多，本项目使用菜单与路由分离，菜单由后端返回的方法。菜单的显示标题，图片等需要随时更改，要对菜单做管理功能。后端直接根据用户权限返回可访问的菜单。

路由拦截以及基本思路参照此表：

![avatar](/t3-admin-img/router.png)

前端定义路由信息,参照`路由可配项`
```js
routes: [
  {
    path: '/home',
    name: 'home',
    // meta中定义权限信息
    meta: {
      hideInMenu: true,
      title: '首页',
      notCache: true,
      icon: 'md-home'
    },
    component: () => import('@/view/single-page/home-moules')
  }
]
```
定义完路由后，我们主要是利用`vue-router`提供的钩子函数`beforeEach()`对路由进行判断。简化项目路由拦截逻辑说明：
:::tip
每个钩子方法接收三个参数： 

* to: Route: 即将要进入的目标 路由对象 

* from: Route: 当前导航正要离开的路由 

* next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

* next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。 

* next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。 

* next(‘/’) 或者 next({ path: ‘/’ }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
:::
:::warning
确保要调用 next 方法，否则钩子就不会被 resolved。
:::
根据上述思路，简化逻辑,伪代码表现：
```js
 router.beforeEach((to, from, next) => {
  if (token()) {// 判断是否登录
    // 有token，已登录
    if (to.name == 'login') { // 有token，路由指向登录页，则跳转到home主页
      
      next({name: 'home'})
    }
    next() 
  } else {// 没登录则跳转到登录界面
    
    next({path: '/login'})
  }
})
// 在登陆后获取权限列表,组装路由信息
getUserInfo().then(res => {
  // 拉去用户信息
  NavList().then(res => {
    // 获取权限菜单列表以及权限路由
  })
})
```
```js
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()  // 路由update时，顶部进度条
  const token = getToken()  // 通过vuex state获取当前的token是否存在
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    if (to.name !== CHANGE_PAGE_NAME) {
      next({
        name: LOGIN_PAGE_NAME // 跳转到登录页
      })
    } else {
      next()
    }
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: homeName // 跳转到homeName页
    })
  } else {
    if (store.state.user.hasGetInfo) {
      turnTo(to, store.state.user.access, next)
    } else {
      store.dispatch('getUserInfo').then(user => {
        // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
        turnTo(to, user.access, next)
      }).catch(() => {
        setCookie('token', '', -1)
        next({
          name: 'login'
        })
      })
    }
  }
})
```

路由更新完毕后调用`afterEach`路由钩子函数，关闭顶部进度条加载，以及将页面归位：
```js
Router.afterEach((to) => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0);
});
```
由上面代码端看出，当token不存在时就会拉取用户信息，获取Nav菜单列表，按用户权限匹配路由，组装路由信息，完成渲染，下面是拉去用户信息以及获取权限列表(详细代码段见`/src/store/modules/user.js`)：
```js
getUserInfo(state.token).then(res => {
  const data = res.data
  let userAccount = data.result.userAccount
  // ...
  getNavList().then(res => { // 获取菜单列表
    let navAccessList = []
    let resultMenuList = []
    for (let key in res.data.result) {
      res.data.result[key].name = res.data.result[key].resourceUrl
      navAccessList.push(res.data.result[key].resourceUrl)
      res.data.result[key].meta = { 'title': res.data.result[key].resourceName, 'accsee': [res.data.result[key].uuid], 'showAlways': true, 'icon': res.data.result[key].menuIcon }
      if (res.data.result[key].resourceParent !== '') {
        res.data.result[key].meta.showAlways = false
      }
      if (res.data.result[key].resourceType === 1) {
        resultMenuList.push(res.data.result[key])
      }
    }
    commit('setAccess', navAccessList)
    let navList = treeDataTranslate(resultMenuList, 'uuid', 'resourceParent')
    for (let i = 0; i < navList.length; i++) {
      if (!navList[i].children || !navList[i].children.length === 0) {
        navList[i].meta.showAlways = false
      }
    }
    commit('changeRouters', navList)
    resolve()
  }).catch(err => {
  })
  resolve(data)
}).catch(err => {
  reject(err)
})
```
上述代码红用到功能函数在`/src/libs/...`中的，详细见项目文件。
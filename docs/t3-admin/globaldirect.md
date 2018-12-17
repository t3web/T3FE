# 全局指令

Vue自定义指令分为全局注册和局部注册，本项目主要用全局注册。全局指令方法在`src/directtive`文件中。`directtives.js`中封装拖拽指令方法，关于Vue指令注册详细请复习[Vue官网--自定义指令](https://cn.vuejs.org/v2/guide/custom-directive.html)。

目前自定义指令有拖拽，后期项目应需在此文件下扩展。
## 1. v-draggable

```js
const importDirective = Vue => {
  /**
   * 拖拽指令 v-draggable="options"
   * options = {
   *  trigger: /这里传入作为拖拽触发器的CSS选择器/,
   *  body:    /这里传入需要移动容器的CSS选择器/,
   *  recover: /拖动结束之后是否恢复到原来的位置/
   * }
   */
  Vue.directive('draggable', directive.draggable)
}
```
在组件中使用方式为： 
```js
<Button v-draggable="buttonOptions" id="button"></Button>

buttonOptions: {
  trigger: '#button', // 设置能触发拖动的元素的CSS选择器
  body: '#button' // 设置需要移动的元素的CSS选择器
}
```

## 2. 自定义指令注意事项：

:::tip 当指令使用字面修饰符，值将按普通字符串处理并传递给update方法，update方法只调用一次，因为普通字符串不能影响数据变化

:::
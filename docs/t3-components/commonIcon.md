# 图标
如果页面需要引入图标,这是Icon组件的根组件，复杂组件嵌套类型。这个组件支持iView内置图标和自定义图标，如果是使用iView内置的图标，则使用方法和使用iView的Icon组件一样；如果是自定义图标，则需要在名字前加上下划线`_`。该组件实际是对iView内置Icon组件和自定义图标组件Icons的结合，而用来区分这两者的就是type属性开头是否带有下划线。
```js
//引入组件
import CommonIcon from '_c/common-icon'
export default {
  components: {
    CommonIcon
  },
  // 初始化组件中用的参数
  data () {
    return {
      color: '', //图标颜色
      icon: '',
      iconSize: '',// 图标尺寸
      type: '' // 图标名称
    }
  }
}
// 页面中使用
<common-icon class="icon" :type="icon" :size="iconSize" color="#fff"/>
```
# 组件

本项目的组件除了用到[iview](https://www.iviewui.com/docs/guide/install)的组件库外,还有其他的功能组件和业务组件。
在`/src/compnents`文件下的组件是项目公用组件，在`/src/view/compnents`文件时页面私有组件。

## 1. 公用组件

本项目包含公用组件有 echarts，公用图标，倒计时，信息卡片
###  1.1 echarts

封装的echarts组件总用到了两个，一个是`chart-bar`，一个是`chart-pie`。
两个组件用法：
```js
// 引入组件
import { ChartPie, ChartBar } from '_c/charts'
// 注册组件
export default {
  components: {
    ChartPie, 
    ChartBar
  },
  // data中注册参数
  data () {
    return {
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  }
}
// 页面中使用  value传入参数说明：barData是数组，pieData是对象
<chart-bar style="height: 300px;" :value="barData" text="每周用户活跃量"/>
<chart-pie style="height: 300px;" :value="pieData" text='用户访问来源'></chart-pie>
```

### 1.2 图标
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
### 1.3 信息卡片
```js
import InforCard from '_c/info-card'
export default {
  components: {
    InforCard
  },
  data () {
     
  }
}
// 页面中使用
<infor-card shadow color="#ffe6e6" icon="ios-headset" :icon-size="36">
  <p>服务中车辆数</p>
</infor-card>
```
### 1.4 CountTo组件
数字动画效果组件，用来实现数字的动画渐变效果，支持异步更新。
组件应需参数 Props：
|    属性   |       说明	 |      类型      |    默认值  |
|:-------: |:-------------: | :----------:| :----------: |
|   init   |     动画未开始时显示的数值      |Number|0|
|startVal|起始值，即动画开始前显示的数值  |Number|0|
|end|结束值，即动画结束后显示的数值  |Number|必填|
|decimals|保留几位小数  |Number|0|
|decimal|分隔整数和小数的符号，默认是小数点  |String|.|
|duration|动画持续的时间，单位是秒  |Number|2|
|delay|动画延迟开始的时间，单位是秒  |Number|0|
|uneasing|是否禁用easing动画效果  |Boolean|false|
|usegroup|是否使用分组，分组后每三位会用一个符号分隔  |Boolean|false|
|separator|用于分组(usegroup)的符号  |String|,|
|simplify|是否简化显示，设为true后会使用unit单位来做相关省略  |Boolean|false|
|unit|自定义单位，如[3, 'K+'], [6, 'M+']即大于3位数小于6位数的用k+来做省略1000即显示为1K+  |Array|[[3, 'K+'], [6, 'M+'], [9, 'B+']]|
|countClass|应用于数字的自定义类名  |String|-|
|unitClass|应用于单位的自定义类名  |String|-|

```js
// 引入该组件
import CountTo from '_c/count-to'
export default {
  // 注册组件
  components: {
    CountTo
  },
  // 组件参数初始化
  data () {
    return {

    }
  }
}
// 页面里使用
<count-to :end="end" count-class="count-style"/>
```
## 2. 私有组件
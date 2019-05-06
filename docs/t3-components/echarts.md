# echarts

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
# 信息卡片
```js
import InfoCard from '_c/info-card'
export default {
  components: {
    InfoCard
  },
  data () {
     
  }
}
// 页面中使用
<info-card shadow color="#ffe6e6" icon="ios-headset" :icon-size="36">
  <p>服务中车辆数</p>
</info-card>
```
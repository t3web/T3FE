# 带模糊搜索的下拉框
该组件支持多选、远程模糊搜索。勾选的值默认排在下拉列表的最前面
#### 代码示例 
``` 
<template>
 <multi-select
          ref="vinSelect"
          placeholder="车架号"
          :width="200"
          :height="100"
          @on-success="getVinVal"
          dataKey="vin"
          dataLabel="vin">
        </multi-select>
</template>
import multiSelect from  "_a/multi-select/multi-select.vue";
<script>
export default {
    components:{
      multiSelect
}
</script>
```
### API
#### props


属性 |说明 | 类型 | 默认值
---|---|---|---|
 placeholder| 默认提示文字 | String | 请选择
 url | 远程接口的api | String(必填) | -
 query | 输入的关键词 | String | -
width | 组件的最大宽度 | number | 300
height | 组件的最大高度 | number | 80
params | 请求接口带上的参数 | Object | {}
isLock | 请求锁，设为true以后可以在父组件控制达到某个条件以后再触发请求 | Boolean | false
dataKey | 下拉列表的value | String | key
dataLabel | 下拉列表的label | String | label

#### events
事件名 |说明 | 返回值
---|---|---
 on-success| 接口返回的结果 | Array | []
 clearValue | 重置结果 | Array | []
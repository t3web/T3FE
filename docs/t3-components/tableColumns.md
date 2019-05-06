# 自定义表头

### 基础用法
```vue
<template>
	<TableColumns v-model="selectFields" :customList="totalFields"></TableColumns>
</template>
<script>
    export default {
        data () {
            return {
                selectFields: ['title1'],
				totalFields: [
					{
						key: 'title1',
						title: '标题1'
					},
					{
						key: 'title2',
						title: '标题2'
					},
				]
            }
        }
    }
</script>
```		
#### 6.2 API
TableColumns props
属性 |说明 | 类型 | 默认值
---|---|---|---|
value | 勾选的title的key集合，可用v-model绑定 | Array | []
customList | 所有待选择的数据集 | Array | -
btnText | 按钮显示文本 | String | '自定义显示列'
<br/>

TableColumns events
事件名 |说明 | 返回值
---|---|---|
on-confirm | 点击确定时的回调 | -
<br/>

TableColumns methods
方法名 |说明 | 参数
---|---|---|
getCustomFields | 根据勾选的title的key集合，筛选totalFields<br/>参数1：总的table column配置<br/>参数2：勾选的key集合 | 勾选的table column配置
<br/>
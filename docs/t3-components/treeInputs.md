# 树形多选框
#### 基础用法
```vue
<template>
    <TreeInputs :data="tree" v-model="checkedValue"></TreeInputs>
</template>
<script>
    export default {
        data () {
            return {
                tree: [
					{
						title: 'parent 1-1',
						value: '0',
						children: [
                            {
                                title: 'parent 1-2',
								value: '1',
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
										value: '2'
                                    },
                                    {
                                        title: 'leaf 1-1-2',
										value: '3'
                                    }
                                ]
                            }
						]
					}
				],
				checkedValue: '2'
            }
        }
    }
</script>
```
#### 5.2 API
TreeInputs props
属性 |说明 | 类型 | 默认值
---|---|---|---|
data | 搜索框的配置项，详细配置见下表 | Array | -
position | 下拉菜单出现的位置，可选值为top、top-start、top-end、bottom、bottom-start、bottom-end、left、left-start、left-end、right、right-start、right-end | String | bottom-start
inputWidth | 选择框宽度 | String | 300px
inputHeight | 选择框高度 | String | 67px
placeholder | 占位文本 | String | 请选择
<br/>
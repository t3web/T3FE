#  搜索框

### 基础用法
```vue
<template>
    <SearchList :inputList="inputList"></SearchList>
</template>
<script>
    export default {
        data () {
            return {
                inputList: [
                  {
                    name: 'text-input',
                    bind_key: 'mobile',
                    placeholder: '请输入联系电话',
                    value: '',
                    title: '联系电话',
                    titleWidth: 65,
                    inputWidth: 200
                  }
                ]
            }
        }
    }
</script>
```


####  API
SearchList props
属性 |说明 | 类型 | 默认值
---|---|---|---|
inputList | 搜索框的配置项，详细配置见下表 | Array | -
spreadStatus | 是否开启展开更多模式（true: 开启，false：关闭） | Boolen | false
showNumber | 开启展开模式后，设置指定个数搜索框之后不显示 | Number | 3
<br/>

SearchList events
事件名 |说明 | 返回值
---|---|---|
on-search | 点击搜索按钮时触发 | { key: value }
on-reset | 点击重置按钮时触发 | {}
on-search-tree | 当name为drop-tree-input时，输入搜索框时触发 | value: 输入框内容
on-drop-tree | 当name为drop-tree-input时，展开模糊搜索时触发 | -
<br/>

SearchList methods
方法名 |说明 | 参数
---|---|---|
getSearchData | 获取搜索内容 | 无
resetData | 重置搜索框 | 无
<br/>

inputList
属性 |说明 | 类型 | 默认值
---|---|---|---|
name | text-input: 文本输入框、<br/>number-input：数字输入框、<br/>drop-input：下拉选择框、<br/>drop-tree-input：树形下拉选择框、<br/>remote-input：远程搜索输入框、<br/>date-input：起止date选择框、<br/>date：date选择框、<br/>date-time-input：起止date + time选择框、<br/>month-input：月份选择框、<br/>year-input：年份选择框、<br/>section-input：数字范围输入框、 | String | -
bind_key | 返回的对象属性的key名，当name值为section-input、date-input、cascader-input时，由于会返回多个参数，所以应绑定数组['key1', 'key2'] | String/Array | -
placeholder | 输入框的placeholder | String | -
value | 与输入框的value绑定 | * | -
title | 输入框的标题名 | String | -
titleWidth | 输入框标题宽度 | String | -
inputWidth | 输入框宽度 | String | -
dropList | 仅在name值为drop-input时有效，下拉数据，数据结构同select组件 | Array | -
cascaderList | 仅在name值为cascader-input时有效，级联列表数据，数据结构同cascader组件 | Array | -
remoteMethod | 仅在name值为remote-input时有效，远程搜索的方法，方法写法同select组件 | Function | -
remoteList | 仅在name值为remote-input时有效，展示的下拉列表，数据结构同select组件 | Array | -
value1 | 仅在name值为section-input时有效，用于第一个输入框v-model绑定 | Number | -
value2 | 仅在name值为section-input时有效，用于第二个输入框v-model绑定 | Number | -
label | 仅在name值为drop-tree-input时有效，绑定选中的数据label | String | -
loading | 仅在name值为drop-tree-input时有效，加载中动画 | Boolean | -
treeData | 仅在name值为drop-tree-input时有效，树形列表，数据结构同tree组件 | Array | -
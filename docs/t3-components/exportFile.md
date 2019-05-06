# 数据导出
用来导出列表中的数据，支持勾选导出，全部数据导出，自定义导出文件的标题，文件类型等等
#### 代码示例 

```js
<template>
    <ExportFile 
        //请求带上的参数
        :queryData="exportParams"
        //导出的请求地址
        :exportUrl="exportUrl"
        //导出的Excel文件中显示的标题
         excelTitle="车辆信息导出">
    </ExportFile>
</template>
import ExportFile from "_a/export-file/exportFile.vue";
<script>
export default {
    components:{
      ExportFile
}
</script>
```
### API
#### props


属性 |说明 | 类型 | 默认值
---|---|---|---|
 queryData| 请求的参数 | Object | {}
 ajaxMethod| 请求方法 | String | POST
 columnsTitle | 每一列标题| Array |[]
exportUrl | 导出的api | String(必填) | -
excelTitle | 导出文件的标题 | String | Message
exportModalTitle | 模态框的title | String | 信息导出
exportType | 导出文件的类型 | String | xls
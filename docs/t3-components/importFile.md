# 文件导入
支持导入文件、图片等
#### 代码示例  
``` 
<template>
<ImportFile
  toDownTemplateUrl="/api/assets/v1/vehicle/createVehicleExcelModel"
  importOnceFileUrl="/api/assets/v1/vehicle/addBatchExcelVehicle"
  downFailUrl="/api/assets/v1/vehicle/downloadErrorList"
  @on-success="upSuccess"
></ImportFile>
</template>
import ImportFile from "_a/import-file/index.vue";
<script>
export default {
    components:{
      ImportFile
}
</script>
```
### API
#### props


属性 |说明 | 类型 | 默认值
---|---|---|---|
 downFailUrl| 下载失败的api | String | -
 importOnceFileUrl | 导入Excel的URL | String | -
 importTwiceFileUrl | 导入图片压缩包的URL | String | -
importOnceData | 导入Excel时的请求参数 |Object | -
importTwiceData | 导入图片时的请求参数 | String | -
toDownTemplateUrl | 下载模板的链接 | String | 信息导出
exportType | 导出文件的类型 | String | xls
btnText | 按钮显示的文字 | String | 批量新建
isNeedUpImg | 是否需要上传图片 | Boolean | false 
isShowExcel | 是否需要上传Excel | Boolean | false
isShowTemplate | 是否需要显示下载模板 | Boolean | false
importName | 上传的Excel文件字段名 | String | file
importZipName | 上传的图片压缩包文件字段名 | String | file
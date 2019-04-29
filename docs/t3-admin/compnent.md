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

#### 2.1 树形Input
树形选择组件，用来树形选择交互，如省市区多级选择

组件应需参数 Props：

|    属性   |       说明	 |      类型      |    默认值  |
|:-------: |:-------------: | :----------:| :----------: |
|TreeData |传入data |Array |  |
|position |选择器位置 可选值为 <code>top</code> <code>top-start </code> <code>top-end</code> <code>bottom</code> <code>bottom-start</code> <code>bottom-end</code> <code>left</code> <code>left-start</code> <code>left-end</code> <code>right</code> <code>right-start</code>  <code>right-end</code>| String | bottom|
|inputWidth|input框宽度 |String |300px|
|inputHeight|input框宽度 |String |300px|
|allTitle|全部选择框的文字内容 |String | 全部|
|selectAll |是否带有全部选择 |Boolean | false|
|value|input值，双向绑定selectedUuid| String | |

#### 2.1 数据导出
#### 概述 ##
用来导出列表中的数据，支持勾选导出，全部数据导出，自定义导出文件的标题，文件类型等等
#### 代码实例 ##

``` 
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

#### 2.1 文件导入
#### 概述 ##
支持导入文件、图片等
#### 代码实例 

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

## 3. 搜索框

#### 3.1 基础用法
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


#### 3.2 API
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

## 4. 树形多选框

#### 4.1 基础用法
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
#### 4.2 API
TreeInputs props
属性 |说明 | 类型 | 默认值
---|---|---|---|
data | 搜索框的配置项，详细配置见下表 | Array | -
position | 下拉菜单出现的位置，可选值为top、top-start、top-end、bottom、bottom-start、bottom-end、left、left-start、left-end、right、right-start、right-end | String | bottom-start
inputWidth | 选择框宽度 | String | 300px
inputHeight | 选择框高度 | String | 67px
placeholder | 占位文本 | String | 请选择
<br/>

## 5. 自定义表头

#### 5.1 基础用法
```vue
TreeInputs events
事件名 |说明 | 返回值
---|---|---|
on-change | 选中项改变时触发 | 当前已选中的节点的value数组
<template>
	<TableConfig
		@on-confirm="changeTableColumn"
		v-model="selectFields"
		:customList="totalFields">    
	</TableConfig>
</template>
<script>
    export default {
        data () {
            return {
                selectFields: [],
				totalFields: [],
				customFields: []
            }
        },
		methods: {
			changeTableColumn () {
				this.customFields = getCustomFields(this.totalFields, this.selectFields)
			}
		}
    }
</script>
```			
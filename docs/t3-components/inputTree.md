# 树形Input
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
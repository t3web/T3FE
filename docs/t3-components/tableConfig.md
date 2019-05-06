# 自定义表头

## 基础用法
```vue
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

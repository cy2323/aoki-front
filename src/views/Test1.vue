<template>
	<div>
		<div>Test1</div>
		<div style="margin-top: 10px">
			<el-row>
				<el-button type="primary" plain><i class="el-icon-edit-outline"></i> 新增</el-button>
				<el-button type="success" plain><i class="el-icon-edit"></i> 修改</el-button>
				<el-button type="danger" plain><i class="el-icon-delete"></i> 删除</el-button>
			</el-row>
		</div>
		<div style="margin-top: 10px">
			<el-table :data="tableData" height="250" border style="width: 100%">
				<el-table-column prop="date" label="日期" width="180">
				</el-table-column>
				<el-table-column prop="date" label="日期" width="180">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="address" label="地址"> </el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
	name: "Test1",
	data() {
		return {
			tableData: [
				{
					date: "2016-05-03",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
					date: "2016-05-08",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
					date: "2016-05-06",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
					date: "2016-05-07",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
			],
		};
	},
};
</script>

<style scoped>
</style>
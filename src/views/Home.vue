<template>
	<div>
		<el-container>
			<el-header>
				奥祺商城
				<el-dropdown style="float: right" @command="commandHandler">
					<span class="el-dropdown-link">
						下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="">个人中心</el-dropdown-item>
						<el-dropdown-item command="">设置</el-dropdown-item>
						<!-- <el-dropdown-item disabled>双皮奶</el-dropdown-item> -->
						<el-dropdown-item divided command="logout"
							>注销登录</el-dropdown-item
						>
					</el-dropdown-menu>
				</el-dropdown>
			</el-header>
			<el-divider></el-divider>
			<el-container>
				<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
					<el-menu router unipue-opened>
						<el-submenu
							index="1"
							v-for="(item, index) in this.$router.options.routes"
							:key="index"
							v-if="!item.hidden"
						>
							<template slot="title">
								<i class="el-icon-location"></i><span>{{ item.name }}</span>
							</template>
							<el-menu-item
								:index="children.path"
								v-for="(children, indexc) in item.children"
								:key="indexc"
								>{{ children.name }}</el-menu-item
							>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main>
					<router-view />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
	name: "Home",
	// data(){
	//     return{

	//     };
	// }
	methods: {
		commandHandler(command) {
			// 注销登录的前端逻辑
			if (command == "logout") {
				this.$confirm("此操作将注销登录, 是否继续?", "提示", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning",
				})
					.then(() => {
						this.postRequest("/logout");
						window.sessionStorage.removeItem("");
						window.sessionStorage.removeItem("");
						// 当前用户登录的数据被缓存在vuex中，
						// 所以在当前用户退出的时候应该清除这些信息，否则下一个用户登录的时候会读取到当前用户的信息【权限控件信息】
						this.$store.commit('initRoutes',[]);
						this.$router.replace("/");


					})
					.catch(() => {
						this.$message({
							type: "info",
							message: "已取消操作",
						});
					});
			}
		},
	},
};
</script>

<style>
</style>
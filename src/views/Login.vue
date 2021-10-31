<template>
	<div id="loginId">
		<el-form ref="form" :model="form" class="loginContainer">
			<h3 class="loginTitle">系统登录</h3>
			<el-input-item>
				<el-input
					a
					type="text"
					auto-complete="false"
					v-model="form.username"
					placeholder="请输入用户名"
				></el-input>
			</el-input-item>
			<el-input-item>
				<el-input
					type="password"
					auto-complete="false"
					v-model="form.password"
					placeholder="请输入密码"
				></el-input>
			</el-input-item>
			<el-input-item>
				<el-input
					type="text"
					auto-complete="false"
					v-model="form.code"
					placeholder="点击图片更换验证码"
					style="width: 250px; margin-right: 5px"
				></el-input>
				<img :src="captchaUrl" />
			</el-input-item>
			<el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
			<el-button type="primary" style="width: 100%">登录</el-button>
		</el-form>
	</div>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {
			captchaUrl: "",
            checked: false,
			form: {
				username: "leo",
				password: "123",
				code: "",
				
			}
		};
	}
};
</script>

<style>
.loginContainer {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.loginTitle {
    margin: 0px auto 40px auto;
    text-align: center;
}
.loginRemember {
    text-align: left;
    margin: 0px 0px 15px 0px;
}
</style>
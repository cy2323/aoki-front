<template>
	<div>
		<el-form
			:rules="rules"
			v-loading="loading"
			element-loading-text="拼命加载中。。。"
			element-loading-spinner="el-icon-loading"
			element-loading-background="rgba(0, 0, 0, 0.8)"
			ref="loginForm"
			:model="loginForm"
			class="loginContainer"
		>
			<h3 class="loginTitle">系统登录</h3>
			<el-form-item prop="username">
				<el-input
					prefix-icon="el-icon-user"
					type="text"
					auto-complete="false"
					v-model="loginForm.username"
					placeholder="请输入用户名"
				></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input
					prefix-icon="el-icon-lock"
					suffix-icon="el-icon-view"
					type="password"
					auto-complete="false"
					v-model="loginForm.password"
					placeholder="请输入密码"
				></el-input>
			</el-form-item>
			<el-form-item prop="captcha">
				<el-input
					type="text"
					auto-complete="false"
					v-model="loginForm.captcha"
					placeholder="点击图片更换验证码"
					style="width: 250px; margin-right: 5px"
				></el-input>
				<img :src="captchaUrl" @click="getCaptcha()" />
			</el-form-item>
			<el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
			<el-button type="primary" style="width: 100%" @click="submitLogin"
				>登录</el-button
			>
			<div style="margin-top:10px;text-align:right;">
				<span>还没有账号？点我</span><el-link href="#" type="primary">注册</el-link
				><span>一个吧！</span>
			</div>
		</el-form>
	</div>
</template>

<script>
import { getUUID } from "@/utils/index";
import { postRequest } from "@/utils/api";
export default {
	name: "Login",
	data() {
		return {
			// uuidParam: getUUID(),
			// captchaUrl: "/captcha.jpg?uuid=" + this.uuidParam,
			captchaUrl: "",
			checked: true,
			loading: false,
			loginForm: {
				username: "",
				password: "",
				captcha: "",
				uuid: "",
			},
			rules: {
				// 对应 el-form-item 中的 prop="username"属性
				username: [
					{ required: true, message: "请输入用户名", trigger: "blur" },
				],
				password: [{ required: true, message: "请输入密码", trigger: "blur" }],
				captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
			},
		};
	},
	methods: {
		submitLogin() {
			this.$refs.loginForm.validate((valid) => {
				if (valid) {
					this.loading = true;
					this.postRequest("/sys/login", this.loginForm).then((resp) => {
						this.loading = false;
						if (resp) {
							// this.loading = false;
							alert("token: " + resp.token);
							// this.$cookie.set("token", resp.token);
							window.sessionStorage.setItem("token", resp.token);
							this.$router.replace("/home");
						} else {
							this.getCaptcha();
							// this.$message.error("请重新输入");
						}
					});
				} else {
					this.loading = false;
					//this.$message.error("请输入所有字段");
					return false;
				}
			});
		},
		// 获取验证码
		getCaptcha() {
			this.loginForm.uuid = getUUID();
			this.captchaUrl = "/captcha.jpg?uuid=" + this.loginForm.uuid;
		},
	},
	created() {
		this.getCaptcha();
	},
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
.el-form-item__content {
	display: flex;
	align-items: center;
}
</style>
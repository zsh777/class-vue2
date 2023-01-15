<template>
  <div :xl="6" :lg="7" class="bg-login">
    <!-- <el-image :src="require('@/assets/image/logo.png')" class="logo" /> -->
    <el-row type="flex" class="row-bg row-two" justify="center" align="middle">
      <el-col :span="6"></el-col>
      <el-col :span="6">
        <h1 class="title">百家课堂</h1>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <el-row type="flex" class="row-bg card" justify="center" align="bottom">
      <el-col :span="7" class="login-card">
        <!--loginForm-->
        <el-form
          :model="loginForm"
          :rules="rules"
          ref="loginForm"
          label-width="21%"
          class="loginForm"
        >
          <el-form-item label="账号" prop="login" style="width: 380px">
            <el-input v-model="loginForm.login"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" style="width: 380px">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code" style="width: 380px">
            <el-input
              v-model="loginForm.code"
              class="code-input"
              style="width: 50%; float: left"
            ></el-input>
            <div @click="refreshCode">
              <!--验证码组件-->
              <SIdentify :identifyCode="identifyCode"></SIdentify>
            </div>
          </el-form-item>
          <!-- <el-form-item label="记住我" prop="remember">
            <el-switch v-model="loginForm.remember"></el-switch>
          </el-form-item> -->
          <el-form-item class="btn-ground">
            <el-button
              type="primary"
              @click="submitForm('loginForm')"
              style="margin-left: -50px"
              >登录</el-button
            >
            <el-button @click="resetForm('loginForm')">重置</el-button>
          </el-form-item>
          <router-link to="/register" class="zc"
            >没有账号 立即注册？</router-link
          >
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import SIdentify from '@/components/canvas/canvas.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'loginVue',
  components: {SIdentify},
  data() {
    var checkYzm = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else {
        if (this.identifyCode !== this.loginForm.code) {
          callback(new Error('请输入正确的验证码'))
        }
        callback()
      }
    }
    return {
      identifyCode: '',
      identifyCodes: '1234567890abcdefghijklmnopqrstuvwxyz', //从这里随机抽几个显示验证码
      loginForm: {
        login: '18339224213',
        password: '123456',
        code: '',
        codeToken: ''
      },
      rules: {
        login: [{require: true, message: '请输入账号', trigger: 'blur'}],
        password: [{require: true, message: '请输入密码', trigger: 'blur'}],
        code: [{validator: checkYzm, trigger: 'blur'}]
      }
    }
  },
  mounted() {
    this.identifyCode = ''
    //参数：（1）随机串内容。（2）验证码显示位数
    this.makeCode(this.identifyCodes, 4)
  },
  methods: {
    ...mapMutations(['setToken']),
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) return
        const {data: res} = await this.$axios.post('/user', this.loginForm)
        if (res.meta.status !== 200) {
          // console.log(res)
          return this.$message.error('用户名或密码错误')
        }
        // let loginForm = new FormData()
        // console.log('loginForm', loginForm)
        // loginForm.append('login', this.loginForm.login)
        // loginForm.append('password', this.loginForm.password)
        // console.log(loginForm.getAll('password'), loginForm.getAll('login'))
        // console.log(res, 777, res.token, this.loginForm.password)
        // this.token = 'Bearer' + res.token.token
        // console.log(this.token)
        // this.setToken = {token: this.token}
        // console.log(this.setToken)
        this.$router.push('/main')
        this.$message.success('登录成功')
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // 重置验证码
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    //获取验证码的值
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
      }
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    }
  },
  created() {}
}
</script>
<style scoped>
.bg-login {
  height: 100%;
  background-image: url('../assets/img/1.gif');
  background-size: 200%;
}

.btn-ground {
  text-align: center;
}

.logo {
  margin: 30px;
  height: 70px;
  width: 70px;
  position: fixed;
}

.title {
  text-shadow: -3px 3px 1px #5f565e;
  text-align: center;
  margin-top: 20%;
  color: #41b9a6;
  font-size: 40px;
}

.login-card {
  background-color: #ffffff;
  opacity: 0.9;
  box-shadow: 0 0 20px #ffffff;
  border-radius: 10px;
  padding: 40px 40px 30px 15px;
  width: auto;
}
</style>

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
          <el-form-item
            label="确认密码"
            prop="checkPassword"
            style="width: 380px"
          >
            <el-input
              type="password"
              v-model="loginForm.checkPassword"
            ></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="loginForm.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="职业" prop="career">
            <el-radio-group v-model="loginForm.career">
              <el-radio label="学生"></el-radio>
              <el-radio label="教师"></el-radio>
              <el-radio label="其他"></el-radio>
            </el-radio-group>
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
          <el-form-item class="btn-ground">
            <el-button
              type="primary"
              @click="register('loginForm')"
              style="margin-left: -50px"
              >注册</el-button
            >
            <el-button @click="resetForm('loginForm')">重置</el-button>
          </el-form-item>
          <router-link to="/" class="zc">已有账号 立即登录？</router-link>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import SIdentify from '@/components/canvas/canvas.vue'
export default {
  name: 'loginVue',
  components: {SIdentify},
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
    }
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
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.loginForm.checkPassword !== '') {
          this.$refs.loginForm.validateField('checkPassword')
        }
        callback()
      }
    }
    var validatePassword2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.loginForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      identifyCode: '',
      identifyCodes: '1234567890abcdefghijklmnopqrstuvwxyz', //从这里随机抽几个显示验证码
      loginForm: {
        login: '',
        password: '',
        code: '',
        checkPassword: '',
        remember: false,
        codeToken: '',
        sex: '',
        carrer: ''
      },
      rules: {
        login: [
          {require: true, message: '请输入账号', trigger: 'blur'},
          {min: 7, max: 20, message: '长度在7到20个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, validator: validatePassword, trigger: 'blur'}
        ],
        code: [{validator: checkYzm, trigger: 'blur'}],
        checkPassword: [
          {required: true, validator: validatePassword2, trigger: 'blur'}
        ],
        career: [{message: '选择你的职业', trigger: 'change'}],
        sex: [{message: '请选择性别', trigger: 'change'}]
      }
    }
  },
  mounted() {
    this.identifyCode = ''
    //参数：（1）随机串内容。（2）验证码显示位数
    this.makeCode(this.identifyCodes, 4)
  },
  methods: {
    register(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('注册成功')
        } else {
          alert('请按照规定注册')
          return false
        }
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

<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main class="login_content">
      <el-row>
        <el-col :span="16">
          content_left
        </el-col>
        <el-col :span="4">
          <el-tabs v-model="activeName" @tab-click="handleTabs" class="login_tabs" type="card">
            <el-tab-pane label="登录" name="login">
              <el-form :model="loginForm" ref="loginForm" :rules="loginRules">
                <el-form-item label="用户名" prop="username">
                  <el-input type="text" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                  <el-input type="password" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="验证码" prop="verification">
                  <el-input type="text" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary">登录</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="注册" name="register">
              <el-form :model="registerForm" ref="registerForm" :rules="registerRules">
                <el-form-item label="用户名" prop="username">
                  <el-input type="text" v-model="registerForm.username" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="邮箱" prop="email">
                  <el-input type="text" v-model="registerForm.email" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="registerForm.password" auto-compltet="off"></el-input>
                </el-form-item>

                <el-form-item label="确认密码" prop="confirm">
                  <el-input type="password" v-model="registerForm.confirm" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="验证码" prop="verification">
                  <el-input type="text" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary">注册</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  components: {
  },
  data () {
    const checkEmail = (rule, value, callback) => {
      if (!value){
        callback(new Error('邮箱不能为空'))
      }
    };
    const checkPassWord = (rule, value, callback) => {
      if(value === ''){
        callback(new  Error('请输入密码'))
      } else {
        if (this.registerForm.password !== '') {
          this.$refs.registerForm.validateField('password')
        }
        callback()
      }
    };

    const checkConfirm = (rule, value, callback) => {
      if( value === ''){
        callback(new Error('请再输入密码'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback();
      }
    };
    return {
      activeName:'login',
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        password: '',
        confirm: ''
      },
      loginRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur' },
          {min:3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      registerRules: {
        username: [
          {required: true, message: '请输入用户名',trigger: 'blur'},
          { min:6, max:8, message: '长度在 6 到 8 个字符', trigger:'blur'}
        ],
        email: [
          {required: true, message: '请输入邮箱', trigger: 'blur'}
        ],
        password: [
          {
            required: true, validator: checkPassWord, trigger:'blur'
          }
        ],
        confirm: [
          {
            required: true, validator: checkConfirm, trigger:'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleTabs(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>


<style scoped>
  .el-header{
    background-color: #20a0ff;
    height: 60px;
    line-height: 60px;
    color: #ffffff;
  }
  .el-footer{
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 60px;
    line-height: 60px;
    color: #ffffff;
    background-color: #20a0ff;
  }
  .login_tabs{
    border: 1px solid #eeeeee;
    padding: 8px;
    border-radius: 10px;
  }
 #tab-login, #tab-register{
   width: 100%;
 }


</style>

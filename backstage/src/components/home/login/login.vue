<!--
 * @Author: huangqp
 * @Date: 2020/9/2 4:20 下午
 * @LastEditors: Please set LastEditors
 * @Description: 登录页面
 * @FilePath: backstage/src/components/home/login/login.vue
-->
<template>
  <div id="login">
<!--    头部说明-->
    <el-row class="content">
      <el-col>
        <el-row class="header-explanation">
          <el-col class="title">vueAdmin</el-col>
          <el-col class="explanation">模仿layui后台管理系统创作</el-col>
        </el-row>
        <!--    账号密码验证码输入框-->
        <el-row type="flex" justify="center">
          <el-col :span="6">
            <el-form :model="userNamePassword">
              <el-form-item>
                <el-autocomplete prefix-icon="iconfont iconyonghu" style="width: 100%" v-model = "userNamePassword.userName" :fetch-suggestions="querySearch"></el-autocomplete>
              </el-form-item>
              <el-form-item>
                <el-input  prefix-icon="iconfont iconsuo" v-model = "userNamePassword.password" show-password></el-input>
              </el-form-item>
              <el-form-item>
                <el-col :span="12">
                  <el-input prefix-icon="iconfont iconyanzhengma" v-model = "userNamePassword.captcha" placeholder="图形验证码"></el-input>
                </el-col>
                <el-col :span="9" :offset="3">
                  <el-image
                    style="width: 100%"
                    :src="url"
                    ></el-image>
                </el-col>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <!--    记住密码，忘记密码-->
        <el-row type="flex" justify="center">
          <el-col :span="6">
            <el-form>
              <el-form-item>
                <el-col :span="12">
                  <el-checkbox v-model="rememberPassword" @change="checkboxRememberPassword">记住密码</el-checkbox>
                </el-col>
                <el-col :span="12" class="forgetPassword">
                  <el-button type="text">忘记密码？</el-button>
                </el-col>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <!--    登录按钮-->
        <el-row type="flex" justify="center">
          <el-col :span="6">
            <el-button type="primary" class="loginBtn" @click="loginSystem">登入</el-button>
          </el-col>
        </el-row>
        <!--    第三方登录，注册账号-->
        <el-row type="flex" justify="center" class="third-register">
          <el-col :span="6">
            <el-form>
              <el-form-item>
                <el-col :span="12">
                  <el-form-item label="社交账号登入" >
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconweixin1"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#iconQQ"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#iconweibo"></use>
                    </svg>
                  </el-form-item>
                </el-col>
                <el-col :span="12" class="forgetPassword">
                  <el-button type="text">注册账号</el-button>
                </el-col>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-col>
    </el-row>



    <el-row class="footer-style">
      <el-container>
        <el-footer>
          <el-row type="flex" justify="center">
            <el-col :span="1">
              2020
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="1">
              2020
            </el-col>
          </el-row>
        </el-footer>
      </el-container>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      userNamePassword:{//用户名，密码，验证码绑定的值
        userName:"",//用户名
        password:"",//密码
        captcha:"",//验证码
        userNamePasswordArr:[]
      },
      rememberPassword:false,//记住密码
      url:"https://www.oschina.net/action/user/captcha"//验证码图片路径
    };
  },
  methods:{
    /**
     * @description: 登录
     * @param {type}
     * @return {type}
     */
    loginSystem(){
      // axios({
      //   method:post,
      //   url:"",
      //   data:this.userNamePassword,
      // }).then((res)=>{
      //   console.log(res)
      // }).error((res)=>{
      //   console.log(res)
      // })
      if(this.userNamePassword.userName=='huangqp'&&this.userNamePassword.password=='123'){
        alert('登陆成功')
        if(this.rememberPassword){
          let obj = {
            value: this.userNamePassword.userName,
            address: this.userNamePassword.password
          };
          this.userNamePassword.userNamePasswordArr.push(obj)
        }
      }else{
        alert('登录失败')
      }
    },
    /**
     * @description: 记住密码
     * @param {boolean} val 复选框的值
     * @return {type}
     */
    checkboxRememberPassword(val){
      alert(val)
    },
    /**
     * @description: 依据用户名输入内容进行查找
     * @param {string} queryString 输入的内容
     *  @param {function} cb 回调函数
     * @return {type}
     */
    querySearch(queryString, cb) {
      let userNamePasswordArr = this.userNamePassword.userNamePasswordArr;
      let results = queryString ? userNamePasswordArr.filter(this.createFilter(queryString)) : userNamePasswordArr;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    /**
     * @description: 查找输入内容是否在库中
     * @param {string} queryString 用户名输入的内容
     * @return {function} 返回一个函数
     */
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
  }
};
</script>
<style scoped>
/*页面整体样式设置居中*/
#login{
  height: 100%;
}
/*中间主要内容*/
.content{
  position: relative;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
}
/*头部说明*/
.header-explanation{
  padding-bottom: 30px;
}
/*头部*/
.title{
  text-align: center;
  font-size: 32px;
}
/*说明*/
.explanation{
  text-align: center;
  font-size: 14px;
  color: #cccccc;
}
/*忘记密码*/
.forgetPassword{
  text-align: right;
}
/*登录按钮*/
.loginBtn{
  width: 100%;
}
/*第三方和注册账号*/
.third-register{
  margin-top: 20px;
}
/*底部*/
.footer-style{
position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.icon {
  width: 2em;
  height: 2em;
  vertical-align: 10em;
  fill: currentColor;
  overflow: hidden;
}
</style>

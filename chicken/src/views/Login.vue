<template>
  <div id="login-wrapper" className="png_bg">
    <div class="login-top">
      <h1>欢迎</h1>
    </div>
    <div class="login-content">
      <!-- <form action=""> -->
      <p class="new-box">
        <label>Username：</label>
        <input
          className="text-input"
          type="text"
          name="username"
          id="username"
          v-model="username"
        />
      </p>
      <p class="new-box">
        <label>Password：</label>
        <input
          className="text-input"
          type="password"
          name="password"
          id="password"
          v-model="password"
        />
      </p>
      <p class="remember-password"><input type="checkbox" />保存密码</p>
      <button id="btnLogin" @click="userLogin()">登录</button>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import bus from '@/bus';
import $ from 'jquery';
export default {
  data() {
    return {
        username:'',
        password:''
    };
  },
  /* created(){
      bus.$emit("TabbarShow", false);
  }, */
  methods: {
    userLogin() {
      this.$axios
        .post("http://localhost:1234/login",{username:this.username,password:this.password})
        .then((res) => {
          console.log(res.data);
          if(res.data){
              bus.$emit("TabbarShow", true);
              localStorage.setItem("userID",res.data[0].id)
              localStorage.setItem("userSEX",res.data[0].sex)
              this.$router.push('/content')
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    /* userLogin(){
      $(function(){
        var list = {username:this.username,password:this.password};

        $.ajax({
          type: "POST",
          contentType: "application/json;charset=UTF-8",
          // 请求地址
          url: "http://localhost:8888/login",
          data:JSON.stringify(list),
          success: function(result){
            console.log("result:",result);
          },
          error: function(e){
            console.log("status:",e.status);
            console.log("responseText:",e.responseText);
          }
        });
      });
    } */
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
#login-wrapper {
  color: black;
  font-size: 3vw;
  .login-top {
    width: 100%;
    padding: 140px 0 50px 0;
    text-align: center;
    h1 {
      font-size: 30px;
      top: 80px;
      width: 100%;
      text-align: center;
    }
  }
  .login-content {
    text-align: left;
    width: 300px;
    margin: 0 auto;
    .new-box {
      height: 30px;
      display: block;
      margin: 10px 0;

      label {
        color: black;
        font-weight: normal;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        float: left;
        width: 70px;
        padding: 0;
      }
      input {
        width: 200px;
        float: right;
        margin: 0 0 10px 0;
        background: #fff;
      }
    }
    .remember-password {
      float: left;
      font-size: 15px;
      input {
        float: none;
        width: 25px;
        background: none;
      }
    }
    #btnLogin {
      width: 200px;
      border-radius: 5px;
      float: right;
      &:hover {
        background-color: skyblue;
      }
    }
  }
}
.clear {
  clear: both;
}
</style>
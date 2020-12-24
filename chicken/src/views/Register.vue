<template>
  <div id="register-wrapper">
    <div class="login-top">
      <h1>欢迎</h1>
    </div>
    <div class="login-content">
      <!-- <form action=""> -->
      <!-- username -->
      <li class="new-box">
        <input
          type="text"
          name="username"
          id="textUsername"
          placeholder="Please input Username"
          v-model="username"
        /><i
          v-if="!username"
          class="iconfont icon-asterisks-1-copy warning"
        ></i>
      </li>
      <!-- password -->
      <li class="new-box">
        <input
          type="password"
          name="password"
          id="textPassword"
          placeholder="Please input Password"
          v-model="password"
        /><i
          v-if="!password"
          class="iconfont icon-asterisks-1-copy warning"
        ></i>
      </li>
      <!-- again password -->
      <li class="new-box">
        <input
          type="password"
          name="againpassword"
          id="textPassword"
          placeholder="Please input password again"
          v-model="againpassword"
        /><i
          v-if="!againpassword"
          class="iconfont icon-asterisks-1-copy warning"
        ></i>
        <span v-show="judgepassword()" class="create-tips"
          >两次密码输入不一致</span
        >
      </li>
      <!-- phone -->
      <li class="new-box">
        <input
          type="phone"
          name="phone"
          id="textPhone"
          placeholder="Please input Phone"
          v-model="phone"
        /><i v-if="!phone" class="iconfont icon-asterisks-1-copy warning"></i>
        <span v-show="judgephone()" class="create-tips"
          >输入手机格式不正确</span
        >
      </li>
      <!-- age -->
      <li class="new-box">
        <input
          type="age"
          name="age"
          id="textAge"
          placeholder="Please input Age in 16-59"
          v-model="age"
        /><i v-if="!age" class="iconfont icon-asterisks-1-copy warning"></i>
        <span v-show="judgeage()" class="create-tips">年龄不符合要求</span>
      </li>
      <div class="user-sex">
        <i v-if="!sex" class="iconfont icon-asterisks-1-copy warning-sex"></i>
        性别:
        <label
          ><input
            type="radio"
            name="sex"
            value="男士"
            v-model="sex"
          />男士</label
        >
        <label
          ><input
            type="radio"
            name="sex"
            value="女士"
            v-model="sex"
          />女士</label
        >
      </div>
      <button id="btnLogin" @click="createNewUser">注册</button>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import bus from '@/bus'
export default {
  data() {
    return {
      sex: "",
      username: "",
      password: "",
      againpassword: "",
      phone: "",
      age: "",
    };
  },
  methods: {
    createJudge() {
      return this.judgepassword() && this.judgephone() && this.judgeage();
    },
    judgepassword() {
      return (
        this.password != this.againpassword &&
        this.password != "" &&
        this.againpassword != ""
      );
    },
    judgephone() {
      return this.phone.length != 11 && this.phone != "";
    },
    judgeage() {
      return (this.age > 60 || this.age < 15) && this.age != "";
    },
    createNewUser() {
      if (!this.createJudge()) {
        console.log("调用axios插入用户数据...");
        this.$axios
          .post("http://localhost:1234/register", {
            username: this.username,
            password: this.password,
            sex: this.sex,
            phone: this.phone,
            age: this.age,
          })
          .then((res) => {
            console.log("create : res.data",res.data)
            if(res.data.insertId){
              bus.$emit("TabbarShow", true);
              localStorage.setItem("userID",res.data[0].id)
              localStorage.setItem("userSEX",res.data[0].sex)
              this.$router.push('/content')
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
#register-wrapper {
  width: 100%;
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
    margin: 0 auto;
    .new-box {
      position: relative;
      height: 50px;
      display: block;
      margin-top: 1vw;
      input {
        width: 50vw;
        height: 50%;
        position: absolute;
        top: 0;
        margin-left: 50%;
        transform: translateX(-50%);
        background: #fff;
      }
      .create-tips {
        font-size: 12px;
        color: #e32a05;
        position: absolute;
        left: 48%;
        transform: translateX(-50%);
        bottom: 0;
      }
    }
    .user-sex {
      font-size: 0.2vw;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    #btnLogin {
      width: 200px;
      border-radius: 5px;
      margin-left: 50%;
      transform: translateX(-50%);
      &:hover {
        background-color: skyblue;
      }
    }
  }
}
.warning {
  color: #e32a05;
  position: absolute;
  left: 16vw;
  top: 0.1vw;
}
.warning-sex {
  color: #e32a05;
}
.clear {
  clear: both;
}
</style>
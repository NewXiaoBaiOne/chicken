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
          id="textUsername"
        />
      </p>
      <p class="new-box">
        <label>Password：</label>
        <input
          className="text-input"
          type="password"
          name="password"
          id="textPassword"
        />
      </p>
      <button id="btnLogin">注册</button>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
export default {
    
}
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
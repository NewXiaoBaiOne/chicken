<template>
  <div class="userinfor">
    <!-- 头部内容 -->
    <section class="hander">
      <div class="hander-box">
        <div class="hander-left">
          <img v-if="userId" :src="userImg" alt="" />
          <img v-else src="https://s3.ax1x.com/2020/12/19/rtXirj.jpg" alt="" />
        </div>
        <div class="hander-right">
          <div class="my-information">
            <b v-if="userId">{{ userName }}</b>
            <b v-else
              ><router-link to="/user/login" tag="li">登录/</router-link
              ><router-link to="/user/register" tag="li">注册</router-link></b
            >
            <span v-if="userId" class="iconfont icon-shouji">{{
              uservayuePhone(userPhone)
            }}</span>
            <span v-else class="iconfont icon-shouji">********</span>
          </div>
          <div
            v-if="userId"
            class="iconfont information-arrow icon-iconfontjiantou5"
          ></div>
        </div>
      </div>
    </section>

    <!-- 中部内容 -->
    <section class="content">
      <section class="content1">
        <a class="redpackage">
          <span class="redpackage-num">
            <b v-if="userId">{{ userRed }}</b>
            <b v-else>0</b>
            个</span
          >
          <span class="redpackage-write">红包</span>
        </a>
        <a class="goldcoin">
          <span class="goldcoin-num">
            <b v-if="userId">{{ userGold }}</b>
            <b v-else>0</b>
            个</span
          >
          <span class="goldcoin-write">金币</span>
        </a>
      </section>
      <section class="content3">
        <ul>
          <router-link to="/user/order" tag="li">
            <span class="iconfont icon-74wodedingdan address"></span>订单信息
            <i class="iconfont icon-iconfontjiantou5 information-arrow"></i>
          </router-link>
          <router-link to="/user/where" tag="li">
            <span class="iconfont icon-dizhi address"></span>我的地址
            <i class="iconfont icon-iconfontjiantou5 information-arrow"></i>
          </router-link>
          <router-link to="/user/coin" tag="li">
            <span class="iconfont icon-lujing134 shopping"></span>金币商城
            <i class="iconfont icon-iconfontjiantou5 information-arrow"></i>
          </router-link>
          <router-link to="/user/server" tag="li">
            <span class="iconfont icon-kefu service"></span>我的客服
            <i class="iconfont icon-iconfontjiantou5 information-arrow"></i>
          </router-link>
          <router-link to="/user/rule" tag="li">
            <span class="iconfont icon-guize rule"></span>规则中心
            <i class="iconfont icon-iconfontjiantou5 information-arrow"></i>
          </router-link>
        </ul>
      </section>
      <section class="content4">隐私政策</section>
    </section>
  </div>
</template>

<script>
import bus from "@/bus";
export default {
  data() {
    return {
      userId: 0,
      userName: "Alix",
      userPhone: 12345678912,
      userImg: "https://s3.ax1x.com/2020/12/19/rtLynA.jpg",
      userGold: 0,
      userRed: 0,
      /* userData: {
        id: 0,
        userName: "Xxx",
        userPhone: "***********",
        userImg: "https://s3.ax1x.com/2020/12/19/rtLynA.jpg",
        userGold: 0,
        userRed: 0,
      }, */
      img: [
        "https://s3.ax1x.com/2020/12/19/rtLj9U.jpg",
        "https://s3.ax1x.com/2020/12/19/rtXirj.jpg",
      ],
    };
  },
  mounted() {
    bus.$on("LoginNews", (data) => {
      // this.userData.id = data.id;
      this.userId = 1;
      // this.userData.userName = data.username
      // this.userData.password = data.password
      console.log("LoginNews:", data);
      console.log("userId:", this.userId);
    });
  },
  methods: {
    uservayuePhone(data) {
      let newdata = data.toString().split(""); //number转化为数组
      let newstring = "";
      // newdata.map(Number)       //数组数组
      for (let i = 0; i < newdata.length; i++) {
        if (i > 2 && i < 7) {
          newstring += "*";
        } else {
          newstring += newdata[i];
        }
      }
      return newstring;
    },
  },
};
</script>

<style lang="less" scoped>
.hander-box {
  width: 95%;
  height: 75%;
  margin: 0 auto;
  .hander-left {
    height: 0.65rem;
    width: 0.65rem;
    margin-top: 0.2rem;
    float: left;
    img {
      height: 0.65rem;
      width: 0.65rem;
      border-radius: 50%;
    }
  }
  .hander-right {
    height: 0.6rem;
    width: 2.5rem;
    margin-top: 0.25rem;
    float: right;
    .my-information {
      height: 0.6rem;
      width: 2.3rem;
      display: flex;
      flex-direction: column;
      b {
        color: #fff;
        display: block;
        font-size: 6vw;
        font-size: 0.2rem;
        li {
          float: left;
          list-style: none;
        }
      }
      span {
        color: #fff;
        display: block;
        // float: left;
        font-size: 3vw;
        font-size: 0.12rem;
        margin-top: 0.1rem;
      }
    }
    .information-arrow {
      height: 0.2rem;
      width: 0.1rem;
      color: #fff;
      font-size: 0.12rem;
      margin-top: 0.2rem;
      float: right;
    }
  }
}
.content1 {
  width: 100%;
  height: 0.9rem;
  a {
    width: 49.8%;
    height: 100%;
    font-size: 0.1rem;
    text-align: center;
    display: block;
    float: left;
    background-color: #fff;
    span {
      color: #666;
      font-weight: 800;
      display: block;

      b {
        font-size: 0.25rem;
      }
    }
    :first-child {
      margin-top: 6vw;
    }
  }
  .redpackage-num {
    color: red;
  }
  .goldcoin-num {
    color: rgb(106, 194, 11);
    border-left: 0.01rem solid #eee;
  }
}
.content {
  .content3 {
    li {
      width: 90%;
      margin: 0 auto;
      margin-top: 0.1rem;
      line-height: 0.4rem;
      font-size: 0.12rem;
      border-bottom: 0.1vw solid #ccc;
      i {
        float: right;
      }
    }
    li:first-child {
      margin-top: 20vw;
    }
    .address {
      width: 0.4rem;
      height: 0.4rem;
      font-size: 0.2rem;
      display: block;
      float: left;
      text-align: center;
      color: rgb(74, 165, 240);
      line-height: 0.4rem;
    }
    .shopping {
      width: 0.4rem;
      height: 0.4rem;
      font-size: 0.2rem;
      display: block;
      float: left;
      text-align: center;
      color: rgb(148, 217, 74);
      line-height: 0.4rem;
    }
    .service {
      width: 0.4rem;
      height: 0.4rem;
      font-size: 0.2rem;
      display: block;
      float: left;
      text-align: center;
      color: rgb(74, 165, 240);
      line-height: 0.4rem;
    }
    .download {
      width: 0.4rem;
      height: 0.4rem;
      font-size: 0.2rem;
      display: block;
      float: left;
      text-align: center;
      color: rgb(74, 165, 240);
      line-height: 0.4rem;
    }
    .rule {
      width: 0.4rem;
      height: 0.4rem;
      font-size: 0.2rem;
      display: block;
      float: left;
      text-align: center;
      color: rgb(74, 165, 240);
      line-height: 0.4rem;
    }
  }
  .content4 {
    width: 100%;
    margin-top: 0.4rem;
    font-size: 0.12rem;
    color: #4da6f0;
    text-align: center;
  }
}
</style>
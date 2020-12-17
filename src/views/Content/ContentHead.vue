<template>
  <div id="content-contenthead">
    <div class="conthead-bg"></div>
    <div class="logo-box">
      <img src="../../static/img/content-logo.jpg" alt="" />
    </div>
    <div class="conthead-content">
      <div class="businssnews">
        <h3>湖南小碗菜<i class="iconfont icon-you"></i></h3>
        <ul class="businssnews-news">
          <li>评价4.4</li>
          <li>月售8888单</li>
          <li>蜂鸟快送约31分钟</li>
        </ul>
      </div>
      <div class="discount">
        <ul class="full-reduce">
          <li v-for="data in reducelist" :key="data.full">
            {{ data.full }}减{{ data.reduce }}
          </li>
        </ul>
        <div class="discont-d">
          <span>2个优惠
            <i class="iconfont icon-xia"></i>
          </span>
        </div>
      </div>
        <p class="notice">
          公告：一份关怀️ 湖南小碗菜欢迎您的每一次光临！！！
          如若用餐满意，请给我们五星评价⭐️⭐️⭐️⭐️⭐️ 拜托谢谢
          如有急事请拨打18664403372！
        </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reducelist: [
        {
          full: 15,
          reduce: 1,
        },
        {
          full: 18,
          reduce: 2,
        },
        {
          full: 25,
          reduce: 5,
        },
        {
          full: 30,
          reduce: 8,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
#content-contenthead {
  width: 100%;
  .conthead-bg {
    width: 100%;
    height: 26vw;
    background: url(../../static/img/conthead-bg.webp) no-repeat;
    background-size: 100%;
    &::before {
      content: "";
      height: 26vw;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-image: linear-gradient(
        0deg,
        hsla(0, 0%, 100%, 0),
        rgba(0, 0, 0, 0.5)
      );
    }
  }
  .logo-box {
    width: 2rem;
    width: 20vw;
    height: 2rem;
    height: 20vw;
    position: absolute;
    left: 50%;
    top: 10vw;
    transform: translateX(-50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.8vw;
      box-shadow: 0 0 0.04rem 0 rgba(0, 0, 0, 0.2);
      box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);
    }
  }
}
.conthead-content {
  width: 80%;
  height: 50%;
  margin: 0 auto;
  margin-top: 5vw;
  .businssnews {
    flex: 1;
    width: 72vw;
    margin: 0 auto;
    h3 {
      font-size: 5.4vw;
      font-weight: 700;
      white-space: nowrap;
      position: relative;
      padding-right: 2.66vw;
      display: flex;
      align-items: center;
      justify-content: center;
      i{
        font-size: 3.4vw;
        line-height: 10vw;
      }
    }
    .businssnews-news {
      white-space: nowrap;
      height: 3.2vw;
      font-size: 2.93vw;
      li {
        float: left;
        margin: 0 1vw;
      }
    }
  }
  .discount {
    display: flex;
    color: #333;
    margin: 3.2vw auto 0;
    align-items: center;
    .full-reduce {
      width: 75%;
      overflow: hidden;
      height: 5.33vw;
      li {
        width: 10vw;
        font-size: 2.5vw;
        color: rgb(255, 75, 51);
        text-align: center;
        border: 1px solid rgb(255, 201, 193);
        margin: 0.66vw;
        display: inline-block;
      }
    }
    .discont-d{
        width: 18.2vw;
        font-size: 2.5vw;
        flex-shrink: 0;
        position: relative;
        padding-right: 2.99vw;
        text-align: right;
        color: #999;
        i{
          font-size: 2.5vw;
          float: right;
          line-height: 5vw;
        }
    }
  }
  .notice{
      width: 80vw;
      margin-top: 2vw;
      font-size: 2.4vw;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
}
</style>
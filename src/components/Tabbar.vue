<template>
  <div id="main-nai">
    <ul>
      <router-link to="/content" tag="li" active-class="myNaiactive"
        ><i class="iconfont icon-fangjian"></i><a>首页</a></router-link
      >
      <router-link
        to="/carbuy"
        tag="li"
        active-class="myNaiactive"
        :class="isShowcar ? 'isShowCar' : ''"
        ><i class="iconfont icon-gouwuche"></i><p v-if="isShowcar" class="carnumber">{{isShowcar}}</p><a>购物车</a></router-link
      >
      <router-link to="/user" tag="li" active-class="myNaiactive"
        ><i class="iconfont icon-renyuan"></i><a>主页</a></router-link
      >
      <!-- <a href="/content" class="selectNai"><i class="iconfont icon-fangjian"></i></a>
        <a href="/"><i class="iconfont icon-gouwuche"></i></a>
        <a href="/"><i class="iconfont icon-renyuan"></i></a> -->
    </ul>
  </div>
</template>

<script>
import bus from "../bus";
export default {
  data() {
    return {
      isShowcar: 0
    };
  },
  mounted(){
      bus.$on("carShow",(data)=>{
          this.isShowcar = data;
          console.log("data:",data)
      })
  }
};
</script>

<style lang="less" scoped>
.myNaiactive {
  color: rgb(35, 149, 255);
}
.carnumber{
    position: fixed;
    font-size: 4vw;
    color: #dd6c2b;
    bottom: 7vw;
    left: 55vw;
}
#main-nai {
  width: 100%;
  height: 12vw;
  background: #fff;
  border-top: 0.1vw solid rgba(0, 0, 0, 0.1);
  position: fixed;
  opacity: 0.9;
  bottom: 0;
  ul {
    font-size: 3vw;
    margin-top: 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .isShowCar {
      color: #ff6000;
    }
  }
  i {
    font-size: 6vw;
    text-align: center;
    display: block;
  }
}
</style>
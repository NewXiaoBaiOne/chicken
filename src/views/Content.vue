<template>
  <div id="content">
    <contenthead class="content-head"></contenthead>
    <buyFunc class="content-func"></buyFunc>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import Vue from "vue";
import contenthead from "./Content/ContentHead";
import buyFunc from "./Content/BuyFunc";
import bus from "@/bus"
export default {
    data(){
        return{

        }
    },
  beforecreate(){
      bus.$emit("TabbarShow",true)
  },
  components: {
    contenthead,
    buyFunc,
  },
};
</script>
<style lang="less" scoped>
#content {
  background-color: #fff;
  .content-head {
    width: 100%;
    height: 60vw;
  }
  .content-func {
    width: 100%;
    height: 11.5vw;
  }
  .content-box {
    width: 100%;
    height: 50vw;
  }
}
</style>
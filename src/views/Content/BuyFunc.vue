<template>
  <div id="content-buyFunc">
      <ul :class="isFixed ? 'fixed' : ''">
        <!-- <li class="selectFunc">点餐</li>
            <li>评论</li>
            <li>商家</li> -->
        <router-link
          to="/content/choosefoods"
          ref="myFunc"
          tag="li"
          active-class="myNaiactive"
          >点餐</router-link
        >
        <router-link to="/content/evaluate" tag="li" active-class="myNaiactive"
          >评论</router-link
        >
        <router-link to="/content/business" tag="li" active-class="myNaiactive"
          >商家</router-link
        >
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    window.onscroll = this.handleScroll;
    window.contenttop = this.$refs.myFunc.$el.offsetHeight * 5.2;
  },
  methods: {
    handleScroll() {
      /* console.log(document.documentElement.scrollTop)
        console.log(window.contenttop) */
      if (document.documentElement.scrollTop >= window.contenttop) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
#content-buyFunc {
  border-bottom: 0.1vw solid rgba(0, 0, 0, 0.1);
  ul {
    width: 100%;
    li {
      font-size: 4.4vw;
      font-weight: 600;
      padding: 2.5vw 0;
      margin: 0 10vw;
      color: #666;
      float: left;
    }
  }
  .fixed {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
    background-color: white;
  }
}
.myNaiactive {
  border-bottom: 0.6vw solid rgb(35, 149, 255);
}
</style>
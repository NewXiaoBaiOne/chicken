<template>
  <div class="orderNews">
    <ul class="orderNews-box">
      <li v-for="data of orderlist" :key="data.order">
        <div class="order-content">
          <!-- 信息 -->
          <div class="order-imgs">
            <img v-if="data.goodsurl1" :src="data.goodsurl1" />
            <img v-if="data.goodsurl2" :src="data.goodsurl2" />
            <img v-if="data.goodsurl3" :src="data.goodsurl3" />
            <img v-if="data.goodsurl4" :src="data.goodsurl4" />
          </div>
          <!-- 订单管理 -->
          <div class="order-control">
            <button v-if="data.finish" class="btn-finish">完成</button>
            <button v-if="data.finish">申请退款</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: 0,
      orderlist: [],
      allgoodslist: [],
      myorderlist: [],
    };
  },
  created() {
    this.userId = localStorage.getItem("userID");
    this.$axios
      .post("http://localhost:1234/orderbuy", { userid: this.userId })
      .then((res) => {
        for (let list of res.data) {
          this.orderlist.push(list);
        }
        console.log("this is myorder:", this.orderlist);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped>
.orderNews{
    .orderNews-box{
        width: 90%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        margin-top: 3vw;
        padding-top: 3vw;
        border-radius: 2vw;
        background-color: #f4eed7;
        li{
            margin-bottom: 2vw;
        }
    }
}
.order-content{
    display: flex;
    flex-direction: row;
    .order-imgs{
        display: flex;
        flex-direction: row;
        margin-left: 3vw;
        img{
            width: 20vw;
            height: 20vw;
        }
    }
    .order-control{
        display: flex;
        flex-direction: column;
        padding-top: 2vw;
        margin-left: 5vw;
        button{
            margin-bottom: 1vw;
            background-color: skyblue;
        }
        .btn-finish{
            background-color: #d39156;
        }
    }
}

</style>
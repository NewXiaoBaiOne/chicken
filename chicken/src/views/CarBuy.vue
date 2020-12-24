<template>
  <div class="buycar-box">
    <div class="buycar">
      <div class="business-selled-num">
        <h4>湖南小碗菜</h4>
        <div class="sellednum-box">
          <span class="buycar-month-selled">月销售：{{ buysellednum() }}</span>
          <span class="buycar-givetime">时长：43分钟</span>
        </div>
      </div>
      <dd v-for="data in carDatalist" :key="data.id" class="buygoods-dd">
        <div v-if="data.buynumber" class="buycardata-dd-div">
          <span class="buycarimg-box"
            ><img :src="data.goodsurl" alt="data.buycarname"
          /></span>
          <section class="buycarnews-box">
            <p class="buycarnews-name">：{{ data.goodsname }}</p>
            <span class="buycarnews-price">￥{{ data.goodsprice }}</span>
            <div class="buycarnews-number">
              <a v-if="data.buynumber" @click="buycardel(data)"
                ><i class="iconfont icon-jianhao"></i
              ></a>
              <span v-if="data.buynumber">{{ data.buynumber }}</span>
              <a @click="buycaradd(data)"
                ><i class="iconfont icon-jiahao"></i
              ></a>
            </div>
          </section>
        </div>
      </dd>
      <div class="carbuy-lookprice">
        <span class="car-lookprice">包装费</span>
        <span class="car-lookpricenum">￥3</span>
      </div>
      <div class="buycar-footer">
        <div class="buy-discount">
          <span>已优惠：</span>
          <p>￥{{ disCount() }}</p>
        </div>
        <div class="buycar-buybox">
          <div class="buycar-buybox-left">
            <div class="buycar-buybox-top">
              <span>合计：</span>
              <p>￥{{ buycarspricesum2() }}</p>
            </div>
            <div class="buycar-buybox-bottom">
              <span>配送费：￥3</span>
            </div>
          </div>
          <div class="buycar-buybox-right">
            <button @click="tosell()">去结算</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="tobuyShow" class="controlBuy">
      <img @click="outTobuy()" class="out-img" src="https://s3.ax1x.com/2020/12/23/rcQYff.png" alt="退出">
      <div class="to-buy-box">
        <dd v-for="data in carDatalist" :key="data.id" class="buygoods-dd">
          <div v-if="data.buynumber" class="buycardata-dd-div">
            <span class="buycarimg-box"
              ><img :src="data.goodsurl" alt="data.buycarname"
            /></span>
            <section class="buycarnews-box">
              <p class="buycarnews-name">：{{ data.goodsname }}</p>
              <span class="buycarnews-price">￥{{ data.goodsprice }}</span>
              <div class="buycarnews-number">
                <a v-if="data.buynumber" @click="buycardel(data)"
                  ><i class="iconfont icon-jianhao"></i
                ></a>
                <span v-if="data.buynumber">{{ data.buynumber }}</span>
                <a @click="buycaradd(data)"
                  ><i class="iconfont icon-jiahao"></i
                ></a>
              </div>
            </section>
          </div>
        </dd>
        <div class="buycar-buybox-right">
          <button @click="toBuygoods()">付款</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "../bus";
export default {
  data() {
    return {
      userId: 0,
      tobuyShow:false,
      carDatalist: [],
      carDatalist2: [],
    };
  },
  created() {
    bus.$on("carData", (data) => {
      let newdatalist = [];
      for (let i of data) {
        this.carDatalist2.push(i);
        if (i.buynumber > 0) {
          newdatalist.push(i);
        }
      }
      this.carDatalist = newdatalist;
      this.userId = localStorage.getItem("userID")
      console.log("userID:", this.userId);
    });
    // console.log(new Date().getTime())      时间挫
    /* this.$axios
        .post("http://localhost:1234/origin/carbuy")
        .then((res) => {
          console.log(res.data);
          
        })
        .catch((err) => {
          console.log(err);
        }); */
  },
  methods: {
    clearbuy(){
      for(let i of this.carDatalist){
        i.buynumber = 0
      }
    },
    toBuygoods(){
      this.tobuyShow = false
      let newDlist = []
      for(let i of this.carDatalist){
        newDlist.push({id:i.id,buynumber:i.buynumber,goodurl:i.goodsurl})
      }
      let newDlength = this.carDatalist.length
      for(let i =newDlength;i<4;i++){
          newDlist.push({id:0,buynumber:0,url:null})
      }
      let buygoods = {
        userid:this.userId,
        goodsid1:newDlist[0].id,
        goodsnum1:newDlist[0].buynumber,
        goodsurl1:newDlist[0].goodurl,
        goodsid2:newDlist[1].id,
        goodsnum2:newDlist[1].buynumber,
        goodsurl2:newDlist[1].goodurl,
        goodsid3:newDlist[2].id,
        goodsnum3:newDlist[2].buynumber,
        goodsurl3:newDlist[2].goodurl,
        goodsid4:newDlist[3].id,
        goodsnum4:newDlist[3].buynumber,
        goodsurl4:newDlist[3].goodurl,
        finish:1,
        modify:0,
        refund:0
      }
      console.log("carDatalist:",this.carDatalist)
      console.log("newDlist:",newDlist)
      console.log("buygoods:",buygoods)
      this.$axios
          .post("http://localhost:1234/buygoods", buygoods)
          .then((res) => {
            console.log(res.data);
            if (res.data.protocol41) {
              this.clearbuy()
              this.$router.push("/content");
            }
          })
          .catch((err) => {
            console.log(err);
          });

    },
    tosell(){
      this.tobuyShow = true
    },
    outTobuy(){
      this.tobuyShow = false
    },
    disCount() {
      var discount = 0;
      let buypriceNew = this.buycarspricesum();
      if (buypriceNew >= 30) {
        buypriceNew = 8;
      } else if (buypriceNew >= 25) {
        buypriceNew = 5;
      } else if (buypriceNew >= 18) {
        buypriceNew = 2;
      } else if (buypriceNew >= 15) {
        buypriceNew = 1;
      }
      return buypriceNew;
    },
    buysellednum() {
      let sellednum = 0;
      for (let i of this.carDatalist2) {
        sellednum += i.goodsell;
      }
      return sellednum;
    },
    buycarspricesum() {
      var carsum = 0;
      for (let i of this.carDatalist) {
        carsum += i.buynumber * i.goodsprice;
      }
      return carsum;
    },
    buycarspricesum2() {
      let datasum = this.buycarspricesum() - this.disCount() + 3;
      if (datasum == 3) {
        return 0;
      } else return datasum;
    },
    buycaradd(data) {
      if (data.buynumber < 100) {
        data.buynumber++;
        console.log("buycarspricesum", this.buycarspricesum());
        // bus.$emit("carShow", this.buycarspricesum());
      } else {
        alert("购买过多，请注意数量");
      }
    },
    buycardel(data) {
      if (data.buynumber > 0) {
        data.buynumber--;
        console.log("buycarspricesum", this.buycarspricesum());
        // bus.$emit("carShow", this.buycarspricesum());
      } else {
        alert("购买为零，请注意数量");
      }
    },
  },
};
</script>
<style lang="less" scoped>
.buycar-box {
  width: 100%;
  // height: 100%;
  background-color: #f5f5f5;
}
.buycar {
  width: 95%;
  // height: 100%;
  // margin: 0 auto;
  position: absolute;
  top: 3vw;
  left: 2.5%;
  border-radius: 2vw;
  background-color: #fcfcfc;
  .business-selled-num {
    height: 10vw;
    width: 100%;
    background-color: #eee;
    h4 {
      font-size: 5vw;
      line-height: 6vw;
      font-weight: 800;
      margin-left: 3vw;
      margin-top: 2vw;
      display: block;
      float: left;
    }
    .sellednum-box {
      width: 50%;
      float: right;
      line-height: 6vw;
      margin-right: 3vw;
      margin-top: 2vw;
      .buycar-month-selled {
        float: left;
      }
      .buycar-givetime {
        float: right;
      }
    }
  }
}
.buygoods-dd {
  // height: 20vw;
  width: 95%;
  margin: 0 auto;
  .buycardata-dd-div {
    padding: 2.66vw 0;
    margin-bottom: 0.133vw;
    display: flex;
    min-height: 22.46vw;
    position: relative;
    .buycarimg-box {
      width: 21.33vw;
      height: 21.33vw;
      flex: none;
      display: block;
      margin-right: 2.66vw;
      position: relative;
      img {
        width: 100%;
        border-radius: 0.5vw;
      }
    }
    .buycarnews-box {
      flex: 1;
      position: relative;
      padding-right: 4vw;
      .buycarnews-name {
        position: relative;
        padding-right: 4vw;
        font-weight: 700;
        width: 40vw;
        font-size: 5vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .buycarnews-price {
        color: rgb(255, 83, 57);
        font-size: 5vw;
        position: absolute;
        bottom: 0;
        float: left;
      }
      .buycarnews-number {
        position: absolute;
        right: 5vw;
        bottom: 0;
        float: right;
        display: flex;
        font-size: 5.46vw;
        align-items: center;
        a {
          display: inline-block;
          vertical-align: middle;
          text-decoration: none;
          color: rgb(35, 149, 255);
          i {
            font-size: 5.46vw;
          }
        }
        span {
          margin: 0 2vw;
        }
      }
    }
  }
}
.carbuy-lookprice {
  height: 8vw;
  width: 95%;
  margin: 0 auto;
  border-top: 0.05vw solid #ccc;
  .car-lookprice {
    font-size: 3.5vw;
    line-height: 8vw;
    float: left;
  }
  .car-lookpricenum {
    font-size: 3.5vw;
    line-height: 8vw;
    float: right;
  }
}
.buycar-footer {
  height: 12vw;
  width: 95%;
  margin: 0 auto;
  .buy-discount {
    width: 30%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    span {
      font-size: 4vw;
      line-height: 11vw;
    }
    p {
      color: #ff5339;
      font-size: 4vw;
      line-height: 11vw;
    }
  }
  .buycar-buybox {
    width: 50%;
    height: 100%;
    float: right;
    .buycar-buybox-left {
      float: left;
      .buycar-buybox-top {
        display: flex;
        flex-direction: row;
        span {
          font-size: 4vw;
          line-height: 6vw;
        }
        p {
          color: #ff5339;
          font-size: 4vw;
          line-height: 6vw;
        }
      }
      .buycar-buybox-bottom {
        span {
          font-size: 4vw;
          line-height: 6vw;
        }
      }
    }
    .buycar-buybox-right {
      width: 20vw;
      height: 100%;
      float: right;
      button {
        width: 18vw;
        height: 70%;
        font-size: 4vw;
        font-weight: 700;
        color: #fff;
        margin-top: 2vw;
        border-radius: 4vw;
        border: 0;
        background-color: #0097ff;
      }
    }
  }
}
.controlBuy {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(19, 16, 16, 0.8);
  .out-img{
    width: 15vw;
    height: 15vw;
    position: absolute;
    right: 5vw;
    top: 5vw;
  }
  .to-buy-box {
    width: 80%;
    border-radius: 2vw;
    padding-bottom: 10vw;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    .buycar-buybox-right{
      button{
        width: 20vw;
        height: 8vw;
        border-radius: 2vw;
        border: .1vw solid #ccc;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        &:hover{
          background-color: skyblue;
        }
      }
    }
  }
}
</style>
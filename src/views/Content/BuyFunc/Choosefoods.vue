<template>
  <div id="cContentbox-choosefoods">
    <div class="promote-rotation">
      <swiper>
        <div class="swiper-slide" v-for="data in imglist" :key="data.id">
          <img :src="data.url" alt="" />
        </div>
      </swiper>
    </div>
    <div class="choosefoods-box">
      <div class="choosefoods-boxB">
        <div class="goodsnai-box">
          <ul class="cont-tab">
            <li
              v-for="data in datanailist"
              :key="data.type"
              @click="choicenai(data)"
            >
              <img
                v-if="data.img"
                src="../../../static/img/cont-list-fire.webp"
              /><span
                >{{ data.type }}
                <p v-if="data.number">{{ data.number }}</p>
              </span>
            </li>
          </ul>
        </div>

        <section class="cont-tab-content">
          <div class="tab-content">
            <dl>
              <dt>
                <div class="dt-content">
                  <p>热销</p>
                  <span>大家喜欢吃，才叫真好吃。</span>
                </div>
              </dt>
              <dd v-for="data in goodslist" :key="data.id">
                <div class="goodsdata-dd-div">
                  <span class="goodsimg-box"
                    ><img :src="data.goodsurl" alt="data.goodsname"
                  /></span>
                  <section class="goodsnews-box">
                    <p class="goodsnews-name">{{ data.goodsname }}</p>
                    <p class="goodsnews-material">
                      主要原料：{{ data.material }}
                    </p>
                    <p class="goodsnews-sellnew">
                      <span>月售：{{ data.goodsell }}</span>
                      <span>好评率100%</span>
                    </p>
                    <span class="goodsnews-price">￥{{ data.goodsprice }}</span>
                    <div class="goodsnews-number">
                      <a v-if="data.buynumber" @click="goodsdel(data)"
                        ><i class="iconfont icon-jianhao"></i
                      ></a>
                      <span v-if="data.buynumber">{{ data.buynumber }}</span>
                      <a @click="goodsadd(data)"
                        ><i class="iconfont icon-jiahao"></i
                      ></a>
                    </div>
                  </section>
                </div>
              </dd>
            </dl>
          </div>
        </section>
      </div>
    </div>

    <!-- <slot></slot> -->
  </div>
</template>
<script>
import swiper from "./Choosefoods/Swiper";
import bus from "../../../bus";
export default {
  components: { swiper },
  /* beforeMount(){
    // window.tatolnumber = 0;
    bus.$emit("carShow",0)
  },
  beforeDestroy(){
    bus.$emit("carShow",0)
  }, */

  created() {
    this.$axios
      .post("/content/origin/goodshouse")
      .then((res) => {
        console.log("商店菜品单：", res.data);
        // this.goodslist = res.data[0];
        for (let i of res.data) {
          //  初始化列表数据
          this.goodslist.push(i);
          this.goodslist2.push(i);
          //  初始化Nai列表数据
        }
        this.iniNai()
          this.updataNai();
        console.log("Goodslist:", this.goodslist);
        console.log("Goodslist2:", this.goodslist2);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      datanailist: [
        {
          img: true,
          type: "畅销",
          number: 0,
        },
        {
          img: false,
          type: "主食",
          number: 0,
        },
        {
          img: false,
          type: "杂食",
          number: 0,
        },
        {
          img: false,
          type: "蔬菜",
          number: 0,
        },
        {
          img: false,
          type: "肉食",
          number: 0,
        },
        {
          img: false,
          type: "套餐",
          number: 0,
        },
        {
          img: false,
          type: "饮料",
          number: 0,
        },
        {
          img: false,
          type: "酒水",
          number: 0,
        },
      ],
      goodslist2: [],
      goodslist: [],
      imglist: [
        {
          id: 1,
          url:
            "https://cube.elemecdn.com/e/d5/52ed15bdac40d96dd2e6a659ab0e1png.png?x-oss-process=image/format,webp/resize,w_686",
        },
        {
          id: 2,
          url:
            "https://cube.elemecdn.com/2/ff/711e9c4dbcc3ae4542d2af00ea948png.png?x-oss-process=image/format,webp/resize,w_686",
        },
        {
          id: 3,
          url:
            "https://cube.elemecdn.com/d/65/b5adb8ffdd75307eb267d55d3adf9png.png?x-oss-process=image/format,webp/resize,w_686",
        },
      ],
    };
  },
  mounted() {
    for (let i of this.goodslist) {
      this.goodslist2.push(i);
    }
  },
  activated() {
    this.iniNai();
    this.updataNai();
    bus.$emit("carShow", this.goodspricesum());
  },
  deactivated() {
    bus.$emit("carData", this.goodslist2);
    bus.$emit("carShow", 0);
  },
  methods: {
    remuveImg() {},
    choicenai(data) {
      let templist = [];
      for (let i of this.goodslist2) {
        if (data.type == i.goodsnai) {
          templist.push(i);
        }
      }
      this.goodslist = data.type == "畅销" ? this.goodslist2 : templist;
    },
    //  初始化Nai
    iniNai(){
      for (let addata of this.datanailist) {
            addata.number = 0;
        }
    },
    //  更新Nai
    updataNai() {
      for (let newdataList of this.goodslist2) {
        for (let addata of this.datanailist) {
          if (
            addata.type == newdataList.goodsnai &&
            newdataList.buynumber > 0
          ) {
            addata.number += newdataList.buynumber;
          }
        }
      }
    },
    goodspricesum() {
      var sum = 0;
      for (let i of this.goodslist) {
        sum += i.buynumber * i.goodsprice;
      }
      return sum;
    },
    goodsadd(data) {
      if (data.buynumber < 100) {
        data.buynumber++;
        for (let addata of this.datanailist) {
          // addata.number = addata.type ==data.goodsnai? addata.number++ : addata.number
          if (addata.type == data.goodsnai) {
            addata.number++;
          }
        }
        console.log("goodspricesum", this.goodspricesum());
        bus.$emit("carShow", this.goodspricesum());
      } else {
        alert("购买过多，请注意数量");
      }
    },
    goodsdel(data) {
      if (data.buynumber > 0) {
        data.buynumber--;
        for (let addata of this.datanailist) {
          // addata.number = addata.type ==data.goodsnai? addata.number++ : addata.number
          if (addata.type == data.goodsnai) {
            addata.number--;
          }
        }
        console.log("goodspricesum", this.goodspricesum());
        bus.$emit("carShow", this.goodspricesum());
      } else {
        alert("购买为零，请注意数量");
      }
    },
  },
};
</script>
<style lang="less" scoped>
#cContentbox-choosefoods {
  width: 100%;
  .promote-rotation {
    width: 90%;
    margin: 0 auto;
    img {
      width: 100%;
      height: 20vw;
    }
  }
  .choosefoods-box {
    height: 140vw;
    padding-bottom: 12.8vw;
    background-color: #fff;
    .choosefoods-boxB {
      height: 100%;
      display: flex;
      .goodsnai-box {
        overflow: auto;
        height: 100%;
        background-color: #f8f8f8;
        padding-bottom: 10.66vw;
      }
    }
  }
}

.cont-tab {
  // width: 20%;
  // height: 100%;
  flex: none;
  li:first-child {
    color: #333;
    background-color: #fff;
  }
  li {
    font-size: 4.2vw;
    position: relative;
    padding: 4.65vw;
    margin: 6vw 0;
    line-height: 80%;
    color: #666;
    img {
      float: left;
      width: 3.2vw;
      height: 3.2vw;
    }
    p {
      position: absolute;
      width: 4vw;
      height: 4vw;
      right: 0.8vw;
      top: 2vw;
      color: #fff;
      background-image: linear-gradient(-90deg, #ff7416, #ff3c15 98%);
      border-radius: 2vw;
      font-size: 3vw;
      font-weight: 700;
      text-align: center;
    }
  }
}
.cont-tab-content {
  position: relative;
  height: 100%;
  .tab-content {
    height: 100%;
    padding-bottom: 15.66vw;
    overflow: auto;
    dt {
      position: relative;
      margin-left: 2.66vw;
      padding: 2vw 8vw 2vw 0;
      .dt-content {
        display: flex;
        align-items: center;
        overflow: hidden;
        p {
          margin-right: 1.33vw;
          font-weight: 700;
          font-size: 0.32rem;
          font-size: 3.2vw;
          color: #666;
          flex: none;
        }
        span {
          flex: 1;
          color: #999;
          font-size: 0.266rem;
          font-size: 2.66vw;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    dd {
      position: relative;
      margin: 0;
      min-height: 30.66vw;
      padding-left: 2.66vw;
    }
  }
}

.goodsdata-dd-div {
  padding: 2.66vw 0;
  margin-bottom: 0.133vw;
  display: flex;
  min-height: 27.46vw;
  position: relative;
  .goodsimg-box {
    width: 25.33vw;
    height: 25.33vw;
    flex: none;
    display: block;
    margin-right: 2.66vw;
    position: relative;
    img {
      width: 100%;
      border-radius: 0.5vw;
    }
  }
  .goodsnews-box {
    flex: 1;
    position: relative;
    padding-right: 4vw;
    .goodsnews-name {
      position: relative;
      padding-right: 4vw;
      font-weight: 700;
      width: 40vw;
      font-size: 4vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .goodsnews-material {
      width: 42.66vw;
      margin: 1.33vw 0;
      font-size: 2.33vw;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .goodsnews-sellnew {
      margin: 1.77vw 0 !important;
      color: #999;
      font-size: 2.66vw;
      line-height: 1;
      min-height: 1em;
      span {
        vertical-align: middle;
      }
      :last-child {
        margin-left: 2.06vw;
      }
    }
    .goodsnews-price {
      color: rgb(255, 83, 57);
      font-size: 5vw;
      line-height: 8.266vw;
      padding-bottom: 0.93vw;
      float: left;
    }
    .goodsnews-number {
      position: absolute;
      right: 5vw;
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
</style>
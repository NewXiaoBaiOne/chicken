<template>
  <div id="cContentbox-evaluate">
    <section>
      <div class="score-box">
        <div class="business-score">
          <div class="business-number">
            <p>{{ businessscore() }}</p>
          </div>
          <div class="business-number-ui">
            <span>商家评分</span>
            <div class="business-ui-content">
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              >
              </el-rate>
            </div>
          </div>
        </div>
        <div class="other-score">
          <div class="other-score-box">
            <div class="eat-score">
              <span>味道</span>
              <p>{{ eatscore() }}</p>
            </div>
            <div class="look-score">
              <span>包装</span>
              <p>{{ lookscore() }}</p>
            </div>
          </div>
          <div class="give-score">
            <span>配送</span>
            <p>{{ givescore() }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="evaluate-box">
      <ul class="evaluate-nai">
        <li class="evaluate-nai-content evaluate-nai-select">
          全部{{ evaluatelist.length }}
        </li>
        <li class="evaluate-nai-content">好评{{ evaluatelist.length }}</li>
        <li class="evaluate-nai-content">差评{{ evaluatelist.length }}</li>
      </ul>
      <ul class="evaluate-content">
        <li v-for="data in evaluatelist" :key="data.orderid">
          <div class="evaluate-content-box">
            <div class="evaluate-content-imgbox"><img src="https://s3.ax1x.com/2020/12/19/rtXirj.jpg"></div>
            <div class="evaluate-content-content">
              <div class="evaluate-cChead">
                <h3>匿名用户</h3>
                <small>{{
                  new Date(data.shareTime *1 ).toLocaleDateString()
                }}</small>
              </div>
              <div class="evaluate-cChead-ui">
                <el-rate
                  disabled
                  show-score
                  text-color="#ff9900"
                  :value="data.eatscore"
                >
                </el-rate>
              </div>
              <div class="evaluate-cChead-box">
                <span>{{ data.evaldataUser }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 4.2,
      historybuy: [],
      evaluatelist: [],
    };
  },
  created() {
    this.$axios
      .post("http://localhost:1234/content/origin/comment")
      .then((res) => {
        // this.commentlist = res.data[0];
        for (let i of res.data) {
          //  初始化列表数据
          this.evaluatelist.push(i);
          //  初始化Nai列表数据
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted(){
  },
  methods: {
    eatscore() {
      let score = 0;
      for (let i of this.evaluatelist) {
        score += i.eatscore;
      }
      return (score / this.evaluatelist.length).toFixed(2);
    },
    lookscore() {
      let score = 0;
      for (let i of this.evaluatelist) {
        score += i.lookscore;
      }
      return (score / this.evaluatelist.length).toFixed(2);
    },
    givescore() {
      let score = 0;
      for (let i of this.evaluatelist) {
        score += i.givescore;
      }
      return (score / this.evaluatelist.length).toFixed(2);
    },
    businessscore() {
      let newD =((this.eatscore() * 1 + this.lookscore() * 1 + this.givescore() * 1) /3).toFixed(2);
      this.value = newD * 1;
      return newD;
    },
  },
};
</script>
<style lang="less" scoped>
#cContentbox-evaluate {
  background-color: #f5f5f5;
  overflow: auto;
}
.score-box {
  display: flex;
  .business-score {
    justify-content: space-between;
    width: 33.6vw;
    .business-number {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-size: 10vw;
        color: #ff6000;
      }
    }
    .business-number-ui {
      align-items: flex-start;
      padding-left: 5vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        font-size: 3.2vw;
        margin-bottom: 1.33vw;
      }
      .business-ui-content {
        overflow: hidden;
        white-space: nowrap;
        display: flex;
        flex-direction: row;
      }
    }
  }
  .other-score {
    flex: 1;
    margin-top: 4vw;
    justify-content: space-between;
    .other-score-box {
      display: flex;
      float: left;
      flex-direction: row;
      justify-content: space-between;
      flex: 1;
      padding: 0 7.2vw;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          font-size: 3.2vw;
          margin-bottom: 1.33vw;
        }
        p {
          font-size: 5.33vw;
        }
      }
    }
    .give-score {
      width: 22.93vw;
      border-left: 1px solid #ddd;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        font-size: 3.2vw;
        margin-bottom: 1.33vw;
      }
      p {
        font-size: 5.33vw;
      }
    }
  }
}
.evaluate-box {
  background-color: #fff;
  padding: 2.66vw 3.2vw 0;
  font-size: 3.6vw;
  .evaluate-nai {
    padding-bottom: 2.66vw;
    border-bottom: 1px solid #eee;
    li {
      display: inline-block;
      padding: 0 2.4vw;
      height: 7.44vw;
      line-height: 7.46vw;
      margin: 0.93vw;
      font-size: 3.2vw;
      border-radius: 0.53vw;
      color: #6d7885;
      background-color: #ebf5ff;
    }
    .evaluate-nai-select {
      color: #fff;
      background-color: #0097ff;
    }
  }
  .evaluate-content {
    margin-bottom: 11vw;
    li {
      padding: 4vw 0 3.2vw;
      border-bottom: 1.33vw solid #eee;
    }
  }
}
.evaluate-content-box {
  position: relative;
  padding-left: 10.66vw;
  .evaluate-content-imgbox {
    width: 86.4vw;
    height: 86.4vw;
    position: absolute;
    top: 0;
    left: 0;
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    img{
      width: 8vw;
      height: 8vw;
    }
  }
  .evaluate-content-content{
    font-size: 3.4vw;
    .evaluate-cChead{
      height: 5vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3{
        font-size: 3.43vw;
        margin-top: 0;
        color: #333;
        margin-right: 1.6vw;
      }
      small{
        font-size: 2.93vw;
        color: #999;
      }
    }
    .evaluate-cChead-ui{
      display: flex;
      align-items: center;
      margin: .5vw 0 .5vw;
    }
  }
}
</style>
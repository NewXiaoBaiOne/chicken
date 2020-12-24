<template>
  <div id="cContentbox-business">
    <section class="cContentbox-box">
      <h3>配送信息</h3>
      <div class="cContentbox-giveNews">
        <div>
          <span>由蜂鸟快送提供配送，约30分钟送达，距离1.3km</span>
        </div>
        <div>配送费￥0.0</div>
      </div>
    </section>
    <section class="cContentbox-box">
      <h3>商家服务</h3>
      <div class="cContentbox-serveNews">
        <span class="cContentbox-teshuBox">保</span>
        <span>该商户已购买食品安全责任险，食品安全有保障</span>
      </div>
    </section>
    <section class="cContentbox-box">
      <h3>商家信息</h3>
      <div class="business-img-box">
        <img
          src="https://cube.elemecdn.com/c/2c/db5ab6df9975f049dff8c7f9fd7adjpeg.jpeg?x-oss-process=image/format,webp/resize,w_200,h_200,m_fixed"
          alt=""
        />
        <img
          src="https://cube.elemecdn.com/f/73/36031d8f7d8c2cfdb0d5672db8ec7jpeg.jpeg?x-oss-process=image/format,webp/resize,w_200,h_200,m_fixed"
          alt=""
        />
      </div>
    </section>
    <div class="cContentbox-footer">
      <section class="cContentbox-footer-top">
        <h3>商家信息</h3>
        <ul>
          <li>暂无简介</li>
          <li>
            <span>品类</span>
            <span>川菜馆</span>
          </li>
          <li class="contact-business">
            <span>商家电话</span>
            <span><i class="iconfont icon-dianhua"></i>联系商家</span>
          </li>
          <li>
            <span>地址</span>
            <span>中山市火炬开发区沙边村置业路2号之3</span>
          </li>
          <li>
            <span>营业时间</span>
            <span>10:00-14:05,16:10-20:10</span>
          </li>
        </ul>
      </section>
      <section class="cContentbox-footer-bottom">
        <span>营业资质</span>
      </section>
    </div>
  </div>
</template>

<style lang="less" scoped>
#cContentbox-business {
  font-size: 3.46vw;
  overflow: auto;
  //   margin-bottom: 11vw;
  .cContentbox-box {
    margin-bottom: 2.66vw;
    padding: 4.26vw 4vw 4vw;
    font-size: 3.4vw;
    color: #666;
    border-bottom: 1vw solid #eee;
    h3 {
      color: #000;
      font-weight: 700;
      font-size: 4vw;
      line-height: 5.6vw;
    }
    .cContentbox-giveNews {
      margin-top: 4.26vw;
      div {
        margin-bottom: 1.86vw;
        span {
          box-sizing: inherit;
          -webkit-tap-highlight-color: transparent;
        }
      }
    }
    .cContentbox-serveNews {
      margin-top: 4.26vw;
      span {
        box-sizing: inherit;
        -webkit-tap-highlight-color: transparent;
      }
      .cContentbox-teshuBox {
        width: 6vw;
        text-align: center;
        display: block;
        float: left;
        border: 0.05vw solid #ccc;
      }
    }
  }
}
.business-img-box {
  display: flex;
  flex-direction: row;
  img {
    width: 30vw;
  }
}
.cContentbox-footer {
  margin-bottom: 11vw;
  section {
    margin-bottom: 2.66vw;
    padding: 4.26vw 4vw 4vw;
    font-size: 3.4vw;
    background-color: #fff;
    color: #666;
    border-bottom: 1px solid #eee;
    h3 {
      color: #000;
      font-weight: 700;
      font-size: 4vw;
      line-height: 5.6vw;
    }
    ul {
      li {
        display: flex;
        padding: 4vw 0 0;
        justify-content: space-between;
        align-items: center;
        span:first-child {
          font-weight: 700;
          color: #333;
        }
      }
      .contact-business {
        display: flex;
        color: #00a6ff;
        align-items: center;
        i{
            font-size: 5vw;
            line-height: 6vw;
            margin-right: 2vw;
        }
      }
    }
  }
.cContentbox-footer-bottom{
    color: #000;
    font-weight: 700;
    font-size: 4vw;
    line-height: 5.6vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
}
</style>
<template>
    <div id="recommendInfo">
      <!--第一部分-->
      <div id="pHead" >
        <img @click="skipRedBao" src="../../assets/lArrow.png" alt="">
        推荐有奖
      </div>

    <!--第二部分-->
   <div class="recommendBg"></div>

      <!--第三部分-->
      <div class="askFor">
        <div class="askFor1">
          <img @click="wechatSkip" src="../../assets/wechat.png" alt="">
          <p>邀请微信好友</p>
        </div>
        <div class="askFor11">
          <img @click="qqSkip" src="../../assets/qq.png" alt="">
          <p>邀请QQ好友</p>
        </div>
        <div class="askFor111">
          <img @click="ewmSkip" src="../../assets/ewm.png" alt="">
          <p>面对面邀请</p>
        </div>
        <div class="empty"></div>
      </div>

      <!--第四部分-->
      <div class="detail">
        <div class="leiJi">
          <span>累计收益</span>
          <span><span class="spanDetail1">0</span>元</span>
        </div>
        <div class="yaoQing">
          <span>成功邀请</span>
          <span><span class="spanDetail2">0</span>人</span>
        </div>
        <div class="empty"></div>
        <p>-收益明细-</p>

      </div>

       <!--第五部分-->
      <div class="detailDown">
        <img src="../../assets/hb.png" alt="">
        <span>还不赶紧去邀请好友</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "P_DiscountRedbao_RecommendInfo",
      methods:{
        skipRedBao(){
          this.$router.push({path:'/discountHb'});
        },
        wechatSkip(){
          this.$dialog.alert({
            width:280,
            overlay:false,
            // transition:transform(),
            message: '请在饿了么APP中打开'
          });
        },
        qqSkip(){
          this.$dialog.alert({
            width:280,
            overlay:false,
            // transition:transform(),
            message: '请在饿了么APP中打开'
          });
        },
        ewmSkip(){
          this.$dialog.alert({
            width:280,
            overlay:false,
            // transition:transform(),
            message: '请在饿了么APP中打开'
          });
        }
      }
    }
</script>

<style scoped>
  #recommendInfo{
    font-size: 1.1rem;
  }
  #pHead{
    color:white;
    font-weight: bold;
    width: 100%;
    padding: 0.4rem 0 0.4rem 0;
    text-align: center;
    background: #26a2ff;
    position: relative;
  }
  #pHead>img{
    width:1rem;
    height:1rem;
    position: absolute;
    top: 0.5rem;
    left: 0.2rem;
  }
.recommendBg{
  width: 100%;
  height: 12rem;
  background: url("../../assets/recommendbg.png") no-repeat;
  background-size: cover;
}
  .askFor{
    background: white;
    padding: 0.6rem 0;
    text-align: center;
    font-size: 0.7rem;
  }
  .askFor1>img{
    width: 4rem;
    height: 4rem;
  }
  .askFor11>img{
    width: 3.7rem;
    height: 3.7rem;
  }
  .askFor11{
    margin: 0 0.7rem;
  }
  .askFor111>img{
    width: 4.2rem;
    height: 4.2rem;
  }
  .askFor1,.askFor11,.askFor111{
    text-align: center;
    display: inline-block;
  }

  .detail{
    text-align: center;
    font-size:0.8rem ;
    padding-top: 1rem ;
  }
  .leiJi{
    float: left;
    margin-left: 5rem;
    padding-right: 1rem;
    border-right: 0.2rem solid gray;
  }
  .leiJi>span,.yaoQing>span{
display: block;
    text-align: center;
  }
  .yaoQing{
    display: block;
    float: right;
    margin-right: 4.5rem;
  }
  .spanDetail1{
    color: red;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .spanDetail2{
    font-size: 1.2rem;
    font-weight: bold;
  }

  .detailDown{
    text-align: center;
    font-size: 0.9rem;
  }
  .detailDown>span{
    display: block;
  }
  .detailDown>img{
    width: 2rem;
    height: 2rem;
  }
  .empty{
    clear: both;
  }
</style>

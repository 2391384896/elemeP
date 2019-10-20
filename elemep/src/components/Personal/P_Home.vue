<template>
  <div id="pHome">
    <!--第一部分-->
    <div id="pHead" >
      <img @click="pLeave" src="../../assets/lArrow.png" alt="">
      我的
    </div>

    <!--第二部分-->
    <div id="pMsg" @click="accountMsg">
      <div id="leftImg">
        <img src="../../assets/tx1.png" alt="">
        <div id="p1">
          <p id="sp1">{{zhanghuming}}</p>
          <p id="sp2">
            <img src="../../assets/phone1.png" alt="">
            <span>绑定手机</span>
          </p>
        </div>
      </div>
      <span id="rightA"><img src="../../assets/rArrow2.png" alt=""></span>
      <div class="empty"></div>
    </div>

    <!--第三部分-->
    <div id="third">
      <div @click="moneySkip" id="money">
        <p><span class="sameSize1">{{money}}0.00</span>元</p>
        <p>我的余额</p>
      </div>

      <div @click="numSkip" id="num">
        <p><span class="sameSize2">{{num}}3</span>个</p>
        <p>我的优惠</p>
      </div>

      <div @click="countSkip" id="count">
        <p><span class="sameSize3">{{count}}0</span>分</p>
        <p>我的积分</p>
      </div>
    </div>

    <!--第四部分-->
    <div id="fourth">
      <div id="orderForm" class="rowStyle" @click="orderSkip">
        <img class="fourImg" src="../../assets/order.png" alt="">
        <span class="fourSpan">我的订单</span>
        <img class="fourImg2" src="../../assets/rArrowBlack.png" alt="">
        <div class="empty"></div>
      </div>
      <div id="countShop" class="rowStyle" @click="shopSkip">
        <img class="fourImg" src="../../assets/shop.png" alt="">
        <span class="fourSpan">积分商城</span>
        <img class="fourImg2" src="../../assets/rArrowBlack.png" alt="">
        <div class="empty"></div>
      </div>
      <div id="cardVip" class="rowStyle" @click="vipSkip">
        <img class="fourImg" src="../../assets/vip.png" alt="">
        <span class="fourSpan">饿了么会员卡</span>
        <img class="fourImg2" src="../../assets/rArrowBlack.png" alt="">
        <div class="empty"></div>
      </div>
    </div>

    <!--第五部分-->
    <div id="fifth">
      <div id="center" class="rowStyle" @click="centerSkip">
        <img class="fourImg" src="../../assets/center.png" alt="">
        <span class="fourSpan">服务中心</span>
        <img class="fourImg2" src="../../assets/rArrowBlack.png" alt="">
        <div class="empty"></div>
      </div>
      <div id="download" class="rowStyle" @click="downloadSkip">
        <img class="fourImg"  src="../../assets/download.png" alt="">
        <span class="fourSpan">下载饿了么APP</span>
        <img class="fourImg2" src="../../assets/rArrowBlack.png" alt="">
        <div class="empty"></div>
      </div>
    </div>
<Lfoots></Lfoots>
  </div>
</template>

<script>
  import Lfoots from "../TakeOut/Lfoots";
  export default {
    name: "P_Home",
    meta: {
      keepAlive: false // 不需要被缓存
    },
    components: {Lfoots},
    // abstract:false,
    data(){
      return {
        money:'',
        num:'',
        count:'',
        zhanghuming:'登录/注册'
      }
    },
    methods:{
      pLeave(){
        this.$router.push({path:'/Tddlb'});
      },
      accountMsg(){
        if(this.zhanghuming=='登录/注册'){
          this.$router.push({path:'/Tregister'});
        }else{
          this.$router.push({path:'/account'});
        }

      },
      moneySkip(){
        this.$router.push({path:'/money'});
      },
      numSkip(){
        this.$router.push({path:'/discount'});
      },
      countSkip(){
        this.$router.push({path:'/integral'});
      },
      orderSkip(){
        this.$router.push({path:'/order'});
      },
      shopSkip(){
        // this.$router.push({path:'/shop'});
        this.$dialog.alert({
          width:280,
          overlay:false,
          // transition:transform(),
          message: '无权进入'
        });
      },
      vipSkip(){
        this.$router.push({path:'/vipCenter'});
      },
      downloadSkip(){
        this.$router.push({path:'/download',query:{count:1}});
      },
      centerSkip(){
        this.$router.push({path:'/service'});
      }
    },
    created(){
      this.zhanghuming=this.$route.query.sss;
      this.totalVue.$on("accountMsg",(v)=>{
        this.zhanghuming=v;
      })
        console.log(this.zhanghuming);
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #pHome{
    /*height: 100%;*/
    background: #f5f5f5;
    font-size: 1rem;
  }

  #pHead{
    color:white;
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
    left: 0.2rem;
    top: 0.5rem;
  }

  #pMsg{
    background:#26a2ff;
    padding: 1rem 0.2rem;
    position: relative;
    font-size: 0.9rem;
  }
  #leftImg{
    float: left;
  }
  #leftImg>img{
    width: 3rem;
    height: 3rem;
  }

  #rightA{
    float: right;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%,0);
  }
  #rightA>img{
    width: 1rem;
    height: 1rem;
  }

  #p1{
    color:whitesmoke;
    display: inline-block;
  }

  #sp1{
    font-weight: bold;
  }
  #sp2>img{
    width: 0.8rem;
    height: 0.8rem;
    margin-top: 0.5rem;
    vertical-align: -0.1rem;
  }

  #third{
    width: 100%;
    background: white;
    text-align: center;
  }

  #money,#num{
    width: 30%;
    padding: 0.8rem 0 0.8rem 0;
    border-right: 0.01rem solid lightgray;
    text-align: center;
    display: inline-block;
  }
  #count{
    width: 30%;
    padding: 0.8rem 0 0.8rem 0;
    text-align: center;
    display: inline-block;
  }

  .sameSize1{
    font-size: 1.2rem;
    font-weight: bold;
    color:orange;
  }
  .sameSize2{
    font-size: 1.2rem;
    font-weight: bold;
    color:red
  }
  .sameSize3{
    font-size: 1.2rem;
    font-weight: bold;
    color: green;
  }

  #fourth,#fifth{
    margin-top: 0.6rem;
    width: 100%;
    background: white;
  }
  .rowStyle{
    padding: 0.6rem 0 0.6rem 0;
  }

  .fourImg{
    width: 0.8rem;
    height: 0.8rem;
    vertical-align: middle;
    float: left;
    margin-left: 0.3rem;
  }
  .fourSpan{
    margin-left: 0.3rem;
    float: left;
  }
  .fourImg2{
    width:0.8rem ;
    height: 0.8rem;
    float: right;
    margin-right: 0.3rem;
  }


  .empty{
    clear: both;
  }
</style>


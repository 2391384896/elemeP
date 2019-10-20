<template>
    <div id="vouPage">
      <!--第一部分-->
        <div id="voucherHead">
          <span class="pHeadRight"><img src="../../assets/askImg.png" alt=""><span @click="voucherInfo">商家代金券说明</span></span>
          <div id="empty"></div>
        </div>

      <!--第二部分-->
      <div class="voucherHome">
        <img src="../../assets/voucherBgImg.png" alt="">
        <div class="downRoute">
          <span>无法使用代金券</span>
          <span>非客户端或客户端版本过低</span>
          <span @click="downloadApp">下载或升级客户端</span>
        </div>
      </div>
      

     <!--<div class="voucherModel">-->
       <!--<div class="vouBl">-->
         <!--<p>￥<span>{{}}1</span>.<span>{{}}0</span></p>-->
         <!--<p>{{}}满20元可用</p>-->
       <!--</div>-->
       <!--<div class="vouBr">-->
         <!--<div class="vouBrl">-->
           <!--<p>分享红包</p>-->
           <!--<p>{{}}2017-05-23到期</p>-->
           <!--<p>限收货手机号为13681722254</p>-->
         <!--</div>-->
         <!--<div class="vouBrr">{{}}剩3日</div>-->
       <!--</div>-->
     <!--</div>-->

    </div>
</template>

<script>
    export default {
        name: "P_DiscountVoucher",
      methods:{
      voucherInfo(){
        this.$router.push({path:'/discountVouInfo'});
      },
        downloadApp(){
        this.$router.push({path:'/download',query:{count:2}});
        }
    }
    }
</script>

<style scoped>
  #vouPage{
    background:#f5f5f5;
    margin-top: 4.5rem;
  }
  /*.voucherModel{*/
    /*background: white;*/
    /*padding: 0.6rem 0;*/
    /*margin: 0.5rem;*/
  /*}*/
  #voucherHead{
padding-top: 1rem;
  }
  .pHeadRight{
    float: right;
    font-size: 0.7rem;
    color: dodgerblue;
    margin-right: 0.5rem;
  }
  .pHeadRight>img{
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
  }
  .voucherHome{
    text-align: center;
    padding-top: 7rem;
  }
  .voucherHome>img{
    width: 6rem;
    height: 4.5rem;
  }
  .downRoute{
    font-size: 0.9rem;
  }
  .downRoute>span{
    display: block;
  }
  .downRoute span:nth-child(2){
    margin: 0.2rem 0;
    font-size: 0.6rem;
    color: gray;
  }
  .downRoute span:nth-child(3){
    margin: 0.2rem 5rem;
    background: limegreen;
    color: white;
    padding: 0.3rem 0;
    border-radius: 0.2rem;
  }
  .empty{
    clear: both;
  }
</style>

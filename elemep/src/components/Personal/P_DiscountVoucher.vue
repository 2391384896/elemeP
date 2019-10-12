<template>
    <div>
      <!--第一部分-->
        <div id="redBaoHead">
          <span class="pHeadLeft"><span>{{}}</span>个红包即将到期</span>
          <span class="pHeadRight"><img src="../../assets/askImg.png" alt=""><span>红包说明</span></span>
          <div id="empty"></div>
        </div>
      <!--第二部分-->
     <div class="redBaoModel">
       <div class="redBl">
         <p>￥<span>{{}}1</span>.<span>{{}}0</span></p>
         <p>{{}}满20元可用</p>
       </div>
       <div class="redBr">
         <div class="redBrl">
           <p>分享红包</p>
           <p>{{}}2017-05-23到期</p>
           <p>限收货手机号为13681722254</p>
         </div>
         <div class="redBrr">{{}}剩3日</div>
       </div>
     </div>

    </div>
</template>

<script>
    export default {
        name: "P_DiscountVoucher"
    }
</script>

<style scoped>
  .redBaoModel{
    background: white;
    padding: 0.6rem 0;
    margin: 0.5rem;
  }
</style>

<template>
    <div>
      <!--第一部分-->
      <div id="recommendHead">
        <span class="pHeadRight"><img src="../../assets/askImg.png" alt=""><span @click="djqInfoSkip"> 商家代金券说明</span></span>
        <div class="empty"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "P_DiscountRedbao_Recommend",
      methods:{
        djqInfoSkip(){
          this.$router.push({path:'/recommendInfo'});
        }
      }
    }
</script>

<style scoped>

  #recommendHead{
    font-size: 0.6rem;
  }
  .pHeadRight{
    float: right;
  }
  .pHeadRight{
    color: blue;
  }
  .pHeadRight>img{
    width: 1.14rem ;
    height:1.14rem;
    vertical-align: middle;
  }
  .empty{
    clear: both;
  }
</style>

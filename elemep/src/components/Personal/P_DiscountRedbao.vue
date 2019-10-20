<template>
    <div id="hbPage">
      <!--第一部分-->
      <div id="redBaoHead">
        <span class="pHeadLeft">有<span> {{geshu}} </span>个红包即将到期</span>
        <span class="pHeadRight"><img src="../../assets/askImg.png" alt=""><span @click="hbInfoSkip"> 红包说明</span></span>
        <div class="empty"></div>
      </div>

      <!--第二部分-->
      <div class="rbModel">
      <div class="redBaoModel">
        <div class="redBl">
          <p>￥<span>{{daxieM}}1</span>.<span>{{daxieMao}}0</span></p>
          <p>{{manjian}}满20元可用</p>
        </div>
        <div class="redBr">
          <div class="redBrl">
            <p>分享红包</p>
            <p>{{daoqishijian}}2017-05-23到期</p>
            <p>限收货手机号为{{shouhuoshoujihao}}13681722254</p>
          </div>
          <div class="redBrr">{{daoqitianshu}}剩3日</div>
          <div class="empty"></div>
        </div>
        <div class="empty"></div>
      </div>
        <div class="rbModelFoot">
          <p>{{xianpinlei}}</p>
        </div>
      </div>
      <!--测试-->
      <div class="rbModel"  v-for="(value,index) in (hbArr)" :key="index">
        <div class="redBaoModel">
          <div class="redBl">
            <p>￥<span>{{value.amount}}</span>.<span>{{daxieMao}}0</span></p>
            <p>{{value.description_map.sum_condition}}</p>
          </div>
          <div class="redBr">
            <div class="redBrl">
              <p>分享红包</p>
              <p>{{value.description_map.end_date}}</p>
              <p>{{value.description_map.phone}}</p>
            </div>
            <div class="redBrr">{{daoqitianshu}}剩3日</div>
            <div class="empty"></div>
          </div>
          <div class="empty"></div>

        </div>

        <div class="rbModelFoot">
          <p>{{!(value.limit_map==undefined)?value.limit_map.restaurant_flavor_ids:''}}</p>
        </div>
      </div>


      <!--第三部分-->
      <div class="historyRb" @click="historySkip">查看历史红包></div>

      <!--第四-->
      <div id="cashDiscount">
        <span @click="cashRedBao">兑换红包</span>
        <span @click="recommendPrize">推荐有奖</span>
        <div class="empty"></div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "P_DiscountRedbao",
      data(){
          return {
            geshu:'',
            daxieM:'',
            daxieMao:'',
            manjian:'',
            daoqishijian:'',
            daoqitianshu:'',
            shouhuoshoujihao:'',
            xianpinlei:'',
            hbArr:[],
            onlyArr:[]
          }
      },
      created(){
        this.axios.get("https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0").then((p)=>{
         // console.log(p.data);
         this.hbArr=p.data;
         p.data.forEach((v)=>{
           // console.log(v);

           // console.log(v.limit_map);
           if(!(v.limit_map==undefined)){
             this.onlyArr.push(v.limit_map.restaurant_flavor_ids);
           }else{
             this.onlyArr.push('');
           }
         });
          // console.log(this.onlyArr);
          // console.log(this.hbArr);
        });
      },
      methods:{
        hbInfoSkip(){
          this.$router.push({path:'/discountHbInfo'});
        },
        historySkip(){
          this.$router.push({path:'/hbHistory'});
        },
        cashRedBao(){
          this.$router.push({path:'/hbCash'});
        },
        recommendPrize(){
          this.$router.push({path:'/hbRecommendInfo'});
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #hbPage{
    background: #f2f2f2;
    position: relative;
    margin-top: 4.5rem;
  }

  #redBaoHead{
    font-size: 0.8rem;
    padding-top: 0.8rem;
    margin:0 0.5rem;
  }
  .pHeadLeft{
    float: left;
  }
  .pHeadLeft>span{
    color: red;
    /*font-size: 1.3rem;*/
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

  .redBaoModel{
    padding: 0.8rem 0;
    /*border: 0.2rem solid rgba(250,250,250,0.1);*/
    border-top: 0.1rem solid red;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    background:white url("../../assets/hbbj.png") repeat-x 0 0;
    background-size: 0.6rem;
   }
  .rbModel{
    margin:0.6rem;
    font-size: 0.7rem;
    color: gray;
    border-left:0.2rem solid rgba(250,250,250,0.1);
border-right:0.2rem solid rgba(250,250,250,0.1) ;
  }
  .redBl{
  float: left;
  padding-top: 0.3rem;
  padding-right: 0.2rem;
    margin-left: 0.3rem;
  border-right: 0.1rem dotted gray;
}
  .redBr{
  float: right;
    margin-right: 0.3rem;
}
  .redBl p:nth-child(1){
    color: red;
    font-size: 1rem;
    font-weight: bold;
  }
  .redBl p:nth-child(1) span:nth-child(1){
    font-size: 1.5rem;
  }
  .redBrl{
    float: left;
  }
  .redBrl p:nth-child(1){
    font-size: 1rem;
    color: black;
  }
  .redBrr{
    color: red;
    font-size: 1.1rem;
    float: right;
  }

  .rbModelFoot{
    background: white;
    border-bottom: 0.2rem solid white;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
  .rbModelFoot>p{
    background: white;
    padding:0.1rem 0 ;
    margin:0 0.4rem;
  }

  .historyRb{
    text-align: center;
    font-size: 0.7rem;
    color: grey;
    padding: 1rem 0 10.15rem 0;
  }

  #cashDiscount{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    font-size: 1rem;
    text-align: center;
  }
  #cashDiscount span:nth-child(1){
    border-right: 0.01rem solid gray;
    float: left;
    padding: 0.6rem  2.2rem 0.6rem 0;
    margin-left: 3rem;
  }
  #cashDiscount span:nth-child(2){
    float: right;
    margin-right: 3rem;
    padding: 0.6rem 0;
  }
  .empty{
    clear: both;
  }
</style>

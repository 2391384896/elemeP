<template>
    <div id="historyHb">
      <!--第一部分-->
      <div id="pHead" >
        <img @click="skipRedBao" src="../../assets/lArrow.png" alt="">
        历史红包
      </div>

      <!--第二部分-->
      <div class="rbModel" v-for="(value,index) in historyHbArr" :key="index">
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
            <!--<div class="redBrr">{{daoqitianshu}}剩3日</div>-->
            <div class="empty"></div>
          </div>
          <div class="empty"></div>
        </div>
        <div class="rbModelFoot">
          <p>{{!(value.limit_map==undefined)?value.limit_map.restaurant_flavor_ids:''}}</p>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "P_DiscountRedbao_History",
      data(){
          return {
            geshu:'',
            daxieM:'',
            daxieMao:'',
            manjian:'',
            daoqishijian:'',
            shouhuoshoujihao:'',
            xianpinlei:'',
            historyHbArr:[]
          }
      },
      created(){
        this.axios.get("https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0").then((p)=>{
          console.log(p.data);
          this.historyHbArr=p.data;
        });
      },
      methods:{
        skipRedBao(){
          this.$router.push({path:'/discountHb'});
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #pHead{
    color:white;
    font-size: 1rem;
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
    top: 0.55rem;
    left: 0.2rem;
  }
  
  .redBaoModel{
    padding: 0.8rem 0;
    /*border: 0.2rem solid rgba(250,250,250,0.1);*/
    border-top: 0.1rem solid lightgrey;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    background:white url("../../assets/gqhb.png") repeat-x 0 0;
    background-size: 0.8rem;
    opacity: 0.7;
  }
  .rbModel{
    margin:0.6rem;
    font-size: 0.7rem;
    color: gray;
    border-left:0.2rem solid rgba(250,250,250,0.1);
    border-right:0.2rem solid rgba(250,250,250,0.1);
    background: url("../../assets/guoqi.png") no-repeat;
    background-size: 3.5rem;
    background-position: 13rem 0.6rem;
  }
  .redBl{
    float: left;
    padding-top: 0.3rem;
    padding-right: 0.8rem;
    margin-left: 0.3rem;
    border-right: 0.06rem dotted gray;
  }
  .redBr{
    float: right;
    margin-right: 0.3rem;
  }
  .redBl p:nth-child(1){
    /*color: red;*/
    font-size: 1rem;
    font-weight: bold;
  }
  .redBl p:nth-child(1) span:nth-child(1){
    font-size: 1.5rem;
  }
  .redBrl{
    float: left;
    margin-right: 2rem;
  }
  .redBrl p:nth-child(1){
    font-size: 1rem;
    color: gray;
  }
  .redBrr{
    /*color: red;*/
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
  .empty{
    clear: both;
  }
</style>

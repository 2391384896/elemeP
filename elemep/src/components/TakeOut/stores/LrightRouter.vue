<template>
    <div class="rightRouter" >

      <div class="Lbody">
        <div class="Ltitle">
          <img src="../../../../static/bottom/left.png"  @click="Lreas"/>
          <h3>{{details.name}}</h3>
        </div>
        <img :src="Lurls+details.image_path">
        <div class="Lfoots">
          <h3>{{details.name}}</h3>
          <span>评分</span>
          <van-rate
            v-model="details.rating"
            size="10"
            gutter="0"
            allow-half
            void-color="#eee"
          /><span class="Ljas">{{details.rating}}</span>
          <div>
            <span class="Lasda">月售 {{details.month_sales}}单</span>
            <span> 售价 ￥20 起</span>
          </div>
          <div class="Lfoot_f">
            <span>评价数 {{details.rating_count}}</span>
            <span>好评率{{details.satisfy_rate}}%</span>
          </div>
        </div>

      </div>

    </div>
</template>

<script>
  import tou1 from "../Chuanz/chuanz";
    export default {
        name: "LrightRouter",
        data(){
            return{
              Lurls:"//elm.cangdu.org/img/",
              details:[],
            }
        },

        created(){
        this.details=this.$route.query.cityname;
          console.log(this.details);

      },
      methods:{
        Lreas(){
            this.$router.go(-1);
        }
      }

    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
 .Ltitle{
   display: flex;
   padding: .5rem 0;
   font-weight: 500;
   color: white;
   background-color: #3190e8;
   width: 100%;
 }
  .Ltitle>img{
    width: 1rem;
    height: 1rem;
    margin:.3rem  6rem 0 .3rem;
  }
.Lbody>img{
  width: 100%;
  height: 100%;
}
.Lfoots{
  padding: .5rem;
  background: url("../../../../static/bottom/jiah.png") no-repeat ;
  background-size: 1rem ;
  background-position: 16rem 4rem;
}
  .Lfoots>h3{
    width: 3rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    margin-bottom: .2rem;
  }
  .Lfoots>h3+span{
    font-size: .7rem;
    color: #666;
    margin-right: .2rem;
  }
.Ljas{
  display: inline-block;
  font-size: .75rem;
  color: #f60;
  margin-left: .2rem;
}
  .Lasda{
    font-size: .7rem;
    color: #666;
    margin-right: .4rem;
  }
  .Lasda+span{
    font-size: .8rem;
    color: #f60;
    margin-right: .2rem;
  }
  .Lfoot_f{
    margin: .2rem 0;
    font-size: .7rem;
    color: #666;
  }
</style>

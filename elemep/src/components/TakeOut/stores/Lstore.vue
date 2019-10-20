<template>
    <div id="store">
      <div class="lfix">

        <img :src="Lashgd.image_path?Lurls+Lashgd.image_path:Lurls"  class="Ltimg_one">

        <div class="Ltitle" >

          <img :src="Lashgd.image_path?Lurls+Lashgd.image_path:Lurls" alt="" class="Ltimg">
          <div class="Lright">
            <h3>{{Lashgd.name}}</h3>
            <p class="Lright_two" @click="Lparticulars()">商家配送／分钟送达／配送费¥5</p>
            <p class="Lright_three">公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
          </div>
          <img src="../../../../static/bottom/left.png" class="limg" @click="Lreturn"/>
          <div class="Lrelative">
            <!--<span>{{Lashgd.activities[0].icon_name}}</span>-->
            <h3>{{Lashgd.activities[0].icon_name==undefined?'':Lashgd.activities[0].icon_name}}</h3>
            <span>{{Lashgd.activities[0].description==undefined?'':Lashgd.activities[0].description}}(APP专享)</span>
            <span class="Lact" @click="Lactivity">{{Lashgd.activities.length==0?'':Lashgd.activities.length}}个活动</span>
          </div>
        </div>

        <div class="Lfoot_shop">
          <van-tabs animated swipeable title-active-color="blue" title-inactive-color="black" color="blue">
            <van-tab title="商品" :to="{path:'/lstore/Lrestaurant',query:{asnfgd:Lashgd.id}}">

            </van-tab>
            <van-tab title="评价" to="/lstore/Levaluate">
            </van-tab>
          </van-tabs>
        </div>
      </div>

      <router-view ></router-view>
    </div>
</template>

<script>


    export default {
        name: "store",
        data(){
          return{
            Lurls:"//elm.cangdu.org/img/",
            Lurl:"164ad0b6a3917599.jpg",
            Lashgd:[],

          }
        },
      created(){
        this.Lashgd=this.$route.query.neir;
        this.Lashgd=this.$route.query.asgid;
        console.log("@@@@@",this.$route.query);
        this.totalVue.$on("lstores", (v)=> {
          this.Lashgd=v;
          console.log("lstore组件", v);
          this.$router.push({path:'/lstore/Lrestaurant',query:{asnfgd:v.id}});
          this.totalVue.$emit('abcs' ,v.id);
        })
        // console.log(typeof(this.Lashgd));
        this.$router.push({path:'/lstore/Lrestaurant',query:{asnfgd:this.Lashgd.id}});
        this.totalVue.$on("lstore", (v)=> {
          this.Lashgd=v;
          console.log("lstore组件", v);
          this.$router.push({path:'/lstore/Lrestaurant',query:{asnfgd:v.id}});
          this.totalVue.$emit('abc' ,v.id);
        });
      },
      methods:{
        Lreturn(){
          this.$router.push({name:"lbody"})
        },
        Lparticulars(){
          this.$router.push({path:"/ShopDetail",query:{asnfgd:this.Lashgd.id}})
        },
        Lactivity(){

        }
      },
      beforeDestroy() {
          console.log("Lstrore即将销毁")
      }
    }
</script>

<style scoped>
  .lfix{
    width: 18.75rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .Ltimg_one{
    height: 5rem;
    width: 20rem;
    filter:blur(.4rem);
    /*height: 5rem;*/
  }
  .Ltitle{
    width: 100%;
    position: absolute;
    top: 0;
    left:0;
    background-color: rgba(119,103,137,.43)!important;
    padding: .5rem 0 1.5rem .5rem;
    display: flex;
    /*height: 3.5rem;*/
  }
  .Lrelative{
    display: flex;
    color: #fff;
    font-size: .4rem;
    padding: .2rem;
    margin: .3rem 0 .3rem 1rem ;
    position: absolute;
    bottom: 0;
    left:0;
  }
  .Lrelative span{
    margin: .5rem 1rem 0 .7rem;
    padding-right: 1.5rem;
  }
  .Lact{
    background: url("../../../../static/bottom/right.png") no-repeat;
    background-size: .7rem;
    background-position: 2.5rem center;
  }
  .Lrelative h3{
    padding: 0 .1rem;
    border: .025rem solid #fff;
    border-radius: .3rem;
    font-weight: 400;
    width: 1rem;
    border-color: rgb(240, 115, 115);
    color: white;
  }
  .Lfoot_shop{
    width: 100%;
    position: absolute;
    top:6.1rem;
    left: 0;
  }
  .Lright{
    width: 100%;
    margin-left: .3rem;
    background: url("../../../../static/bottom/right.png") no-repeat;
    background-size: 1rem;
    background-position: 12rem 1.4rem;
  }
  h3{
    margin: 0;
    font-size: 1rem;
    color: #fff;
    font-weight: 700;
    width: 100%;
    margin-bottom: .2rem;
  }
.Ltimg{
  width: 3.3rem;
  height: 3.3rem;
  display: block;
  border-radius: .15rem;
}
  .Lright_two{
    font-size: .4rem;
    color: #fff;
    margin: .3rem 0;
  }
  .Lright_three{
    margin-top: .3rem;
    font-size: .4rem;
    color: #fff;
  }
  .limg{
    width: 1.1rem;
    height: 1.1rem;
    position: absolute;
    top: .3rem;
    left: 0;
  }
</style>

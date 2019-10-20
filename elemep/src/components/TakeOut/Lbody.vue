<template>
  <div id="body">
    <mt-header :title="Lname" class="mt_header">
      <!--返回搜索页-->
      <router-link to="/Tsearch2" slot="left">
        <mt-button icon="back">搜索</mt-button>
      </router-link>
      <!--返回个人中心页-->
      <router-link to="/phome" slot="right">
        <mt-button icon="more" >个人中心</mt-button>
      </router-link>

    </mt-header>
    <llunb></llunb>
    <div class="Lshop_Body">
      <p class="Lshangj">附近商家</p>
      <ul class="Lshop" v-for="(i ,index) in store" >
        <li :key="index" @click="Lswitch(i)">
          <img :src="LshopUrl+i.image_path" class="shop_img">
          <div class="Lshop_right">
            <div class="Lshop_right_T">
              <div class="Lbzpl">
                <span class="Lbrand">品牌</span>
                <h4>{{i.name}}</h4>
              </div>
              <div class="Lbzpr">
                <div v-for="(a,b) in i.supports" :key="b+1">
                  <span>{{a.icon_name}}</span>
                </div>
              </div>
            </div>
            <div class="LshopTwo">
              <div >
                <van-rate
                  v-model="i.rating"
                  allow-half
                  void-icon="star"
                  :size=".5"
                  gutter="0"
                  void-color="#eee"
                />
                <span class="LshopTwo1">{{i.rating}}</span> <span class="LshopTwo2">月售{{i.recent_order_num}}单</span>
              </div>
              <div class="Lshop_two">
                <div class="LshopTwo_child">
                  <p class="Lchild_one">{{i.delivery_mode.text}}</p>
                  <p class="Lchild_two">{{i.supports[1].name}}</p>
                </div>
              </div>
            </div>
            <div class="LshopThree" >
              <div>￥{{i.float_minimum_order_amount}}起送 / 配送费约{{i.float_delivery_fee}}</div>
              <div class="LshopThree_1">
                <p>{{i.distance}} </p>
                <span>/ {{i.order_lead_time}}</span>
              </div>
            </div>

          </div>
        </li>
      </ul>
    </div>

    <Lfoots></Lfoots>
  </div>
</template>

<script>
  import Lheads from "./Lheads";
  import Lfoots from "./Lfoots";
  import Llunb from "./Llunb";

  export default {
    name: "Lbody",
    components: {Llunb, Lfoots, Lheads},
    data(){
      return{
        Luurl:"https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762",
        LshopUrl:"//elm.cangdu.org/img/",
        store:[],
        Lname:""
      }
    },
    created(){
      this.totalVue.$on("qw",(t)=>{
        this.Lname=t;
      })
      this.Lname=this.$route.query.name;
      console.log(this.Lname);
      this.axios.get(this.Luurl).then((p)=>{
       this.store=p.data;
        // console.log(this.store);
      })
    },
    methods:{
      Lswitch(a){
        this.$router.push({path:'/lstore',query:{asgid:a}});
        console.log("123456789", a);
        this.totalVue.$emit("lstore", a)
      }
    }
  }
</script>

<style scoped>
  .mt_header{
    height: 2.5rem;
  }
  .Lshop_Body{
    height: 18rem;
    overflow: auto;
  }
  .Lshop{
    margin: 0;
    padding: 0;
    width: 18.75rem;
    height: 5rem;
    border-bottom: .025rem solid #f1f1f1;
    padding: .9rem .4rem;
    box-sizing: border-box;
    padding-left: .5rem;
  }
  .Lshop li{
    width: 100%;
    display: flex;
  }
  .Lshop_right{
    width: 15rem;
  }
  .Lshop_right_T{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: .7rem;
    color: #333;
    font: .65rem/.65rem PingFangSC-Regular;
    font-weight: 700;
    /*position: relative;*/
  }
  .Lbzpl{
    display: flex;
  }
  .Lbzpr{
    display: flex;
    height: .7rem;
    font-size: .5rem;
    color: #999;
    border: .025rem solid #f1f1f1;
    padding: 0 .04rem;
   border-radius: .08rem;
   margin-left: .05rem;
 }
   h4{
   margin: 0;
   padding: 0;
   overflow: hidden;
   text-overflow: ellipsis;
     padding-top: .01rem;
     font: .75rem/.65rem PingFangSC-Regular;
     font-weight: 700;
     margin-left: .2rem;
   /*white-space: nowrap;*/
 }
  .Lbrand{
    display: inline-block;
    font-size: .4rem;
    line-height: .6rem;
    color: #333;
    background-color: #ffd930;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
  }
  .shop_img{
    width: 2.9rem;
    height: 3rem;
    display: block;
    margin-right: .4rem;
  }
 .Lshangj{
   background: url("../../../static/bottom/dianp.png") no-repeat;
   background-size:.9rem ;
   background-position:.2rem center;
   padding-left: 1.3rem;
   color: #999;
   margin-left: 1rem;
   margin: 0;
   font: .65rem/1.6rem Microsoft YaHei;
 }
 .LshopTwo{
   height: 1.3rem;
   margin-top: .5rem;
   display: flex;
   justify-content: space-between;
 }
  .LshopTwo1{
    font-size: .8rem;
    color: #ff6000;
    margin: 0 .1rem;
  }
  .LshopTwo2{
    transform: scale(.8);
    margin-left: -.2rem;
    font-size: .4rem;
    color: #666;
  }
  .LshopTwo_child{
    display: flex;
  }
  .Lchild_one{
    color: #fff;
    background-color: #3190e8;
  }
  .Lchild_two{
    color: #3190e8;
  }
  .Lchild_two,.Lchild_one{
    margin-top:.2rem ;
    padding: 0;
    border: .025rem solid #3190e8;
    font-size: .35rem;
    border-radius: .08rem;
    margin-left: .08rem;
  }
  .LshopThree{
    display: flex;
    justify-content: space-between;
    font-size: .5rem;
    color: #666;
    margin-top: .2rem;
  }
  .LshopThree_1{
    display: flex;
    transform: scale(.9);
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
  }
  .LshopThree_1 p{
    color: #999;
    margin: 0;
    padding: 0;
  }
  .LshopThree_1 span{
    color: #3190e8;
  }

</style>

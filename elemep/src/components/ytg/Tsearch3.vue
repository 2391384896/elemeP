
<template>

  <!--<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>-->
  <!--search是搜索-->
  <div id="search">

    <!--head是头部-->
    <div id="head">
      <img src="../../assets/img_t/zuojian.png" @click="back"/>
      <div id="ll">搜索地址</div>

    </div>
    <div id="srk">
      <input type="text" placeholder="请输入小区/写字楼/学校等" id="input" v-model="dizhi">
      <button id="tj" @click="tijiao()">确认</button>
    </div>


    <div>
      <h5 id="business">为了满足商家的送餐要求，建议您从列表中选择地址</h5>
      <div >


        <li  class="ss" v-for="(p,i) in dizhi2" v-if="!p.checked" :key="i" @click="tzwm(p,i)">
          <p v-model="diyi" class="diyi">{{p.name}}</p>
          <p v-model="dier" class="dier">{{p.address}}</p>
        </li>
      </div>
    </div>
    <div v-show="pb" class="potin">
      <p>找不到地址？</p>
      <p>请尝试输入小区、写字楼或学校名</p>
      <p>详细地址（如门牌号）可稍后输入哦。</p>
    </div>
    <!--<Lfoots></Lfoots>-->
  </div>

</template>

<script>
  // import Lfoots from "../TakeOut/Lfoots";
  import storage from '../../router/storage';
  export default {
    name: "Tsearch3",
    data(){
      return{
        dizhi:"",
        //存所有餐馆数据
        datas:[],
        classbus:false,
        child1Msg:"",
        address:"",
        dizhi2:"",
        diyi:"",
        dier:"",
        pb:true

      }
    },
    methods:{
      tijiao(){

        this.classbus=true;
        this.axios.get("http://elm.cangdu.org/v1/pois?type=nearby&keyword="+this.dizhi).then((p) =>{
          // console.log(this.address.id)
          this.dizhi2=p.data;
          console.log(p.data)
          this.pb=false;

        })

      },
      tzwm(p,i){
        console.log(p.name);
        this.dizhi=p.name;
        localStorage.setItem("v5",p.name)
        //
        // console.log(p)
        // this.$store.commit("getAddress2",p.address)
        // this.$store.commit("getAddress2",p.name)
        this.$router.push({
          path: "/addAddress",
          query:{dizhi:this.dizhi}
        })

        // this.urL.push({
        //   title:this.dizhi,
        //
        //   checked:false
        // })
      },
      back(){
        history.go(-1)
      }
    },
    created(){
      this.address = this.$store.state.address
      this.dizhi=localStorage.getItem("v5")

      this.dizhi=""
    },
    // components: { Lfoots}
  }
</script>

<style scoped>

  *{
    margin: 0;
    padding: 0;


  }

#search{
  width: 100%;
  height: 100%;
  background: #f2f2f2
}
  #head{
    background: #3190e8;
    width: 100%;
    height: 2.2rem;
    /*position: relative;*/
  }
  #head img{
    display:inline-block;
    height: 1rem;
    /*position: absolute;*/
    margin-left: 0.4rem;
    margin-top:0.6rem;
  }
  #srk{
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: .5rem;
  }
  #ll{
    display:inline-block;
    font-size: 1rem;
    line-height: 2.2rem;
    text-align: center;
    color: #fff;
    margin-left: 45%;
    transform: translateX(-50%);
    font-weight: 700;
  }
  #input{
    display: block;
    width: 12.5rem;
    padding: .4rem;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: .7rem;
  }
  #tj{
    display: block;
    width: 4rem;
    background: #3199e8;
    font-size: .8rem;
    color: #fff;
    border-radius: 5px;
  }
  #business{
    background: #fff6e4;
    font-size: .7rem;
    color: #ff883f;
    text-align: center;
    padding: .2rem 0;
    font-weight: 400;
  }
  .ss{

    margin: 0 auto;
    padding-top: .65rem;
    border-bottom: 1px solid #e4e4e4;
    border-top: 1px solid #e4e4e4;
  }
  .diyi{
    margin: 0 auto .35rem;
    width: 90%;
    font-size: .65rem;
    color: #333;
  }
  .dier{
    width: 90%;
    margin: 0 auto .55rem;
    font-size: .45rem;
    color: #999;
  }
  li{
    list-style-type: none;
  }
  .potin{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
  }
  .potin p{
    width: 100%;
    text-align: center;
    font-size: .8rem;
    color: #969696;
    margin-bottom: .4rem;
  }
</style>


<template>

  <!--<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>-->
  <!--search是搜索-->
  <div id="search">

    <!--head是头部-->
    <div id="head">
      <img src="../../assets/img_t/zuojian.png" @click="back"/>
      <div id="ll">{{address.name}}</div>

      <router-link to="/Shouye" id="qhcs">切换城市</router-link>
    </div>
    <div >
      <input type="text" placeholder="输入学校、商务楼、地址" id="input" v-model="dizhi">
      <button id="tj" @click="tijiao()">提交</button>
    </div>
    <h5  id="business">搜索历史</h5>
<ul>
  <li  class="ss" v-for="(p1,i1) in dizhi2" v-if="true" :key="i1" @click="tzwm(i1)">
    <p class="diyi">{{p1.name}}</p>
    <p class="dier">{{p1.address}}</p>
  </li>
</ul>

    <div>

      <div >
<ul>
      <li  class="ss" v-for="(p,i) in lishi"  :key="i" @click="tzwm2(i)">
        <p v-model="diyi" class="diyi">{{p.name}}</p>
        <p v-model="dier" class="dier">{{p.address}}</p>
      </li>
      <li class="qk" v-if="qksy1" @click="qksy">清空所有</li>
</ul>
      </div>
    </div>
    <!--<Lfoots></Lfoots>-->
  </div>

</template>

<script>
  // import Lfoots from "../TakeOut/Lfoots";
  import storage from '../../router/storage';
  export default {
    name: "Tsearch2",
    data(){
      return{
        dizhi:"",
        //存所有餐馆数据
        datas:[],
        classbus:false,
        child1Msg:"",
        address:"",
        dizhi2:[],
        diyi:"",
        dier:"",
        lishi:[],
        qksy1:false
      }
    },
    methods:{
      tijiao(){
        console.log(this.dizhi)
        if(this.dizhi!=""){


        this.classbus=true;
        this.axios.get("https://elm.cangdu.org/v1/pois?city_id="+this.address.id+"&keyword="+this.dizhi+"&type=search").then((p) =>{
          // console.log(this.address.id)
          this.dizhi2=p.data;
          console.log(p.data)
        })
      }
      },
      tzwm(i){
        this.lishi.push({
          address:this.dizhi2[i].address,
          name:this.dizhi2[i].name,
          checked:false,
        })

        console.log(this.dizhi2[i].address)
        console.log(this.dizhi2[i].name)

        this.$router.push({
          path: "/Lbody"
        })
        storage.set('lishi',this.lishi)
      },
      tzwm2(){
        this.$router.push({
          path: "/Lbody",

        })
      },
     qksy(){
        this.qksy1=false;
       this.lishi.splice(0)
       storage.set('lishi',this.lishi);


     },
      back(){
        history.go(-1)
      }
    },
    mounted(){   /*生命周期函数       vue页面刷新就会触发的方法*/

      this.lishi=storage.get('lishi');
      console.log(this.lishi);
      if(this.lishi[0]){
        this.qksy1=true
      }else{
        this.qksy1=false
      }
      // if(this.lishi){  /*注意判断*/
      //   this.lishi=this.lishi;
      //
      // }

    },
    created(){
      this.address = this.$store.state.address
      console.log(this.lishi)
     // if(this.lishi){
     //
     // }else {
     //
     // }


    },
    // components: { Lfoots}
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;


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
    opacity: ;
  }
  #ll{
    display:inline-block;
    font-size: 1rem;
    line-height: 2.2rem;
    text-align: center;
    color: #fff;
    margin-left: 40%;
    transform: translateX(-50%);
    font-weight: 400;
  }
  #input{
    height: 1.5rem;
    width: 80%;
    border: 0.025rem solid #e4e4e4;
    border-radius: 0.125rem;
    font-weight: 700;
    color: black;
    padding: 0.025rem;
    margin-left: 10%;
    margin-top: 0.5rem;
    font-size: 0.7rem;
  }
  #tj{
    background-color: #3190e8;
    border-radius: 0.125rem;
    color: white;
    height: 1.6rem;
    width: 80%;
    border: 0.025rem solid #3190e8;
    margin-top: 0.5rem;
    margin-left: 10%;
  }
  #business{
    height: 2rem;
    font-size: .6rem;
    line-height: 2rem;
    text-indent: .5rem;
    font-weight: 700;
    background: #f5f5f5;
    color: #666;
    margin-top: 0.25rem;
  }
  #qhcs{
    right: 0.4rem;
    font-size: 0.6rem;
    color: #fff;
    position: absolute;
    top: 1rem;
    color: white;
    text-decoration:none
  }
  .ss{

    margin: 0 auto;
    padding-top: .65rem;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
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
  .qk[data-v-259d3b6e] {
    height: 2rem;
    line-height: 2rem;
    background: white;
    text-align: center;
  }
  li{
    list-style-type: none;
  }
</style>

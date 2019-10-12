<template>
  <!--<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>-->
  <!--search是搜索-->
  <div id="search">
    <!--head是头部-->
    <div id="head">
      <img src="../../assets/img_t/zuojian.png"/>
      <p>数据</p>
      <router-link :to="{}" id="qhcs">切换城市</router-link>
    </div>
    <div >
      <input type="text" placeholder="输入学校、商务楼、地址" id="input">
      <button id="tj" @click="tijiao()">提交</button>
    </div>
    <div v-show="classbus" id="business">
      <h4>商家</h4>
      <router-link :to={} v-for="(p,i) in datas" :key="i">
        {{p.name}}
      </router-link>
    </div>
    <Lfoots></Lfoots>
  </div>

</template>

<script>
  import Lfoots from "../TakeOut/Lfoots";
  export default {
    name: "Tsearch2",
    data(){
      return{
        //存所有餐馆数据
        datas:[],
        classbus:false,
        abc:""

      }
    },
    methods:{
      tijiao(){
        this.classbus=true
      },

    },
    created(){
      this.axios.get("https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=肯德基").then((p)=>{
        this.datas=p.data;
        console.log(this.datas)
      })
    },
    components: {Lfoots}
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
  }
  #head p{
    display:inline-block;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    margin-left: 7rem;
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
  }
</style>

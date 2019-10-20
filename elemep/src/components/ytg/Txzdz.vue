<template>
    <div id="wrap">
      <div id="toubu">
        <router-link to="/Tqrdd">
        <img id="toubu-1" src="../../assets/img_t/zuojian.png" alt="">
        </router-link>
        <span id="toubu-2">选择地址</span>
      </div>
      <div id="dibu">
        <img id="dibu-1" src="../../assets/img_t/jia.png" alt="">
        <router-link to="/Ttjdz">
        <span id="dibu-2">新增收货地址</span>
        </router-link>

      </div>
      <div id="xz" v-if="modu">
        <div id="mz">
          {{mingzi}}
          {{ren}}
        </div>
        <div id="dh">
          <span>联系电话:</span>
          {{dianhua}}
        </div>
        <div id="dizhi">
          <span>详细地址</span>:


          <span id="xiangxi">{{dizhi}}{{xiangxi}}</span>
        </div>
        <div id="biaozhu">
          标签:{{xuexiao}}
        </div>
        <button @click="shanchu" id="shanchu">删除</button>

      </div>

    </div>
</template>

<script>
    export default {
        name: "Txzdz",
      data(){
          return{
            mingzi:"",
            dianhua:"",
            dizhi:"",
            xiangxi:"",
            xuexiao:"",
            ren:"",
            modu:false
          }
      },
      methods:{
        shanchu(){
          this.modu=false

        }
      },
      created(){

          this.mingzi=this.$route.query.name;
          this.dianhua=this.$route.query.name2;
          this.dizhi=this.$route.query.name3;
          this.xiangxi=this.$route.query.name4;
          this.xuexiao=this.$route.query.name5
        this.ren=this.$route.query.name6
          //setItem是传值
          localStorage.setItem("v3",this.mingzi)
          console.log(this.mingzi)
        if(this.mingzi){
          this.modu=true;
        }
      }
    }
</script>

<style scoped>
  #toubu{
    height: 2.2rem;
    line-height: 2.2rem;
    background: #3190e8;
    color: white;
  }
  #toubu-1{
    margin-left: 0.5rem;

  }
  #toubu-2{
    font-size: .8rem;
    color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 700;
  }
  #dibu{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2.5rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #dibu-2{
    font-size: .8rem;
    color: #3190e8;
    margin-left: .3rem;
  }
  #xz{
    background: white;
    padding-left: 1rem;
  }
  #mz{
    width: 30%;
  }
  #dh{
    position: absolute;
    right: 0.5rem;
    top: 2.2rem;

  }
  #shanchu{
    background: aqua;
    margin-left: 14rem;

  }
  #xiangxi{
    color: #666;
    font-size: 0.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>

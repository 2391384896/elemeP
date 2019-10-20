<template>
    <div id="serviceCenter">
      <!--第一部分-->
      <div id="pHead" >
        <img @click="InteSkipHb" src="../../assets/lArrow.png" alt="">
        服务中心
      </div>
      <!--第二部分-->
      <div class="serviceTel">
        <div class="serviceTel1" @click="serviceOne">
          <img src="../../assets/girl.png" alt="">
          <p>在线客服</p>
        </div>
        <div class="serviceTel2" @click="serviceTwo">
          <img src="../../assets/tel.png" alt="">
          <p>在线客服</p>
        </div>
        <div class="empty"></div>
      </div>
      <!--第三部分-->
      <div class="hotDoor">热门问题</div>
      <div class="lArrowBg" @click="rapSkip(value)" v-for="(value,i) in arr1" :key="i">
        {{value}}
      </div>
    </div>
</template>

<script>
  // import serviceEvent from "./serviceEvent"
    export default {
        name: "P_Service",
      data(){
          return {
            name:'',
            nameArr:[],
            arr1:[],
            arr2:''
          }
      },
      methods:{
        InteSkipHb(){
          this.$router.push({path:'/phome'});
        },
        serviceOne(){
          // this.$router.push({path:'/service1'});
          this.$dialog.alert({
            width:280,
            overlay:false,
            // transition:transform(),
            message: '未成年禁止进入'
          });
        },
        serviceTwo(){
          // this.$router.push({path:'/service2'});
          this.$dialog.alert({
            width:280,
            overlay:false,
            // transition:transform(),
            message: '未成年禁止进入'
          });
        },

        rapSkip(p){
          // console.log(this.name);
         // serviceEvent.$emit("service-event",p);
          this.$router.push({path:'/service/serviceQuestion',query:{nameL:p}});
        },

      },
      created(){
          var a=0;
          this.axios.get("https://elm.cangdu.org/v3/profile/explain").then((p)=>{
            // console.log(p.data);
            this.nameArr=p.data;
           for(var i in this.nameArr){
             a++;
             // console.log(this.nameArr[i]);
               if(a<19&&a%2=='0'){
                 // console.log(this.nameArr[i]);
                 this.arr1.push(this.nameArr[i]);
             }else if(a>=26&&a%2!='0'){
                 // console.log(this.nameArr[i]);
                 this.arr1.push(this.nameArr[i]);
             }
           }
          });
      }

    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #serviceCenter{
    background: #f5f5f5;
  }
  #pHead{
    color:white;
    font-size: 1rem;
    font-weight: bold;
    width: 100%;
    padding: 0.4rem 0 0.4rem 0;
    text-align: center;
    background: #26a2ff;
    position: fixed;
    left: 0;
    top: 0;
  }
  #pHead>img{
    width:1rem;
    height:1rem;
    position: absolute;
    top: 0.5rem;
    left: 0.2rem;
  }
  .serviceTel{
    margin-top: 2rem;
    font-size: 0.9rem;
    text-align: center;
    background: white;
    border-bottom: .02rem solid lightgray ;
  }
  .serviceTel1{
    display: inline-block;
    padding-right: 3rem;
    padding-bottom: 1rem;
    text-align: center;
    padding-top: 1rem;
    border-right: 0.02rem solid lightgray;
  }
  .serviceTel1>img,.serviceTel2>img{
    width: 1rem;
    height: 1rem;
  }
  .serviceTel2{
    display: inline-block;
    padding-left: 3rem;
    text-align: center;
    /*padding-bottom: 1rem;*/
    padding-top: 1rem;
  }

  .hotDoor{
    font-size: 1.1rem;
    color: black;
    background: white;
    padding: 1rem 0 1rem 0.6rem;
    border-bottom: 0.02rem solid lightgray;
  }
  .lArrowBg{
    color:gray;
    padding: 0.6rem 0 0.6rem 0.6rem;
    font-size: 0.8rem;
    border-bottom: 0.02rem solid lightgray;
    background:white url("../../assets/rArrowBlack.png") no-repeat;
    background-size: 1rem;
    background-position: right center;
  }
</style>

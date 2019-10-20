<template>
    <div id="downLoad">
      <!--第一部分-->
      <div id="pHead" >
        <img @click="skipRedBao" src="../../assets/lArrow.png" alt="">
        APP下载
      </div>
      <!--第二部分-->
      <div>
        <div class="download">
          <img src="../../assets/download.png" alt="">
          <p>下载饿了么APP</p>
        </div>
        <div class="cashPut3" >
          <div @click="downApp">下载</div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "P_Download",
      methods:{
        skipRedBao(){
          if(this.$route.query.count ==1){
            this.$router.push({path:'/phome'});
          }else{
            this.$router.push({path:'/discountHb'});
          }

        },
        downApp(){
          this.$dialog.alert({
            width:280,
            overlay:false,
            confirmButtonColor:'green',
            message: 'iOS用户请前往appStore安装'
          });
        }
      }
    }
</script>

<style scoped>
 #downLoad{
   font-size: 1rem;
 }
  .download{
    text-align: center;
    padding-top: 1rem ;
    font-size: 0.8rem;
  }
 .download>p{
 margin-top: 0.1rem;
 }
 .download>img{
   width: 7rem;
   height: 7rem;
   border-radius: 0.5rem;
 }
 #pHead{
   color:white;
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
   top: 0.5rem;
   left: 0.2rem;
 }
  .cashPut3{
    margin: 1rem 0.75rem;
    background: limegreen;
    text-align: center;
    color: white;
    font-size: 0.9rem;
    border-radius: 0.2rem;
  }
  .cashPut3>div{
    padding: 0.4rem;
  }
</style>

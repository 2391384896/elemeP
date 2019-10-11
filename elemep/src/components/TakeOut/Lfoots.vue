<template>
    <div id="foots">
      <mt-tabbar >
          <mt-tab-item id="外卖" >
            <img :src="idAss? bottom1:bottom2"  width="24px" height="24px"  @click="ones">
            <p @click="ones" class="L_bottom">外卖</p>
          </mt-tab-item>
          <mt-tab-item id="搜索" >
            <img slot="icon" :src="idBss? guide1:guide2" @click="twos" >
            <p @click="twos" class="L_bottom">搜索</p>
          </mt-tab-item>
          <mt-tab-item id="订单" >
            <img slot="icon":src="idCss? bottomD1:bottomD2" @click="threes">
            <p @click="threes" class="L_bottom">订单</p>
          </mt-tab-item>
          <mt-tab-item id="我的">
            <img slot="icon":src="idDss? head1:head2" @click="fours">
            <p @click="threes" class="L_bottom">我的</p>
          </mt-tab-item>
      </mt-tabbar>
    </div>
</template>

<script>
  export default {
        name: "Lfoots",

      data(){
          return{
            idAss:true,
            idBss:true,
            idCss:true,
            idDss:true,

            bottom1:"../../../static/bottom/bottom1.png",
            bottom2:"../../../static/bottom/bottom11.png",
            guide1:"../../../static/bottom/guide1.png",
            guide2:"../../../static/bottom/guide2.png",
            head1:"../../../static/bottom/head1.png",
            head2:"../../../static/bottom/head2.png",
            bottomD1:"../../../static/bottom/bottomD1.png",
            bottomD2:"../../../static/bottom/bottomD2.png",
          }
      },
      methods:{
          ones(){
            //跳转路由，修改信息页面
            this.$router.push({path:''});
            this.idAss=false;
            this.idBss=true,
              this.idCss=true,
              this.idDss=true
          },
          twos(){
            //跳转路由，修改信息页面
            this.$router.push({path:''});
            this.idBss=false;
            this.idAss=true,
              this.idCss=true,
              this.idDss=true
        },
          threes(){
            //跳转路由，修改信息页面
            this.$router.push({path:''});
            this.idCss=false;
            this.idAss=true,
              this.idBss=true,
              this.idDss=true
        },
          fours(){
            //跳转路由，修改信息页面
            this.$router.push({path:''});
            this.idDss=false;
            this.idBss=true,
              this.idCss=true,
              this.idAss=true
        },
      }
    }
  </script>

<style scoped>
.L_bottom{
  margin: 0.4rem 0 0 0;
}
</style>

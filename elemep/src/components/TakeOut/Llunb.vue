<template>
    <div class="wrapper" >
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(slide1,ind) in Surlo" :key="ind" class="link_to_title">
          <span  @click="combobox(v1)" class="link_to_body link_body" v-for="(v1,i1) in slide1" :key="i1">
            <img :src="Llurl+v1.image_url" alt="" class="link_to_food">
            {{v1.title}}
          </span>
        </swiper-slide>


        <swiper-slide v-for="(slide1,ind) in Surlt" :key="ind+1" class="link_to_title">
          <span @click="combobox(v1)" class="link_to_body" v-for="(v1,i1) in slide1" :key="i1+1">
            <img :src="Llurl+v1.image_url" alt="" class="link_to_food">
            {{v1.title}}
          </span>
        </swiper-slide>

        <div id="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>

      </swiper>
    </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "Llunb",
      components: {
        swiper,
        swiperSlide
      },

      data(){
          return{
            swiperOption:{
              autoplay:true,
              pagination: {           //分页器
                el: '#swiper-pagination',   //分页器选择器
              },
              loop:true,
              paginationClickable: true,
            },
            Lurl:"https://elm.cangdu.org/v2/index_entry",
            eats:[],
            eat:[],
            Surlo:[],
            Surlt:[],
            Llurl:"http://fuss10.elemecdn.com"
          }
      },
      //请求数据
      created(){
       this.axios.get(this.Lurl).then((p)=>{
         this.eats=p.data;
         // console.log(this.eats);
         this.eats.forEach ((index,item)=> {
           this.eat.push(index);
         })
         // console.log(this.eat);
         //分割数组
         this.Surlo.push(this.eat.slice(0,8));
         this.Surlt.push(this.eat.slice(8,16));

       })
      },
      methods:{
        combobox(v1){
          this.$router.push({path:'/LcomboBox',query:{name:v1}})
          this.totalVue.$emit("nameV",v1)
        }
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      }
    }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 10rem;
  }
  .swiper-pagination{
    width: 100%;
    height: 1rem;
    -webkit-transition: .3s opacity;
  }

  .my-bullet：{
  border-radius: .02rem;
  width: .04rem;
  height :.04rem;
  margin :0 .03rem;
  display :inline-block;
  background :rgba(0,0,0,0.20);
  }
  .my-bullet-active{
    background: #3CDBC0;
    width :.16rem
  }


  .link_to_title{
    display: flex;
    flex-wrap:wrap;
  }
  .link_to_body{
    width: 25%;
    text-decoration: none;
    color: cadetblue;
    display: flex;
    flex-direction:column;
    padding-top: .3rem;
    font-size: .6rem;
    text-align: center;
    text-shadow:red;
  }

  .link_to_food {
    width: 45%;
    display: inline-block;
    color: darkgray;
    text-align: center;
    margin-left: 1.3rem;
    margin-bottom: .5rem;

  }
</style>

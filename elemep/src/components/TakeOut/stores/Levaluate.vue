<template>
    <div id="evaluate">
      <div class="Ltitle1">
        <div class="Ltitle_left1">
          <h3>5</h3>
          <p>综合评价</p>
          <p class="Ltitle_left1_p">高于周边商家76.9%</p>
        </div>
        <div class="Ltitle_right1">
          <div class="Ltitle_right1_a">
            <p>服务态度</p>
            <van-rate
              v-model="aa"
              size="10"
              gutter="0"
              allow-half
              void-color="#eee"
            />
            <span>4.7</span>
          </div>
          <div class="Ltitle_right1_b">
            <p>菜品评价</p>
            <van-rate
              v-model="ab"
              size="10"
              gutter="0"
              allow-half
              void-color="#eee"
            />
            <span>4.8</span>
          </div>
          <div class="Ltitle_right1_c">
            <p>送达时间</p><span>分钟</span>
          </div>
        </div>
      </div>
      <div class="Lbody1">
        <div v-for="(i,index) in hsad" :key="index">
           <p class="Lbody_classify" :class="{'Lbody_class' :sun ==index+1}" @click="btns(index+1)">{{i.name}}({{i.count}})</p>
        </div>
      </div>
      <div class="Lfoot1">
        <div v-for="(k,p) in hjas" :key="p" class="Lfoot1_child">
          <img src="//elm.cangdu.org/img/default.jpg" alt="">
          <div class="Lfoot1_child_a">
            <div class="Lfoot1_a">
              <p class="Lfoot1_a_name">{{k.username}}</p>
              <p>{{k.rated_at}}</p>
            </div>
            <div class="Lfoot1_b">
              <van-rate
                v-model="k.rating_star"
                size="10"
                gutter="0"
                allow-half
                void-color="#eee"
              />
              <p>{{k.time_spent_desc}}</p>
            </div>
            <div class="Lfoot1_img">
              <img src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg" alt="">
              <img src="https://fuss10.elemecdn.com/0/74/e0e203f613deff4e456c31e4177d1jpeg.jpeg" alt="">
            </div>
            <div class="Lfad">
              <div v-for="(a,q) in k.item_ratings" >
                <span class="Lfoot1_s">{{a.food_name}}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "Levaluate",
      data(){
          return{
            Loas:"//elm.cangdu.org/ugc/v2/restaurants/3269/ratings/tags",
            Lpingj:"//elm.cangdu.org/ugc/v2/restaurants/3276/ratings?has_content=true&offset=0&limit=10&tag_name=\n",
            aa:4.7,
            ab:4.8,
            hsad:[],
            hjas:[],
            sun:0,
            Limg:[]
          }
      },
      created(){
         this.axios.get(this.Loas).then((p)=>{
           this.hsad=p.data;
           // console.log(this.hsad);
         });
        this.axios.get(this.Lpingj).then((n)=>{
          this.hjas=n.data;
          console.log(this.hjas);
           })

      },
      methods:{
        btns(v){
          this.sun=v;
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #evaluate{
  margin-top: 7.5rem;
    background-color: #f5f5f5;
}
  .Ltitle1{
    display: flex;
    background-color: #fff;
    padding: .8rem .5rem;
    margin-bottom: .5rem;
  }
  .Ltitle_left1{
    text-align: center;
    margin-left: 1rem;
  }
  .Ltitle_right1{
    margin: .3rem 0 0 1.5rem;
  }
  .Ltitle_left1 h3{
    font-size: 1.5rem;
    font-weight: 500;
    color: #f60;
  }
  .Ltitle_left1 h3+p{
    font-size: .85rem;
    color: #666;
    margin-bottom: .1rem;
  }
  .Ltitle_left1_p{
    display: block;
    font-size: .4rem;
    color: #999;
  }
  .Ltitle_right1_a,.Ltitle_right1_b,.Ltitle_right1_c{
    display: flex;
  }
  .Ltitle_right1_a p,.Ltitle_right1_b p,.Ltitle_right1_c p{
    font-size: .8rem;
    color: #666;
    margin-right: .5rem;
  }
  .Ltitle_right1_a span,.Ltitle_right1_b span{
    width: 3rem;
    margin: .2rem 0 0 .2rem;
    font-size: .75rem;
    color: #f60;
  }
  .Ltitle_right1_c span{
  font-size: .4rem;
    margin: .2rem 0 0 .1rem;
  color: #999;
  }
  .Lbody1{
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    padding: .5rem;
  }
  .Lbody_classify{
    font-size: .8rem;
    color: #6d7885;
    padding: .3rem;
    background-color: #ebf5ff;
    border-radius: .2rem;
    border: 1px;
    margin: 0 .4rem .2rem 0;
  }
  .Lbody_class{
    background-color: #3190e8;
    color: #fff;
  }
  .Lfoot1{
    background-color: #fff;
    padding: 0 .5rem;
  }
  .Lfoot1_child{
    border-top: 1px solid #f1f1f1;
    display: flex;
    padding: .6rem 0;
  }
  .Lfoot1_child_a{
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  }
  .Lfoot1_child>img{
    width: 1.5rem;
    height: 1.5rem;
    border: .025rem;
    border-radius: 50%;
    margin-right: .8rem;
  }
  .Lfoot1_a{
    display: flex;
    justify-content:space-between;
  }
  .Lfoot1_b{
    display: flex;
    font-size: .75rem;
    color: #666;
    margin-left: .15rem;
  }
  .Lfoot1_a_name{
    color: #666;
    margin-bottom: .2rem;
  }
  .Lfoot1_a_name+p{
    color: #999;
    font-size: .4rem;
  }

  .Lfoot1_img img {
    width: 3rem;
    height: 3rem;
    margin-right: .4rem;
  }
  .Lfad{
    display: flex;
    flex-direction:row
  }
  .Lfoot1_s {
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: .55rem;
    color: #999;
    width:2.2rem;
    padding: .2rem;
    border: .025rem solid #ebebeb;
    border-radius: .15rem;
    margin-right: .3rem;
    margin-bottom: 4px;
  }
</style>

<template>
    <div id="ComboBox">
      <div class="Ltitle">
        <img src="../../../../static/bottom/left.png"  @click="Lreas"/>
        <h3>{{Lname.title}}</h3>
      </div>
      <div class="Lflax">
        <div class="Lblack" :class="{Lb_inds:Lone}" @click="Lak47_one">
          <p v-html="!Lone?Lname.title:'分类'"></p>
          <img :src="Lone?Secf:Src" :class="{Lrate:Lone}" >
        </div>
        <div class="Lblacks" @click="Lak47_two" :class="{Lb_ind:Ltwo}">
          <p>排序</p>
          <img :src="Ltwo?Secf:Src" :class="{Lrate:Ltwo}" >
        </div>
        <div class="Lblacks" @click="Lak47_three" :class="{Lb_ind:Lthree}">
          <p>筛选</p>
          <img :src="Lthree?Secf:Src" :class="{Lrate:Lthree}">
        </div>
      </div>

      <div class=" Lcomnobox animated bounceInDown" :class="{'animated bounceOutUp': !Lone }" >
            <div v-for="(i,index) in Larrarone[0]" :key="index" class="list">
            <p>{{i.name}}</p>
            <span>{{i.count}}</span>
          </div>
          <div class="Lfather" >
            <div v-for="(i,index) in Larrartwo[0]" :key="index" class="Llist" :class="{'L_list' :num ==index+1}" @click="List(index+1,i.sub_categories)">
              <div>
                <img src="../../../../static/bottom/head1.png"  />
                <p>{{i.name}}</p>
              </div>

              <div class="Llist_child">
                <span>{{i.count}}</span>
              </div>

            </div>
            <div class="Lright">
              <div v-for="(k,j) in Lslice" :class="{Lblue : pu==j+1}" :key="j" @click="Lblues(j+1,k)">
                <p>{{k.name}}</p>
                <span>{{k.count}}</span>
              </div>
            </div>
          </div>
        </div>
      <div class="Lselect animated bounceInDown" :class="{'animated bounceOutUp': !Ltwo }" >
        <div v-for="(q,w) in Lsort" :key="w" class="Lpingf" >
          <img :src="q.img_Url" alt="">
          <div @click="Ldianj(w+1)" :class="{bgc_img :sun==w+1}" class="Lbgc">
            <p>{{q.name}}</p>
          </div>

        </div>
      </div>
      <div class="Lspinner animated bounceInDown" :class="{'animated bounceOutUp': !Lthree }" >
         <div>
           <p class="Lone">配送方式</p>
           <div class="Ltwo" :class="{Lfengn:Ltwo1}" @click="Lfeng">
               蜂鸟专送
           </div>
           <p class="Lone">商家属性(可以多选)</p>
           <div class="Lshux">
             <div @click="Lz_img1" :class="{L_img1:!img_p1}">
               <img :src="img_p1?img_Src1:img_Src" >
               <p>品牌之家</p>
             </div>
             <div @click="Lz_img2" :class="{L_img2:!img_p2}">
               <img :src="img_p2?img_Src2:img_Src" >
               <p>外卖保</p>
             </div>
             <div @click="Lz_img3" :class="{L_img3:!img_p3}">
               <img :src="img_p3?img_Src3:img_Src">
               <p>准时达</p>
             </div>
             <div @click="Lz_img4" :class="{L_img4:!img_p4}">
               <img :src="img_p4?img_Src4:img_Src" >
               <p>新店</p>
             </div>
             <div @click="Lz_img5" :class="{L_img5:!img_p5}">
               <img :src="img_p5?img_Src5:img_Src">
               <p>在线支付</p>
             </div>
             <div @click="Lz_img6" :class="{L_img6:!img_p6}">
               <img :src="img_p6?img_Src6:img_Src" >
               <p>开发票</p>
             </div>

           </div>
           <div class="Lthree_foot">
             <span class="Lfoot_one" @click="Lover">清空</span>
             <span @click="Lred">确定{{index}} </span>
           </div>
         </div>
      </div>
      <div class="Lshop_Body" :class="{Lopit:Lone}" @click="Lone = !Lone">
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
    </div>
</template>

<script>
    export default {
        name: "LcomboBox",
      data(){
          return{
            Lname:[],
            Lurl:"http://elm.cangdu.org/shopping/v2/restaurant/category?latitude=31.146643&longitude=121.381662\n",
            Luurl:"https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762",
            Lstores:"http://elm.cangdu.org/shopping/restaurants?latitude=31.202277&longitude=121.401495&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=",

            LdianUrl:" http://elm.cangdu.org/shopping/restaurants?latitude=31.202277&longitude=121.401495&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=",

            Ldianthree:"&delivery_mode[]=null",
            Ls:"",
            LshopUrl:"//elm.cangdu.org/img/",
            Src:"../../../../static/bottom/xial.png",
            Secf:"../../../../static/bottom/shangl.png",
            Ltwo1:false,
            Lone:false,
            Ltwo:false,
            Lthree:false,
            store:[],
            Leats:[],
            Larrarone:[],
            Larrartwo:[],
            pu:0,
            num:0,
            Lslice:[],
            LforE:[],
            Lsort:[
                {name:'智能排序',img_Url:"../../../../static/bottom/paixu.png"},
                {name:'距离最近',img_Url:"../../../../static/bottom/dingwei.png"},
                {name:'销量最高',img_Url:"../../../../static/bottom/huo.png"},
                {name:'起送价最低',img_Url:"../../../../static/bottom/money.png"},
                {name:'配送速度最快',img_Url:"../../../../static/bottom/time.png"},
                {name:'评分最高',img_Url:"../../../../static/bottom/xingx.png"},
              ],
            img_p1:true,
            img_p2:true,
            img_p3:true,
            img_p4:true,
            img_p5:true,
            img_p6:true,
            img_Src1:'../../../../static/bottom/pin.png',
            img_Src2:'../../../../static/bottom/bao.png',
            img_Src3:'../../../../static/bottom/zhun.png',
            img_Src4:'../../../../static/bottom/xin.png',
            img_Src5:'../../../../static/bottom/zhi.png',
            img_Src6:'../../../../static/bottom/piao.png',
            img_Src:"../../../../static/bottom/duitwo.png",
            sun:0,
            index:0,
          }
      },
      created(){
          this.Lname=this.$route.query.name;
          // console.log(this.Lname);
          this.totalVue.$on("nameV",(v)=>{
            this.Lname=v;
            // console.log("123456",v);
          });
        this.axios.get(this.Lurl).then((p)=> {
          this.Leats = p.data;
          console.log(this.Leats);
          this.Larrarone.push(this.Leats.slice(0,1));
          this.Larrartwo.push(this.Leats.slice(1));

        });
        this.axios.get(this.Luurl).then((p)=>{
          this.store=p.data;
          // console.log(this.store);
        })
        // this.List(1,this.Larrartwo[1].sub_categories)

      },
      methods:{
        Lreas(){
          this.$router.push({path:'/lbody'})
        },
        Lak47_one(){
          this.Lone = !this.Lone;
          this.Ltwo =false,
          this.Lthree =false
        },
        Lak47_two(){
          this.Ltwo = !this.Ltwo;
          this.Lone =false,
          this.Lthree =false
        },
        Lak47_three(){
          this.Lthree = !this.Lthree;
          this.Lone =false,
          this.Ltwo =false

        },
        List(v,i){
          this.num = v;
          console.log(i);
          this.Lslice.push(i.slice(1));
          // console.log(this.Lslice);
          this.Lslice.forEach((p)=>{
            this.Lslice=p;
            // console.log(this.Lslice);
          })
        },
        Ldianj(k){
          this.sun = k;
          console.log(k);
          console.log(this.Ls);
          if(k==1){
             this.axios.get(this.LdianUrl+'0'+this.Ldianthree).then((p)=>{
               this.store=p.data;
             })
          }else if(k==2){
            this.axios.get(this.LdianUrl+'5'+this.Ldianthree).then((p)=>{
              this.store=p.data;
            })
          }else if(k==3){
            this.axios.get(this.LdianUrl+'6'+this.Ldianthree).then((p)=>{
              this.store=p.data;
            })
          }else if(k==4){
            this.axios.get(this.LdianUrl+'1'+this.Ldianthree).then((p)=>{
              this.store=p.data;
            })
          }else if(k==5){
            this.axios.get(this.LdianUrl+'2'+this.Ldianthree).then((p)=>{
              this.store=p.data;
            })
          }else{
            this.axios.get(this.LdianUrl+'3'+this.Ldianthree).then((p)=>{
              this.store=p.data;
            })
          }
        },
        Lz_img1(){
          this.img_p1 =!this.img_p1;
          if(this.img_p1){
            this.index--;
            // console.log(this.index);
            if(this.index<=0){
               this.index = 0;
            }
          }else{
            this.index++;
            // console.log(this.index);
          }
        },
        Lz_img2(){
          this.img_p2 =!this.img_p2
          if( this.img_p2){
            this.index--;
            // console.log(this.index);
            if(this.index<=0){
              this.index = 0;
            }
          }else{
            this.index++;
            // console.log(this.index);
          }
        },
        Lz_img3(){
          this.img_p3 =!this.img_p3
          if( this.img_p3){
            this.index--;
            // console.log(this.index);
            if(this.index<=0){
              this.index = 0;
            }
          }else{
            this.index++;
            // console.log(this.index);
          }
        },
        Lz_img4(){
          this.img_p4 =!this.img_p4;
          if( this.img_p4){
            this.index--;
            // console.log(this.index);
            if(this.index<=0){
              this.index = 0;
            }
          }else{
            this.index++;
            // console.log(this.index);
          }

        },
        Lz_img5(){
          this.img_p5 =!this.img_p5;
          if( this.img_p5){
            this.index--;
            if(this.index<=0){
              this.index = 0;
            }
          }else{
            this.index++;
          }
        },
        Lz_img6(){
          this.img_p6 =!this.img_p6;
          if( this.img_p6){
            this.index--;
            if(this.index<=0){
              this.index = 0;
            }
          }else{
            this.index++;
          }
        },
        Lover(){
            this.img_p1=true,
            this.img_p2=true,
            this.img_p3=true,
            this.img_p4=true,
            this.img_p5=true,
            this.img_p6=true,
              this.Ltwo1 = false,
              this.index = 0
        },
        Lfeng(){
          this.Ltwo1=!this.Ltwo1;
          if( !this.Ltwo1){
            this.index--;
            if(this.index<=0){
              this.index = 0;
            }
          }else{
            this.index++;
          }
        },
        Lswitch(a){
          this.$router.push({path:'/lstore',query:{asgid:a}});
          // console.log("123456789", a);
          this.totalVue.$emit("lstore", a)
        },
        Lblues(b,c){
          this.pu = b;
          console.log(c);
          this.Ls=c.id;
          console.log(this.Ls);
          this.axios.get(this.Lstores+this.Ls+ '&order_by=null&delivery_mode[]=null').then((p)=>{
            this.store=p.data;
            console.log(this.store);
          })
        },
        Lred(){
          let abc=this.mun(1, 6);
          // console.log(abc);
          this.axios.get(this.LdianUrl+abc+this.Ldianthree).then((p)=> {
            this.store = p.data;
          })
        },

        mun(x,y){
          return Math.floor(Math.random()*(y-x+1) +x)
        }
      },
    }
 </script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #ComboBox{
    position: relative;
  }
  /*第三个页面样式*/
  .Lspinner{
    width: 100%;
    box-sizing: border-box;

  }
 .Lspinner>div{
   /*height: 9rem;*/
   /*background: red;*/
 }
 .Lone{
   font-size: .8rem;
   color: #333;
   font-weight: 500;
   line-height: 1.5rem;
   /*height: 1.5rem;*/
   text-align: left;
   padding-left: .5rem;
   margin-top: .2rem;
   background-color: #fff;
 }
 .Ltwo{
   display: flex;
   align-items: center;
   border: .025rem solid #eee;
   width: 4.7rem;
   height: 1.4rem;
   font-size: .8rem;
   margin:.2rem .25rem 1rem .5rem;
   border-radius: .125rem;
   padding: 0 .25rem 0 2rem;
   margin-bottom: .25rem;
   background: url("../../../../static/bottom/feng.png")no-repeat;
   background-size: 2rem;
 }
  .Lshux{
    font-size: .7rem;
    padding-left: .5rem;
    display: flex;
    flex-direction:row;
    flex-wrap:  wrap;
  }
 .Lshux>div{
   display: flex;
   align-items: center;
   border: .025rem solid #eee;
   width: 5.2rem;
   height: 1.4rem;
   margin-right: .25rem;
   border-radius: .125rem;
   padding: 0 .25rem;
   margin-bottom: .25rem;
 }
 .Lshux img{
   width: .8rem;
   height: .8rem;
   margin: .1rem .5rem 0 0;
 }
 .L_img1,.L_img2,.L_img3,.L_img4,.L_img5,.L_img6{
   color: blue;
 }
 .Lthree_foot{
   display: flex;
   background-color: #f1f1f1;
   margin: .5rem 0;
   width: 100%;
   box-sizing: border-box;
   padding: .3rem .2rem;
 }
 .Lfoot_one{
   background-color: #fff;
   margin-right: .5rem;
   border: .025rem solid #fff;
 }
  .Lfoot_one,.Lfoot_one+span{
    width: 50%;
    height: 1.8rem;
    font-size: .8rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    text-align: center;
  }
  .Lfoot_one+span{
    background-color: #56d176;
    color: #fff;
    border: .025rem solid #56d176;
  }
  .Lfengn{
    color: blue;
    background: url("../../../../static/bottom/duitwo.png")no-repeat;
    background-size:.7rem;
    background-position: .7rem center;
  }

  /*第二个页面样式*/
  .Lpingf{
    width: 18.75rem;
     display: flex;
  }
  .Lbgc{
    line-height: 2.5rem;
    flex: auto;
    text-align: left;
    text-indent: .25rem;
    color: #666;
    font-size: .7rem;
    border-bottom: .025rem solid #e4e4e4;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Lpingf img {
    width: .9rem;
    height: .9rem;
    margin: .8rem 1rem 0 1rem;
  }
  .bgc_img{
    color: blue;
    background: url("../../../../static/bottom/duitwo.png") no-repeat;
    background-size: .9rem;
    background-position: 14rem center;
  }
  .Lselect,.Lspinner{
    background: white;
    position: absolute;
    top: 4.2rem;
    left: 0;
    z-index: 100;
  }
  .Lcomnobox{
    background: white;
    z-index: 1000;
  }


  /*第一个页面样式*/

  .Ltitle{
    display: flex;
    padding: .5rem 0;
    font-weight: 500;
    color: white;
    font-size: .9rem;
    background-color: #3190e8;
    width: 100%;
  }
  .Ltitle>img{
    width: 1rem;
    height: 1rem;
    margin:.3rem  6rem 0 .3rem;
  }
  .Lflax{
    display: flex;
    flex-direction:row;
    border-bottom:.025rem solid #e4e4e4;
    padding-bottom: .2rem;
    /*text-align: center;*/
  }
  .Lblack,.Lblacks{
    display: flex;
    font-size: .77rem;
    padding:0 1rem ;
    width: 4rem;
    height: 1rem;
    margin: .3rem 0;
  }
  .Lblacks>p{
    padding:0 .1rem 0 .8rem;
  }
  .Lblack>img,.Lblacks>img{
    margin:.3rem 0 0 .3rem;
    width: .6rem;
    height: .6rem;
    transition: .5s linear;
  }
  .Lblacks{
    border-left: .025rem solid #e4e4e4;
  }
  .Lb_inds{
    padding:0 .1rem 0 1.9rem;
    color: blue;
  }
  .Lb_ind{
    color: blue;
  }
  .Lrate{
    transform: rotate(-180deg);
    transition: .5s linear;
  }
  .Lblue{
    color: blue;
  }

  .Lfather{
    position: relative;
    margin: 0;
    box-sizing: border-box;
    background-color: #f1f1f1;
    /*transition: all 1s linear;*/
  }
  /**/

  .Llist,.list{
    z-index: 200;
    display: flex;
    font-size: .7rem;
    width: 9.3rem;
    padding: .5rem;
  }
  .Llist{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    /*margin-left: 2rem;*/
    background: url("../../../../static/bottom/right.png") no-repeat ;
    background-size: .7rem ;
    background-position: right center;
  }
  .Llist span,.list>span{
    background-color: #ccc;
    font-size: .4rem;
    color: #fff;
    padding: 0 .1rem;
    border: .025rem solid #ccc;
    border-radius: .8rem;
    margin-right: .25rem;
  }
  .Llist_child{
    margin: 0;
    padding: 0;
    height: 1rem;
  }
  .L_list{
    background-color: white;
  }
  .Llist img{
    margin: 0 .5rem 0 .7rem;
    width: .8rem;
    height: .8rem;
  }
  .Llist>div{
    display: flex;
  }
  .Llist span{
    display: inline-block;
    /*margin-top: .5rem;*/
  }
  .Llist p{
    /*padding-left: 1.7rem;*/
  }
  .list>p{
    margin-left: 1rem;
  }
  .list>span{
    margin-left: 3rem;
  }
  .list{
     padding: .7rem 0;
    background-color: #f1f1f1;
  }
  .Lright{
    width: 8.5rem;
    padding: .5rem;
    position: absolute;
    top: -2.3rem;
    right: 0;
    flex: 1;
    background-color: #fff;
    padding-left: .5rem;
    height: 17.3rem;
    overflow: auto;

  }
  .Lright div{
    font-size: .7rem;
    display: flex;
    justify-content: space-between;
    height: 1.8rem;
    line-height: 1.8rem;
    padding-right: .5rem;
    border-bottom: .025rem solid #e4e4e4;
  }

  /*商铺*/
  .Lopit{
    display: none;
    transition: .5s linear;
  }
  .Lshop_Body{
    position: absolute;
    top: 4.2rem;
    left: 0;
    height: 29rem;
    overflow: auto;
    transition: .5s linear;
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

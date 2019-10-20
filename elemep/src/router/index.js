import Vue from 'vue'
import Router from 'vue-router'
import Lbody from '../components/TakeOut/Lbody'
import Ltake from '../components/TakeOut/Ltake'
import Shouye from '../components/ytg/Shouye'
import Tsearch from '../components/ytg/Tsearch'
import Tshop from '../components/ytg/Tshop'
import Tsearch2 from '../components/ytg/Tsearch2'
import Tregister from '../components/ytg/Tregister'
import Treset from '../components/ytg/Treset'
import Woshishi from '../components/ytg/Woshishi'
import Tqrdd from '../components/ytg/Tqrdd'
import Tremarks from '../components/ytg/Tremarks'
import Txzdz from '../components/ytg/Txzdz'
import Tsearch3 from '../components/ytg/Tsearch3'
import Tsearch4 from '../components/ytg/Tsearch4'
import Tfptt from '../components/ytg/Tfptt'
import Ttjdz from '../components/ytg/Ttjdz'
import Tddlb from '../components/ytg/Tddlb'
Vue.use(Router)

//赵薇
import pHome from '@/components/Personal/P_Home'
//账户
import accountInfo from '@/components/Personal/P_AccountInfo'
import accountChange from '@/components/Personal/P_AccountChange'
import accountAddress from '@/components/Personal/P_Account_Address'
import addAddress from '@/components/Personal/P_Account_NewAddress'
//余额
import myMoney from '@/components/Personal/P_Money'
import moneyQuestion from '@/components/Personal/P_MoneyQuestion'
//优惠
import myDiscount from '@/components/Personal/P_Discount'
import myDiscountHb from '@/components/Personal/P_DiscountRedbao'
import discountHbInfo from "@/components/Personal/P_DiscountRedbaoInfo"
import discountVoucher from '@/components/Personal/P_DiscountVoucher'
import discounthbCash from "@/components/Personal/P_DiscountRedbao_Cash"
import discounthbHistoy from "@/components/Personal/P_DiscountRedbao_History"
import discounthbRecommendInfo from "@/components/Personal/P_DiscountRedbao_RecommendInfo"
import discountVouInfo from "@/components/Personal/P_DiscountVoucherInfo"
//下载积分
import download from "@/components/Personal/P_Download"
import integral from "@/components/Personal/P_Integral"
import integralInfo from "@/components/Personal/P_Integral_jifenInfo"
//会员
import vipCenter from '@/components/Personal/vipCenter'
import vipCenterInfo from '@/components/Personal/vipCenter_Info'
import vipCenterBuy from '@/components/Personal/vipCenter_Buy'
import vipCenterCash from '@/components/Personal/vipCenter_Cash'
import vipCenterBuyRecord from '@/components/Personal/vipCenter_BuyRecord'
import serviceQuestion from '@/components/Personal/P_ServiceQuestion'
import service from '@/components/Personal/P_Service'



//刘振宇
import Lstore from '../components/TakeOut/stores/Lstore'
import Levaluate from '../components/TakeOut/stores/Levaluate'
import Lrestaurant from '../components/TakeOut/stores/Lrestaurant'
import Lrightrouter from '../components/TakeOut/stores/LrightRouter'
import ShopDetail from '../components/TakeOut/stores/ShopDetail'
import ShopSafe from '../components/TakeOut/stores/ShopSafe'
import LcomboBox from '../components/TakeOut/stores/LcomboBox'
Vue.use(Router)
export default new Router({
  routes: [

    {path:"/",redirect:"/Shouye"},
    {path:"/Shouye",component:Shouye,name:"Shouye"},
    {path:"/Tddlb",component:Tddlb},
    {path:"/lbody",component:Lbody,name:"lbody"},
    {path:"/ltake",component:Ltake,name:"ltake"},
    {path:"/Tsearch",component:Tsearch,name:"Tsearch"},
    {path:"/Tshop",component:Tshop,name:"Tshop"},
    {path:"/Tsearch2",component:Tsearch2,name:"Tsearch2"},
    {path:"/Tregister",component:Tregister,name:"Tregister"},
    {path:"/Treset",component:Treset,name:"Treset"},
    {path:"/Woshishi",component:Woshishi},
    {path:"/Tqrdd",component:Tqrdd},
    {path:"/Tremarks",component:Tremarks},
    {path:"/Txzdz",component:Txzdz},
    {path:"/Tsearch3",component:Tsearch3},
    {path:"/Tsearch4",component:Tsearch4},
    {path:"/Tfptt",component:Tfptt},
    {path:"/Ttjdz",component:Ttjdz},


//赵薇
    {path:'/phome',component:pHome},
    //账户
    {path:'/account',component:accountInfo},
    {path:'/accountChange',component:accountChange},
    {path:'/accountAddress',component:accountAddress},
    {path:'/addAddress',component:addAddress},
    //余额
    {path:'/money',component:myMoney},
    {path:'/moneyInfo',component:moneyQuestion},
    //优惠
    {path:'/discount',component:myDiscount,children:[
        {path:'',redirect: 'discountHb'},
        {path:'discountHb',component:myDiscountHb},
        {path:'discountVoucher',component:discountVoucher},
      ]},
    {path:'/discountHbInfo',component:discountHbInfo},
    {path:'/hbCash',component:discounthbCash},
    {path:'/hbHistory',component:discounthbHistoy},
    {path:'/hbRecommendInfo',component:discounthbRecommendInfo},
    {path:'/discountVouInfo',component:discountVouInfo},
    {path:'/download',component:download},
    {path:'/integral',component:integral},
    {path:'/integralInfo',component:integralInfo},
    //会员
    {path:'/vipCenter',component:vipCenter},
    {path:'/vipCenterInfo',component:vipCenterInfo},
    {path:'/onlineCenterBuy',component:vipCenterBuy},
    {path:'/CashVip',component:vipCenterCash},
    {path:'/buyRecord',component:vipCenterBuyRecord},
    {path:'/service',component:service},
    {path:'/service/serviceQuestion',component:serviceQuestion},

    //刘振宇
    {path:"/lbody",component:Lbody,name:"lbody"},
    {path:"/lstore",component:Lstore,children:[
        {path:"/lstore",redirect:"Lrestaurant"},
        {path:"Lrestaurant",component:Lrestaurant,name:"Lrestaurant",
          meta:{keepAlive:true}
        },

        {path:"Levaluate",component:Levaluate,name:"Levaluate"}
      ]},
    {path:"/ltake",component:Ltake},
    {path:"/Shopsafe",component:ShopSafe},
    {path:"/ShopDetail",component:ShopDetail},
    {path:"/Lrightrouter",component:Lrightrouter},
    {path:"/Shouye",component:Shouye,name: "shouye"},
    {path:"/LcomboBox",component:LcomboBox}
  ],
})

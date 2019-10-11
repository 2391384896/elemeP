import Vue from 'vue'
import Router from 'vue-router'
import Lbody from '../components/TakeOut/Lbody'
import Ltake from '../components/TakeOut/Ltake'
import Shouye from '../components/ytg/Shouye'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/lbody",component:Lbody},
    {path:"/ltake",component:Ltake},
    {path:"/Shouye",component:Shouye}
  ],
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//样式区
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import Shipei from '../shepei'

//刘振宇
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'vant/lib/index.css';

import animated from 'animate.css' // npm install animate.css --save安装，在引入
Vue.use(animated)
// require styles
//刘振宇
import { Rate } from 'vant';
import { Tab, Tabs } from 'vant';
import { Stepper } from 'vant';
// import animated from 'animate.css';
// Vue.use(animated);
Vue.use(Stepper);


Vue.use(Tab).use(Tabs);
Vue.use(Rate);
//网络请求
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Switch } from 'vant';

Vue.use(Switch);
import store from './store'

Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)

// require styles

Vue.config.productionTip = false
Vue.use(MintUI,Header,Tabbar,TabItem)


//personal修改(赵薇)
// import { Tab, Tabs } from 'vant';
import { Field } from 'vant';
import { Dialog } from 'vant';
import { Button } from 'vant';
import { CountDown } from 'vant';
import { RadioGroup, Radio } from 'vant';

Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(CountDown);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Field);
// Vue.use(Tab).use(Tabs);

Vue.prototype.totalVue=new Vue();
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,Shipei
  },
  data:{
    eventHub:new Vue()
  },
  template: '<App/>'
})

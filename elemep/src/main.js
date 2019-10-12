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
// require styles
//网络请求
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// require styles

Vue.config.productionTip = false
Vue.use(MintUI,Header,Tabbar,TabItem)

new Vue({
  el: '#app',
  router,
  components: {
    App,Shipei
  },
  template: '<App/>'
})

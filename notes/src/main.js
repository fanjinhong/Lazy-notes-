import Vue from 'vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import * as echarts from 'echarts';
import {Message} from 'element-ui'
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//axios.defaults.baseURL = env.baseURL;



// // 接口错误拦截
// axios.interceptors.response.use(function(response) {
//   let res = response.data;
//   let path = location.hash;
//   if(res.status == 0) {
//     return res.data;
//   } else if(res.status == 10) {
//     if(path != '#/index') {
//       window.location.href = '/#/login';
     
//     }
//     return Promise.reject(res);
//   } else {
//     Message.warning(res.msg);
//     return Promise.reject(res);
//   }
// },(error)=>{
//   let res = error.response;
//   Message.error(res.data.msg);
//   return Promise.reject(error);
// });
// Vue.use(Message);
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.prototype.$message = Message;
new Vue({
  echarts,
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import {Message, Form, FormItem, Button, Input, Row, Col, Card} from 'element-ui'
import store from './store/index'

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//axios.defaults.baseURL = env.baseURL;

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
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


Vue.config.productionTip = false

Vue.prototype.$message = Message;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

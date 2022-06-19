// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueI18n from 'vue-i18n';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';

library.add(faShoppingCart, faInstagram, faFacebookSquare, faCaretDown)
Vue.component('font-awesome-icon', FontAwesomeIcon) 

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueI18n);
Vue.use(VueAwesomeSwiper);


const i18n = new VueI18n({
  locale: 'zhTW'
});
Vue.use(VeeValidate, {
  events: 'input|blur',
  i18n,
  dictionary: {
    zhTW
  }
});

Vue.component('Loading', Loading);
Vue.filter('currency',currencyFilter);

axios.defaults.withCredentials = true;


/* eslint-disable no-new */

new Vue({
  i18n,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    const api=`${process.env.APIPATH}/api/user/check`;
    axios.post(api).then(
        (response) => {console.log(response.data);                 
                      if(response.data.success){
                        next();
                      }else{
                        next({
                          path:'/login',
                        });
                      };                                                                       
        }                  
    );
  }else{next();}
})

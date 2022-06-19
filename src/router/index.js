import Vue from 'vue';
import Router from 'vue-router';

import About from '@/components/Frontstage/About';
import News from '@/components/Frontstage/News';
import Contact from '@/components/Frontstage/Contact';
import Allproducts from '@/components/Frontstage/Allproducts';
import Course from '@/components/Frontstage/Course';
import Cloth from '@/components/Frontstage/Cloth';
import Accessory from '@/components/Frontstage/Accessory';
import FrontMyorder from '@/components/Frontstage/FrontMyorder.vue';
import FrontMycheckout from '@/components/Frontstage/FrontMycheckout.vue';
import Myfavorite from '@/components/Frontstage/Myfavorite.vue';


import Dashboard from '@/components/Backstage/Dashboard';
import Login from '@/components/Backstage/pages/Login';
import Products from '@/components/Backstage/pages/Products';
import Coupons from '@/components/Backstage/pages/Coupons';

Vue.use(Router)


export default new Router({
  routes: [


    {
      name: '關於我們',  //元件呈現的名稱
      path: '/',  //對應的虛擬路徑
      component: About,  //對應的元件
    },

    {
      name: '最新資訊',  //元件呈現的名稱
      path: '/news',  //對應的虛擬路徑
      component: News,  //對應的元件
    },

    {
      name: '全部商品',  //元件呈現的名稱
      path: '/allproducts',  //對應的虛擬路徑
      component: Allproducts,  //對應的元件
    },

    {
      name: '我的最愛',  //元件呈現的名稱
      path: '/myfavorite',  //對應的虛擬路徑
      component: Myfavorite,  //對應的元件
    },

    {
      name: '訓練課程',  //元件呈現的名稱
      path: '/course',  //對應的虛擬路徑
      component: Course,  //對應的元件
    },

    {
      name: '運動服飾',  //元件呈現的名稱
      path: '/cloth',  //對應的虛擬路徑
      component: Cloth,  //對應的元件
    },

    {
      name: '精選配件',  //元件呈現的名稱
      path: '/accessory',  //對應的虛擬路徑
      component: Accessory,  //對應的元件
    },
    
    {
      name: '最新資訊',  //元件呈現的名稱
      path: '/contact',  //對應的虛擬路徑
      component: Contact,  //對應的元件
    },

    {
      name: '我的訂單',  //元件呈現的名稱
      path: '/frontmyorder',  //對應的虛擬路徑
      component: FrontMyorder,  //對應的元件
    },

    {
      name: '金流付款',  //元件呈現的名稱
      path: '/frontmycheckout/:orderId',  //對應的虛擬路徑
      component: FrontMycheckout,  //對應的元件
    },

    {
      path: '*',
      redirect: 'login',
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      // meta: { requiresAuth: true },
      children:[
        {
          path: 'products',
          name: 'products',
          component: Products,
          meta:  { requiresAuth: true }, 
        },
        {
          path: 'coupons',
          name: 'coupons',
          component: Coupons,
        },
      ],
    },

    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],  
});

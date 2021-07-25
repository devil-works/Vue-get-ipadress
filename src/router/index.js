import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';
import GetIp from '@/pages/GetIp.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/getip',
      component: GetIp
    },
  ]
});

export default router;
import Vue from 'vue';
import VueRouter from 'vue-router';
// import axios from 'axios';
// import ElementUI from 'element-ui';

// import './common/style/_common.scss';


import routes from './common/js/router';
import store from './common/js/store';

Vue.use(VueRouter);

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.prototype.$axios = axios;

const router = new VueRouter({
    routes: routes
});

const app = new Vue({
    router,
    store
}).$mount('#app');


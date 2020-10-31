// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import plus from 'plus'; // use plus
import mui from 'mui'; // use mui
import { Tabbar, TabbarItem, Icon } from 'vant';
import '@/lib/css/reset.css';
import 'lib-flexible/flexible';
import AMapLoader from '@amap/amap-jsapi-loader';
import plusExtends from '@/assets/js/plusextends.js';

Vue.config.productionTip = false;
Vue.prototype.$AMapLoader = AMapLoader;
Vue.prototype.$plusExtends = plusExtends;

Vue
  .use(plus)
  .use(mui)
  .use(Icon)
  .use(Tabbar)
  .use(TabbarItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

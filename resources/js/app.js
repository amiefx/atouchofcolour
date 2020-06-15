require('./bootstrap');
window.Vue = require('vue');
import vuetify from './vuetify';
import router from './router/router';
import store from './store';
import DateFilter from './filters/date'

require('./store/subscriber')

import Default from './layouts/Default.vue'
import Blank from './layouts/Blank.vue'
import Mardom from './layouts/Mardom.vue'
import Admin from './layouts/Admin.vue'
import Khod from './layouts/Khod.vue'

Vue.component('default-layout', Default)
Vue.component('blank-layout', Blank)
Vue.component('mardom-layout', Mardom)
Vue.component('admin-layout', Admin)
Vue.component('khod-layout', Khod)


import VueProgressBar from 'vue-progressbar'

const options = {
    color: '#6200ea',
    failedColor: '#874b4b',
    thickness: '2px',
    transition: {
      speed: '0.2s',
      opacity: '0.6s',
      termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
  }

  Vue.use(VueProgressBar, options)

Vue.filter('date', DateFilter)

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import ZoomOnHover from "vue-zoom-on-hover";
Vue.use(ZoomOnHover);

import VueSocialSharing from "vue-social-sharing";
Vue.use(VueSocialSharing);

import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);

import VueMeta from 'vue-meta';
Vue.use(VueMeta)

import VueHtmlToPaper from 'vue-html-to-paper';
const options2 = {
  name: '_blank',
  specs: [
    'fullscreen=no',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css"
  ]
}
Vue.use(VueHtmlToPaper, options2);


import VMdDateRangePicker from "v-md-date-range-picker";
Vue.use(VMdDateRangePicker);

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
Vue.use(Chartkick.use(Chart))


import App from './components/AppComponent';

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
     new Vue({
      //  el: '#app',
        router,
        vuetify,
        store,
        components: {
            'App': App,

        }
    }).$mount('#app')
})


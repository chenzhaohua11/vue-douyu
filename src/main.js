// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import 'lib-flexible'
import './assets/css/font-awesome.css'
import './assets/css/style.css'
Vue.config.productionTip = false
Vue.use(LibFlexible)
Vue.use(Axios, VueAxios)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    template: '<App/>',
    components: { App }
})
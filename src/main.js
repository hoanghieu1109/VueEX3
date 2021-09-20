import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'

import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


createApp(App).mount('#app')

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')

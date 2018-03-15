import Vue from 'vue'
import Vuex from 'vuex'
import { DateTime } from 'luxon'
import { Interval } from 'luxon'
import App from './App.vue'
import _ from 'underscore'

import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

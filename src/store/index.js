import Vue from 'vue'
import Vuex from 'vuex'

import { DateTime } from 'luxon'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countdownToDate: "2018-05-01T20:45:00",
    now: DateTime.local()
},
  mutations: {
    update: state => state.now = DateTime.local()
  }
})

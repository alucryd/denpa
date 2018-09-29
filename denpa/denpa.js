import Vue from 'vue'
import Denpa from './components/Denpa.vue'
import Torrent from './components/Torrent.vue'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { faStopCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowAltCircleUp, faArrowAltCircleDown, faPlayCircle, faStopCircle, faTimesCircle)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('torrent', Torrent)

new Vue({
  el: '#denpa',
  render: h => h(Denpa)
})

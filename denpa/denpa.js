import Vue from 'vue'
import Denpa from './components/Denpa.vue'
import Torrent from './components/Torrent.vue'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faStop } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(
  faArrowDown,
  faArrowCircleDown,
  faArrowUp,
  faArrowCircleUp,
  faPlay,
  faStop,
  faTimes,
  faPlus
)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('torrent', Torrent)

new Vue({
  el: '#denpa',
  render: h => h(Denpa)
})

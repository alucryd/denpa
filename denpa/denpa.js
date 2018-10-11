import Vue from 'vue'
import Denpa from './components/Denpa.vue'
import Torrent from './components/Torrent.vue'

import { Button } from 'bootstrap-vue/es/components'
Vue.use(Button)
import { FormInput } from 'bootstrap-vue/es/components'
Vue.use(FormInput)
import { Layout } from 'bootstrap-vue/es/components'
Vue.use(Layout)
import { ListGroup } from 'bootstrap-vue/es/components'
Vue.use(ListGroup)
import { Nav } from 'bootstrap-vue/es/components'
Vue.use(Nav)
import { Navbar } from 'bootstrap-vue/es/components'
Vue.use(Navbar)
import { Progress } from 'bootstrap-vue/es/components'
Vue.use(Progress)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowCircleDown'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons/faArrowCircleUp'
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'
import { faStop } from '@fortawesome/free-solid-svg-icons/faStop'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'

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

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAMap from 'vue-amap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'a9a50f69ead95a118188e3e60f1fda8e'
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import veeValidate from 'vee-validate'
import vueNoty from 'vuejs-noty'
import router  from './routes'
import {store} from './store'

import 'vuejs-noty/dist/vuejs-noty.css'

Vue.use(VueResource);
Vue.use(veeValidate);

Vue.use(vueNoty , {
	theme:'sunset',
	timeout:2000
});

new Vue({
  el: '#app',
	router,
	store,
  render: h => h(App),
})

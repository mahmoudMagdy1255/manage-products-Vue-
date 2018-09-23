import Vue from 'vue'
import Vuex from 'vuex'

import {products} from './modules/products'
import {saledProduct} from './modules/saledProduct'

Vue.use(Vuex);

export const store = new Vuex.Store({

	modules:{
		products,
		saledProduct
	}

});
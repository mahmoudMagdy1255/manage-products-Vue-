import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './components/home'
import indexProduct from './components/indexProduct'
import addProduct from './components/addProduct'
import editProduct from './components/editProduct'
import showProduct from './components/showProduct'

Vue.use(VueRouter);

export default new VueRouter({
  
	routes:[
		{
			path:'/',
			component:home,
			name:'home'
		},
		{
			path:'/product',
			component:indexProduct,
			name:'product'
		},
		{
			path:'/add-product',
			component:addProduct,
			name:'add-product'
		},
		{
			path:'/edit-product/:id',
			component:editProduct,
			name:'edit-product',
			props:true
		},
		{
			path:'/show-product/:id',
			component:showProduct,
			name:'show-product',
			props:true
		},
	],
	mode:'history'

});

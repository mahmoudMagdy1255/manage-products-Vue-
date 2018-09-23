<template>
<div>
	<div class="show-product">
		<h2>Our Product</h2>


		<div class="search">
			<label for="search">Search</label>
			<input type="search" id="search" placeholder="Enter The Name Of Type" v-model="name" name="search">
		</div>

		<div class="product" v-for="product in allProduct(name)">
			<span>Type : {{ product.type }}</span>
			<span>Price : {{ product.price }}</span>
			<span>Amount : {{ product.amount }}</span>
			<span>Company : {{ product.company }}</span>

			<button class="button" @click="saleProduct(product)">Buy</button>

			<router-link :to="{name:'show-product' , params:{id : product.id} }" > <i class="fa fa-eye"></i> </router-link>
		</div>
	</div>

	<router-link to="/add-product"> <i class="fa fa-plus"></i> </router-link>

</div>
</template>

<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default{
	
  data(){
  	return{
  		name:'',
  	}
  },

  computed:{

  	...mapGetters(['allProduct']),

	isEnabled(){

	    return this.product.type && this.product.price && this.product.amount && this.product.company;
	}

  },

  methods:{
  		saleProduct(product){
  			this.$store.dispatch('saleProduct' , product).then( ()=> {
  				this.$noty.success('Product Has Been Saled Successfully');	
  			}).catch( (error)=>{
  				this.$noty.error(error.message);
  			});
  			
  		},
  }

};
</script>

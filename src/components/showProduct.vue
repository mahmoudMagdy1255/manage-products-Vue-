<template>
<div>
	<div class="show-product">
		<h2> {{ product.company }} Product </h2>

		<div class="product">
			<span>Type : {{ product.type }}</span>
			<span>Price : {{ product.price }}</span>
			<span>Amount : {{ product.amount }}</span>
			<span>Company : {{ product.company }}</span>
			
			<a href="#" @click.prevent='deleteProduct()' style="font-size:20px; margin-left:15px;"> <i class="fa fa-trash"></i> </a>

			<router-link style="font-size:20px; margin-left:15px;" :to="{name: 'edit-product' , params:{id : product.id} }"> <i class="fa fa-pencil-alt"></i> </router-link>

		</div>
	</div>

	<router-link to="/add-product"> <i class="fa fa-plus"></i> </router-link>

</div>
</template>

<script>



export default{
  props:['id'],

  data(){
  	return{
  		product:''
  	}
  },
  created(){
  	this.product = this.$store.getters.findProduct(this.id);
  },
  methods:{
    deleteProduct() {
       
       this.$store.dispatch('deleteProduct' , this.product).then( () => {
          this.$noty.success('Product Has Been Deleted Successfully');
          this.$router.push('/product'); 
       });
        
    }
    
  }
};
</script>

<template>
  
  <div>
    
    <form class="form" @submit.prevent="addProduct()">
      
      <div class="input">
        <label for="type">Type</label>
        <input type="text" id="type" name="type" v-validate="'required|alpha_spaces|min:3|max:12'" placeholder="Enter The Type" v-model="product.type">
        <span v-if="errors.has('type')">{{ errors.first('type') }}</span>
      </div>

      <div class="input">
        <label for="price">Price</label>
        <input type="text" id="price" name="price" 
        v-validate="'required|between:10,1000000'" autocomplete="off" placeholder="Enter The price" v-model="product.price">
        <span v-if="errors.has('price')">{{ errors.first('price') }}</span>
      </div>

      <div class="input">
        <label for="amount">Amount</label>
        <input type="text" id="amount" name="amount" 
        v-validate="'required|between:1,100'" autocomplete="off" placeholder="Enter The amount" v-model="product.amount">
        <span v-if="errors.has('amount')">{{ errors.first('amount') }}</span>
      </div>

      <div class="input">
        <label for="company">Company</label>
        <input type="text" id="company" name="company" v-validate="'required|alpha_spaces|min:3|max:12'" placeholder="Enter The company" v-model="product.company">
        <span v-if="errors.has('company')">{{ errors.first('company') }}</span>
      </div>

      <div class="input">
        <label for="id">ID</label>
        <input type="text" id="id" name="id" v-validate="'required|numeric'" placeholder="Enter The ID" v-model="product.id">
        <span v-if="errors.has('id')">{{ errors.first('id') }}</span>
      </div>

      <div class="input">
        <input type="submit" :disabled="errors.any() || !isEnabled(product)" name="create" value="Create">
      </div>

    </form>

  </div>

</template>

<script>
export default{
  
  data(){
    return{
      product:{
        type:'',
        price:'',
        amount:'',
        id:'',
        company:''
      }
    }
  },
  methods:{


    addProduct() {
      
          this.$store.dispatch('addProduct' , this.product).then( (response) =>{
          this.$noty.success('Product Has Been Created Successfully');
          this.$router.push('/product');    

      }).catch( (error)=>{
          this.$noty.error(error.message);
      });

    },

    isEnabled(){
      return this.product.type && this.product.price && this.product.amount && this.product.company;
  }

  },
};
</script>

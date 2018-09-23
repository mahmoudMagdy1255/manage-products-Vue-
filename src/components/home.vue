<template>

  <div class="body">
    <div class="container">

        <div class="our-links">
          <div> <router-link to="/product"> Show All Products </router-link> </div>
          <div> <router-link to="/add-product"> Create New Product </router-link> </div>
          <div> <router-link to="/delete-product"> Remodve Product </router-link> </div>
          <div> <router-link to="/edit-product"> Update Product </router-link> </div>
        </div>

    </div>
  </div>

</template>

<script>

export default{
  data(){
    return {
      
    }
  },
  methods:{
    
  }
};

</script>

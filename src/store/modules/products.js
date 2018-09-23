export const products = {

	state:{
		products:[
			{id : 1,  type : 'shoes'  , price : 1500  , amount: 3 , company : 'Ranem'},
			{id : 2,  type : 'cars'   , price : 15000 , amount: 2 , company : 'Marcedes'},
			{id : 3,  type : 'Mobile' , price : 10000 , amount: 9 , company : 'Samsung'},
			{id : 4,  type : 'Laptop' , price : 25000 , amount: 5 , company : 'Lenovo'},
		],
	},

	getters:{

		allProduct:(state) => (name) => {
            return state.products.filter(product => product.type.match(name) );
        },

        checkIfProductExistsOnAdding : (state) => (newproduct) => {
            let products = state.products.filter(product=> product.id == newproduct.id || 
            (product.company == newproduct.company && product.type == newproduct.type 
            && product.amount == newproduct.amount) );

            return products;            
        },

        checkIfProductExistsOnEditing : (state) => (currentProduct) => {
            let products = state.products.filter(product=> product.id != currentProduct.id 
                	&& (product.company == currentProduct.company 
                	&& product.type == currentProduct.type && product.amount == currentProduct.amount)
                );

            return products;            
        },

        findProduct : (state) => (id) => {
            return state.products.find(product => product.id == id)
        }
        
	},

	mutations:{

		addProduct(state , {getters,newproduct}){

	    	let getProduct = getters.checkIfProductExistsOnAdding(newproduct);

	    	if (getProduct.length) {
	    		newproduct.invalid = true;
	    	}else {
	    		state.products.push(newproduct);
	    	}
		},

		editProduct(state , {getters,product}){

	    	let getProduct = getters.checkIfProductExistsOnEditing(product);

	    	if (getProduct.length) {
	    		product.invalid = true;
	    	}else {

	    		state.products.splice( state.products.indexOf(product) ,1 );
	    		state.products.push(product);
	    	}
		},

		deleteProduct(state , product){

	    	state.products.splice( state.products.indexOf(product) ,1 );
		},

	},

	actions:{
		addProduct( {commit,getters} , newproduct) {
    		
    	   return new Promise((resolve , reject) => {

    	   		commit('addProduct' , {getters,newproduct});
    	   		
    	   		if (newproduct.invalid) {
    	   			reject(new Error('This ID or this Product Already Exists'));
    	   		}else {
    	   			resolve('true');
    	   		}		

    	   });
		   
	    },

	    editProduct( {commit,getters} , product) {
    		
    	   return new Promise((resolve , reject) => {

    	   		commit('editProduct' , {getters,product});
    	   		
    	   		if (product.invalid) {
    	   			reject(new Error('There Are Another Product Same This'));
    	   		}else {
    	   			resolve('true');
    	   		}		

    	   });
		   
	    },

	    deleteProduct( {commit} , product) {
    		
    	   return new Promise((resolve , reject) => {

    	   		commit('deleteProduct' , product);
    	   		
    	   		resolve('true');		

    	   });
		   
	    },
	}

}
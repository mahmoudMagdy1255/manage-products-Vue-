export const saledProduct = {

	state:{
        saledProduct:[],
	},

	getters:{
	},

	mutations:{

        saleProduct(state , {getters,rootState,product}){
            let getProduct = getters.checkIfProductExistsOnAdding(product);

            if (getProduct.length) {
                rootState.products.products.splice(rootState.products.products.indexOf(product) ,1);
                state.saledProduct.push(product);
            }else {
                product.invalid = true;
            }
        }

	},

	actions:{

		saleProduct( {commit,getters,rootState} , product) {
            
           return new Promise((resolve , reject) => {

                commit('saleProduct' , {getters,rootState  , product});
                
                if (product.invalid) {
                    reject(new Error('This Product Doen Not Exists'));
                }else {
                    resolve('true');
                }     

           });
           
        },

	}

}
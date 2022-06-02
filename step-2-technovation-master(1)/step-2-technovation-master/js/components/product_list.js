/* Component: Product List 
   Contiene la lista de productos, 
   la cual se compone de los subcompontes : Product*/

   
import ProductItem from "./product_item.js";

export default Vue.component("product-list", {
  props: ["products"],
  components: { ProductItem },
  data: function () {
    return {
    
      isLoading: true,
    };
  },
  created: function () {
  
  },
  template: `
     <div class="row">
     <div class="list-group px-0">

     <div>
       <!-- Genera la lista de productos -->
       <product-item :key="item.id" 
                     v-for="item in products" 
                     :product="item"/>
                     </div>
       <!-- En caso no existan productos mostrará el siguiente bloque -->         
       <small v-if="this.products.length == 0" class="text-center my-2">
         No encontramos productos disponibles :(
       </small>
     </div>
   </div>
     `,
});

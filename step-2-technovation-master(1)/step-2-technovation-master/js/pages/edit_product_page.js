export default Vue.component("edit-product-page", {
  data: function () {
    return {};
  },
  methods: {
    goProductsList() {
      this.$router.push("/products");
    },
  },
  created: function () {},
  template: `
    <div class="row" >
        <div class=" d-flex  justify-content-center">
            <img src="https://media.baamboozle.com/uploads/images/26937/1573750648_177496" alt="brocoli" width="150">
        </div>
        <div class="d-flex justify-content-center">
            <button  class="btn btn-white rounded-circle"    style="height: 42px; width: 42px"  @click.prevent="editCategories" >
            <i class="bi bi-pencil"></i></button>
            <p class="d-flex ">Cambiar Imagen</p>
        </div>
        
        <div class="mb-3">
           <label for="exampleFormControlInput1" class="form-label">Nombre del producto</label>
           <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
         </div>
          
         <div class="mb-3">
           <label for="exampleFormControlInput1" class="form-label">Descripcion</label>
           <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
         </div>
          
         <div class="mb-3">
           <label for="exampleFormControlInput1" class="form-label">Precio Venta($)</label>
           <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
         </div>

         <div class=" gap-2 mb-3" >
            <label for="validationDefault04" class="form-label">Categorias</label>
            <select class="form-select" id="validationDefault04" required>
            <option selected></option>
            <option value="1">abarrotes</option>
            <option value="2">aguas y bebidas</option>
            <option value="3">cervezas</option>
            </select>
         </div>

         
         <div class="form-check form-switch d-flex justify-content-end p-4">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
       </div>
       ¿



       

      <div class="d-grid gap-2 p-3">
            <button class="btn-primary"type ="button">Guardar Cambios </button>
            <div class="d-flex flex-column align-items-center">
            <a href="#" class="text-dark fw-bold" @click.prevent="goProductsList">
            Regresar
        </a>
        <p class="mt-5"> Edit product page </p>
        </div>
    </div>
    `,
});

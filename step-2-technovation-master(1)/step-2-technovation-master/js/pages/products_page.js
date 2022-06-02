import CLIENT from "../api/client.js";
import STORAGE from "../utils/storage.js";
import Loader from "../components/loader.js";
import ProductList from "../components/product_list.js";
import CategoryList from "../components/category_list.js";
import SearchInput from "../components/search_input.js";

export default Vue.component("products-page", {
  components: { Loader, ProductList, CategoryList, SearchInput, },
  data: function () {
    return {
      categories:[],
      products: [],
      loading: true,
      search: "",
      current_category: {},
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + STORAGE.get("token"),
      },
    };
  },
  methods: {
    addProduct() {
      this.$router.push("/productadd");
    },

    async setCategory(category) {
      let vm = this;
      vm.current_category = category;
      await vm.getProducts();
    },
    async getProducts() {
      let vm = this;

      let url = "/products/products/";
      url += "?search=" + vm.search;

      if (vm.current_category.name != "Todos") {
        url += "&category=" + vm.current_category.pk;
      }
      console.log(url)
      //Enviamos la petición Via GET
      const response = await CLIENT.get(url, vm.headers);
      // Almacenamos el token si el inicio de sesión es correcto
      vm.products = response.sort((a, b) => {
        return b.discount_price - a.discount_price;
      });
      // Redirigimos al usuario al home
    },
    async getCategories() {
      let vm = this;

      //Enviamos la petición Via GET
      const response = await CLIENT.get(
        "/products/categories/",
        vm.headers
      );

      // Cargamos las categorias
      vm.categories = response;
      // Añadimos la categoria "Todos" con una pk = 0
      vm.categories.unshift({ pk: 0, name: "Todos" });
      // Definimos el primer item de la lista de categorias-> ("Todos")
      vm.current_category = vm.categories[0]; // {pk:0, name:"Todos"}
    },
    async onSearchKeyup(event) {
      // Sincronizamos el valor ingresado por teclado
      // con la propiedad search
      this.search = event.target.value;
      // Actualizamos la lista de productos
      await this.getProducts();
    },
  },
  created: async function () {
    let vm = this;
    try {
      // Cargar la lista de categorias
      await vm.getCategories();
      // Cargar la lista de productos
      await vm.getProducts();
      // Desactivar el Loader
      vm.loading = false;
    } catch (e) {
      //En caso haya un error en las busquedas
      //Se notifica por consola el incidente
      console.warn(e);
    }
  },
  template: `
      <loader v-if="loading"></loader>
      
      <div v-else>
        <category-list :categories="categories" :current="current_category.name" :setCategory="setCategory"/>
        <search-input  :onKeyup="onSearchKeyup"/>

        <product-list :products="products"/>

          <div class="container fixed-bottom pb-2 bg-white">
          <button @click.prevent="addProduct" class="btn btn-primary w-100 py-3 fw-bold">
            <i class="bi bi-plus-circle"></i> Nuevo producto
          </button>
        </div>
      </div>  
    `,
});

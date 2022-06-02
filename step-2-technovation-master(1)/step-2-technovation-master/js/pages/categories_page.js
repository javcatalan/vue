import CLIENT from "../api/client.js";
import STORAGE from "../utils/storage.js";
export default Vue.component("categories-page", {
  data: function () {
    return {
      categorias: [],
      categories: [],
      products: [], //agregado
      titulo: "Nueva categoria",
      tareas: [],
      nuevaTarea: "",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + STORAGE.get("token"),
      },
    };
  },
  methods: {
    async getCategories() {
      let vm = this;

      //Enviamos la petición Via GET
      const response = await CLIENT.get("/products/categories/", vm.headers);
      // Cargamos las categorias
      vm.categories = response;

      const categories_json = JSON.stringify(vm.categories);

      console.log(categories_json);
    },

    //============== metodo post
    async putCategories() {
      let vm = this;
      let envio_categorias = categorias;
      //Enviamos la petición Via put
      const respons = await CLIENT.post("/products/categories/", vm.headers);
      // Cargamos las categorias
      vm.envio_categorias = respons;

      // const enviocategorias = JSON.stringify(categorias);

      console.log(envio_categorias);
    },
    //Agregando tareas
    agregarTarea: function () {
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false,
      });
      //Limpiado el input
      this.nuevaTarea = "";
      localStorage.setItem("categorias", JSON.stringify(this.tareas));
    },
    //===============
    goProductsList() {
      this.$router.push("/products");
    },

    //Editando tarea
    editarTarea: function (index) {
      this.tareas[index].estado = true;
      localStorage.setItem("categorias", JSON.stringify(this.tareas));
    },
    //Eliminando tarea
    eliminar: function (index) {
      this.tareas.splice(index, 1);
      localStorage.setItem("categorias", JSON.stringify(this.tareas));
    },
  },
  created: async function () {
    // LA DATA DE PRODUCTOS SE OBTIENE EN LA PAGINA DE PRODUCTOS -> pages/products_page
    let vm = this;
    await vm.getCategories();
  },

  //Guardando en localstorage
  // created: function () {
  //   let datosBD = JSON.parse(localStorage.getItem("categorias"));
  //   if (datosBD === null) {
  //     this.tareas = [];
  //   } else {
  //     this.tareas = datosBD;
  //   }
  //},
  template: `
    <div class="row " >
        <div class="d-flex flex-column align-items-center">
        <a href="#" class="text-dark fw-bold" @click.prevent="goProductsList">
            Regresar
        </a>
        <p class="mt-5"> Categories page </p>
        </div>

        <div>
        <div class="mt-3" v-for="(item, index) of tareas">

<!-- Campo de las tareas  -->
            <div role="alert" :class="['alert', item.estado ? 'alert-success' : 'alert-danger']"> 
              <div class="d-flex justify-content-between">
                <div>
                {{index}} - {{item.nombre}} - {{item.estado}}
                </div>
                <div>
<!-- Boton de guardar tarea -->
                <button class="btn btn-success" @click="editarTarea(index)">Guardar</button>
<!-- Boton de eliminar tarea -->
                <button class="btn btn-danger" @click="eliminar(index)">Eliminar</button>
                </div>

              </div>

            </div>

          </div>
          <h3>{{titulo}}</h3>
<!-- Agregando el input -->
          <input type="text" class="form-control my-3" v-model="nuevaTarea" v-on:keyup.enter="agregarTarea">
<!-- Boton de agregar categoria -->
          <button class="btn btn-primary" @click="agregarTarea"> Añadir categoria</button>

          
        </div>
    </div>
    `,
});

export default Vue.component("register-page", {
  data: function () {
    return {
      name:'',
      surname:'',
      username:'',
      password:'',
      staff:true,

      checked: true,
      label: "",
      active: 1,
      dataOn: "On",
      dataOff: 'Off'
    };
  },
  mounted() {
    this.checked = Boolean(this.active);
    this.update();
  },
  methods: {
    update() {
      this.label = this.checked ? this.dataOn : this.dataOff;
    },
    goLogin() {    
       this.$router.push("/");
    },
    
    DoSingnUp:async function(){       
      let vm= this;
      try {
        const response = await CLIENT.post("/authentication/sign-up/",{
          name: vm.name,
          surname: vm.surname,
          username: vm.username,
          password: vm.pasword,
        });
        STORAGE.set("token", response.token);
        vm.$router.push("/");
      } catch (e) {
        console.warn(e);
        alert("Error al iniciar sesiòn");
      }
    }
  },
  created: function () {
    const is_logged = !(STORAGE.get("token") ==null);
    if (is_logged) {
      this.$router.push("products");
    }   /** aqui termine de editar esta parte*/
  },
  template: `
      <div class="row">

        <div class="col-12 mt-2"> 
        <form>
         <div class="form-group">
            <label for="name">Nombre de Usuario</label>
            <input
            type="text"
            class="form-control"
            placeholder="Ingresa tus Nombres"
            id="name"
            v-model="name"
            />
         </div>


         <div class="form-group mt-3">
            <label for="username"> Email </label>
              <input
              type="text"
              class="form-control"
              placeholder="jhondoe@mail.com"
              id="username"
              v-model="username"
              />
        </div>

        <div class="form-group mt-3">
            <label for="password">Contraseña</label>
             <input
             type="password"
             class="form-control"
             placeholder="*********"
             id="password"
             v-model="password"
             />
        </div>
<br>
        <div class="col-12 ">
           <p> Soy Administrador (Staff) </p>
          <label class="switch" role="button">
            <input
            type="checkbox"
            :value="active"
            v-model="checked"
            @change="update"
     
            class="circle"
            :class="{
            'circle-on': checked,
            'circle-off': !checked
            }"
            >
               <span>{{label}}</span>
          </label>
          </div>
<br>    
         <div id="aplicacion" class="col-12 justify-content-evenly">
            <h9>
              <input type="checkbox" v-model="terminos">
                Acepto los <b>términos y condiciones</b>, asi mismo
                acepto los <b>terminos de privacidad</b> y trato
                de mis datos personales.
           </h9>
              <button v-if="terminos">Confirmar</button>
         </div>

           <button
             type="button"
             class="my-4 py-3 btn btn-primary fw-bold col-12"
             @click.prevent="DoSingnUp"
             >
                CREAR MI CUENTA
           </button>
  

           <div class="d-flex col-12 justify-content-center">
               ¿Ya tienes una cuenta? 
          </br>
              <a href="#" @click.prevent="goLogin" class="ms-2 text-success fw-bold">INICIA SESIÓN</a>
        </div>
    </div>
        `,
})


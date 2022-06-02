Vue.component("a-component", {
    method:{
        GoToA: Function(){
            this.$router.push('/a')
        },
        GoBack: function(){
this.$router.go(-1)
        }
    },
  template:
   `
  <div>
  "<p>Hola soy el componente a</p>"
  <button v-on:click="GoToA"> ir a a</button>
  </div>
   `
});

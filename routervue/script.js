const Inicio = { template: "<div>Seccion inicio</div>" };
const Compras = { template: "<div>secion compras</div>" };
const Ventas = { template: "<div>seccion ventas</div>" };

const routes = [
  { path: "/", component: Inicio },
  { path: "/compras", component: Compras },
  { path: "/ventas", component: Ventas },
];
const router = new VueRouter({ routes });
new Vue({
  router,
}).$mount("#app");

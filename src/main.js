import Vue from "vue";
import App from "./App.vue";
import VueGlide from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);
Vue.use(VueGlide);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");

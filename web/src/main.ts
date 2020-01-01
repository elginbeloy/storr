import { apolloProvider } from "./vue-apollo";
import App from "./App.vue";
import Vue from "vue";
import VueApollo from "vue-apollo";
import router from "./router";
import store from "./store";

Vue.use(VueApollo);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");

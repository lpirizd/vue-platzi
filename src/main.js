import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "./router";
import VueHighcharts from "vue2-highcharts";
import { VueSpinners } from "@saeris/vue-spinners";

import { dollarFilter, percentFilter } from "@/filters";

Vue.use(VueSpinners);
Vue.component("VueHighcharts", VueHighcharts);
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

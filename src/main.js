import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/icon/iconfont.css";
import "@/assets/scss/main.scss";
import AmapVue from "@amap/amap-vue";

Vue.config.productionTip = false;
AmapVue.config.key =
  "https://webapi.amap.com/maps?v=1.4.15&key=ae4ae078437f01225ce5b2c84e5d5cbe";
Vue.use(ElementUi);
Vue.use(AmapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router";
// import store from "./store";
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

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
let router = null;
let instance = null;

// ========================================
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
// 导出子应用生命周期 挂载前
export async function bootstrap (props = {}) {
  console.log('从父应用继承的数据', props);

  Array.isArray(props.fns) && props.fns.map(i => {
    Vue.prototype[i.name] = i[i.name]
  });
}

// 导出子应用生命周期 挂载前 挂载后
export async function mount () {

  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/app1" : "/",
    mode: "history",
    routes: routes.options.routes
  });
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
  console.log('mountmountmount');

  console.log(window.__POWERED_BY_QIANKUN__, 'window.__POWERED_BY_QIANKUN__ window.__POWERED_BY_QIANKUN__ window.__POWERED_BY_QIANKUN__ ');

}

// 导出子应用生命周期 挂载前 卸载后
export async function unmount () {
  instance.$destroy();
  instance = null;
  router = null;
}

// 单独开发环境
window.__POWERED_BY_QIANKUN__ || mount();

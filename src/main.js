import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUserCircle,
  faSignInAlt,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import store from './store'

const requireComponent = require.context(
  "./components/common",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

library.add(faHome, faUserCircle, faSignInAlt, faSignOutAlt, faPlusSquare);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

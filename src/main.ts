import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faAngleDown,
  faAngleUp,
  faCartShopping,
  faCartPlus,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import router from "@/router";

library.add([
  faSearch,
  faAngleDown,
  faAngleUp,
  faCartShopping,
  faCartPlus,
  faArrowLeft,
]);
const pinia = createPinia();
createApp(App)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

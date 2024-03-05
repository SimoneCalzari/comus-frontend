import { createApp } from "vue";
// file di partenza styles progetto
import "./assets/scss/general.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// import route
import { router } from "./router";

// file start Vue
import App from "./App.vue";

createApp(App).use(router).mount("#app");

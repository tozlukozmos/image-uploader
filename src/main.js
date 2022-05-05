import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";

import AppAlert from './components/AppAlert.vue';
import AppUploadContainer from './components/AppUploadContainer.vue';
import AppProgressBar from './components/AppProgressBar.vue';
import AppResultContainer from './components/AppResultContainer.vue';

const app = createApp(App);
app.component('app-alert', AppAlert);
app.component('app-upload-container', AppUploadContainer);
app.component('app-progress-bar', AppProgressBar);
app.component('app-result-container', AppResultContainer);
app.mount("#app");

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store'; // Adjust the path to point to the correct location of store.js

createApp(App)
  .use(router) // Register the router
  .use(store)  // Register the Vuex store
  .mount('#app');

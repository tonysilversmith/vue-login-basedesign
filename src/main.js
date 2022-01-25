import { createApp } from 'vue';
import App from './App.vue';
import BButton from './components/BButton.vue';

createApp(App).mount('#app');
//Vue.components({ BButton: "BButton" });
//Vue.component('BButton', require('./components/BButton.vue'));
App.components = {
    "BButton": BButton,
}

//App.component('Button', Button);
//const app = Vue.createApp({});
//App.config.isCustomElement = (tag) => tag === 'Button';
// createApp(Button).mount('#app');
// Vue.component('Button', Button);
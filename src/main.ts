
import { createApp } from 'vue'
import Loader from '@/app/components/loader/loader.vue';
import App from './App.vue'
import router from './router'
import '@/assets/scss/main.scss';

import primevue from '@/app/plugins/primevue';
// import '@/app/plugins/boxicons';
import 'boxicons/css/boxicons.min.css'


const app = createApp(App)

primevue(app);

app.use(router)
app.component('Loader', Loader);
app.mount('#app')

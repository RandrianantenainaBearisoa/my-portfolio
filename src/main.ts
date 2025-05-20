
import { createApp } from 'vue'
import Loader from '@/app/components/loader/loader.vue';
import ButtonLink from '@/app/components/buttons/button-link.vue';
import App from './App.vue';
import router from './router';
import '@/assets/scss/main.scss';

import primevue from '@/app/plugins/primevue';

const app = createApp(App)

primevue(app);

app.use(router)
app.component('Loader', Loader);
app.component('ButtonLink', ButtonLink);
app.mount('#app')

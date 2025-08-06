import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import primevue from '@/plugins/primevue';
import i18n from './plugins/i18n';

import '@fontsource/koho/200.css';
import '@fontsource/koho/300.css';
import '@fontsource/koho/400.css';
import '@fontsource/koho/500.css';
import '@fontsource/koho/600.css';
import '@fontsource/koho/700.css';

import './assets/styles/main.scss';

const app = createApp(App);

app.use(router);
app.use(i18n);

primevue(app);

app.mount('#app');

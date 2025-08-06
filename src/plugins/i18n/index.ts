import { createI18n } from 'vue-i18n';

import { enLabel, frLabel } from '@/components/features/data';


const loadLocaleMessages = () => {
    return {
        en: {
          labels: enLabel
        },
        fr: {
          labels: frLabel
        },
    };
};

const i18n = createI18n({
    locale: localStorage.getItem("lang") || 'en',
    fallbackLocale: 'en',
    messages: loadLocaleMessages()
});

export default i18n;

import { createI18n } from 'vue-i18n';

import { enLabel, frLabel, enTimeline, frTimeline, enHobs, frHobs, enProject, frProject } from '@/components/features/data';


const loadLocaleMessages = () => {
    return {
        en: {
          labels: enLabel,
          timelineData: enTimeline,
          hobs: enHobs,
          projects: enProject
        },
        fr: {
          labels: frLabel,
          timelineData: frTimeline,
          hobs: frHobs,
          projects: frProject
        },
    };
};

const i18n = createI18n({
    locale: localStorage.getItem("lang") || 'en',
    fallbackLocale: 'en',
    messages: loadLocaleMessages()
});

export default i18n;

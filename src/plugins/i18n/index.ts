import { createI18n } from 'vue-i18n';

import { enLabel, frLabel, enTimeline, frTimeline, enHobs, frHobs, enProject, frProject, enExpe, frExpe, enSkills, frSkills } from '@/components/features/data';


const loadLocaleMessages = () => {
    return {
        en: {
          labels: enLabel,
          timelineData: enTimeline,
          hobs: enHobs,
          projects: enProject,
          expe: enExpe,
          skills: enSkills
        },
        fr: {
          labels: frLabel,
          timelineData: frTimeline,
          hobs: frHobs,
          projects: frProject,
          expe: frExpe,
          skills: frSkills
        },
    };
};

const i18n = createI18n({
    locale: localStorage.getItem("lang") || 'fr',
    fallbackLocale: 'en',
    messages: loadLocaleMessages()
});

export default i18n;

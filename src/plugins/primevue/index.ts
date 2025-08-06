import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

import Dialog from 'primevue/dialog';
import ProgressBar from 'primevue/progressbar';
import ToastService from 'primevue/toastservice';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import Fieldset from 'primevue/fieldset';

export default function setupPrimevue(app: any) {
  const MyPreset = definePreset(Aura, {
    semantic: {
      primary: {
        50: '{blue.50}',
        100: '{blue.100}',
        200: '{blue.200}',
        300: '{blue.300}',
        400: '{blue.400}',
        500: '{blue.500}',
        600: '{blue.600}',
        700: '{blue.700}',
        800: '{blue.800}',
        900: '{blue.900}',
        950: '{blue.950}',
      },
    },
  });

  app.use(PrimeVue, {
    theme: {
      preset: MyPreset,
    },
  });
  app.use(ToastService);

  app.component('PrimevueDialog', Dialog);
  app.component('PrimevueProgressBar', ProgressBar);
  app.component('PrimevueInputText', InputText);
  app.component('PrimevueTextarea', Textarea);
  app.component('PrimevueFloatLabel', FloatLabel);
  app.component('PrimevueButton', Button);
  app.component('PrimevueFieldset', Fieldset);
}

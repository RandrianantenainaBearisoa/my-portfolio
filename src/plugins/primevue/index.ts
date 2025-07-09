import PrimeVue from 'primevue/config';
// import { definePreset } from '@primeuix/themes';
// import Aura from '@primeuix/themes/aura';

import Button from 'primevue/button';

export default function setupPrimevue(app: any) {
  // const MyPreset = definePreset(Aura, {
  //   semantic: {
  //     primary: {
  //       50: '{blue.50}',
  //       100: '{blue.100}',
  //       200: '{blue.200}',
  //       300: '{blue.300}',
  //       400: '{blue.400}',
  //       500: '{blue.500}',
  //       600: '{blue.600}',
  //       700: '{blue.700}',
  //       800: '{blue.800}',
  //       900: '{blue.900}',
  //       950: '{blue.950}',
  //     },
  //   },
  // });

  app.use(PrimeVue, {
    // theme: {
    //   preset: MyPreset,
    // },
  });

  app.component('PrimevueButton', Button);
}

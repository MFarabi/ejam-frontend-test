import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
import * as directives from 'vuetify/directives';
// import theme from '@/utils/vuetify/vuetify.theme';
// import { icons } from '@/utils/vuetify/vuetify.icon';
// import vuetifyDefaults from '@/utils/vuetify/vuetify.defaults';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    // theme,
    // defaults: vuetifyDefaults,
    components: { ...components, VCode: undefined, VSkeletonLoader },
    directives,

    // icons,
    display: {
      mobileBreakpoint: 'sm',
      thresholds: {
        xs: 0,
        sm: 600,
        md: 920,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});

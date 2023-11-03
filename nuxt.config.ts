import vuetify from 'vite-plugin-vuetify';
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['vuetify/styles', '@/assets/styles/main.scss'],

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    'nuxt-icon',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Manrope: true,
        },
      },
    ],
  ],

  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },
});

import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  vite: {
    plugins: [tailwindcss()]
  },
  css: ['@/assets/css/main.css'],

  components: [{ path: '~/components', pathPrefix: false }]

  // experimental: {
  //   defaults: {
  //     nuxtLink: {
  //       trailingSlash: 'append'
  //     }
  //   }
  // }
});

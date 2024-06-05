// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules:[
    "@nuxtjs/tailwindcss",
    "@nuxt-alt/http",
    
  ],
  serverDir:"nuxt-server",

  http: {
    // Global default options
    baseURL: 'http://localhost:5001', // Default base URL
  }
})

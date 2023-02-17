// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    // SCSS file in the project
    "~/assets/styles.scss",
  ],
  app: {
    head: {
      title: "Nuxt App | Home",
      meta: [
        {
          name: "description",
          content: "My First Application in Nuxt"
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        },
      ],
    },
  },
});

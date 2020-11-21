export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'DSC JNEC - Join Us!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A place to store your memories',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Dear Diary,Diary, store memories, nuxt, vue, write diary,make memories',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://deardiary.tk/dear-diary-logo.svg',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'https://deardiary.tk/dear-diary-logo.svg',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://deardiary.tk/',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/dear-diary-logo.svg' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/google-analytics'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  pwa: {
    icon: {
      /* icon options */
    },
    meta: {
      /* meta options */
      name: 'Dear Diary',
      description: 'An app for storing your memories',
    },
    manifest: {
      name: 'Dear Diary',
    },
  },
  sitemap: {
    hostname: 'https://deardiary.tk',
    gzip: true,
    routes: ['/'],
  },
  googleAnalytics: {
    // Options
    id: 'G-NYKQ1RFVTW',
  },
}

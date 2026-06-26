export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en-AU' },
      title: 'Brock Presland | Full-stack Web Developer',
      meta: [
        { name: 'description', content: 'Full-stack web developer building, maintaining and improving reliable business websites and web systems.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Brock Presland | Full-stack Web Developer' },
        { property: 'og:description', content: 'Reliable web development for marketing websites, WordPress, Laravel and business-critical systems.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'Source Serif 4': [500, 600]
    },
    display: 'swap'
  },
  typescript: {
    strict: true
  }
})

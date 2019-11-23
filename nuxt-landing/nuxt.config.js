module.exports = {
   mode: 'spa',
   modules: ['bootstrap-vue/nuxt'],
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-landing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    link: [
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.0/css/all.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap'}
    ],

    script: [
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' },
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.22/vue.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js' }

    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

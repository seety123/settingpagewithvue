const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],

    script: 
    [
      { src :'https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"'},
      { src:'https://code.jquery.com/jquery-3.3.1.min.js'},
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'},
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js'}
    
    ],

    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet', href:'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css'},
      {rel:'stylesheet', href:'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'},
      {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'}
      
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: 
  [
  ],


  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}

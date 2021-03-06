require('dotenv').config();

const config = {
  entries: {
    index: 'index.js'
  },

  urls: {
    publicPath: () => process.env.PUBLIC_PATH
  },

  paths: {
    src: {
      js          : './../src/js/',
      scss        : './../src/scss/',
      node_modules: './../node_modules'
    },
    dist: {
      base : './../dist',
      clean: ['**/*']
    },
    templates: './../views',
    public: './..'
  },

  stats: {
    preset: 'minimal'
  },

  devServerConfig: {
    host: () => process.env.DEVSERVER_HOST,
    port: () => process.env.DEVSERVER_PORT
  },

  purgeCssConfig: {
    paths: ['./../src/**/*.js', './../views/**/*.html', './../views/**/*.ejs']
  }

};

module.exports = config;

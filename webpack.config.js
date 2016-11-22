var webpack = require('webpack');

module.exports = {
    entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',
      __dirname +'/app/app.jsx',
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js',
    },
    externals:{
      jquery: 'jQuery',
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
      })
    ],
    resolve: {
        root: __dirname,
        alias:{
          Main: 'app/components/Main.jsx',
          Nav: 'app/components/Nav.jsx',
          Weather:  'app/components/Weather.jsx',
          About:  'app/components/About.jsx',
          Examples:  'app/components/Examples.jsx',
          WeatherForm: 'app/components/WeatherForm.jsx',
          WeatherMessage: 'app/components/WeatherMessage.jsx',
          WeatherMapAPI: 'api/WeatherMapAPI.jsx',
          ErrorModal: 'app/components/ErrorModal.jsx',
          AppStyle: 'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx'],
    },
    module:{
      loaders:[{
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }]
    },
    devtool: 'inline-source-map'
};

var webpack = require('webpack');

module.exports = {
    entry: [
      'script!node_modules/jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',
      __dirname +'/app/app.jsx',
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js',
    },
    external:{
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
          openWeatherMap: 'api/openWeatherMap.jsx'
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
    devtool: 'cheap-module-eval-source-map'
};

let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.webpackConfig({
   //  plugins: [
   //  new BundleAnalyzerPlugin(),
   //  ],
 
   // im not sure if this is needed. it may be part of default for laravel mix
   optimization: {
     splitChunks: {
       chunks: 'all',
     },
   },
   stats: {
     children: true,
   },
   module: {
     rules: [
       {
         test: /\.scss$/,
         loader: 'sass-loader'
       },
     ],
   },
 });
 

mix.js('resources/js/app.js', 'public/js').vue();
mix.sass('resources/sass/app.scss', 'public/css');

mix.sass('resources/sass/emails/emails.scss', 'public/css');

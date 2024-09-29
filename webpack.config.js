const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode: mode ,
  entry: './src/index.js', // Archivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    filename: 'main.js', // Nombre del archivo JS empaquetado
    clean: true, // Limpia la carpeta dist antes de cada compilación
  },
  module: {
    rules: [
      {
        test: /\.html$/, // Procesar archivos HTML
        use: ['html-loader'],
      },
      {
        test: /\.js$/, // Procesar archivos JS
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Procesar archivos CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/, // Procesar archivos SASS
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Procesar imágenes
        type: 'asset/resource', // Usar asset modules para manejar imágenes
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Archivo HTML fuente
      filename: 'index.html', // Nombre del archivo que se generará en dist/
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src', 'global.css'), to: path.resolve(__dirname, 'dist', 'global.css') }, // Copia a dist/global.css
        { from: path.resolve(__dirname, 'src', 'imagenes'), to: path.resolve(__dirname, 'dist', 'imagenes') }, // Copia la carpeta de imágenes a dist
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Carpeta desde la que se sirven los archivos estáticos
    },
    compress: true, // Habilitar compresión gzip
    port: 9000, // Puerto en el que se ejecutará el servidor
    hot: true, // Habilitar Hot Module Replacement (HMR)
    open: true, // Abrir el navegador automáticamente
  },
};

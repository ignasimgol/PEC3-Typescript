const path = require('path');

module.exports = {
  entry: './app.ts', // Archivo principal de entrada
  devtool: 'inline-source-map', // Fuente en línea para depuración
  watch: true, // Permite ver cambios en tiempo real
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Compila archivos .ts y .tsx
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'] // Extensiones reconocidas por Webpack
  },
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist') // Directorio de salida
  }
};

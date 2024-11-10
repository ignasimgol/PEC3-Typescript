Para transpirar mi código TypeScript a JavaScript, utilizo el comando tsc. Primero, configuro un archivo tsconfig.json donde defino las opciones de compilación, como el destino y el sistema de módulos. Luego, configuro Webpack para usar ts-loader y procesar mis archivos .ts, generando un archivo bundle.js en la carpeta dist. Finalmente, ejecuto Webpack con npx webpack --mode production para compilar y generar el código JavaScript que puedo ejecutar en el navegador.

Configuración Webpack:
La configuración de Webpack se define en un archivo webpack.config.js. En él, se especifica el archivo de entrada (app.ts), el tipo de mapa de fuentes para depuración (inline-source-map), las reglas para compilar TypeScript (ts-loader), las extensiones de archivos a procesar, y el directorio de salida (dist/bundle.js).

Creación del Bundle:
El bundle se crea ejecutando el comando npx webpack, que procesa los archivos de entrada, los transpila con Webpack y genera un archivo de salida (bundle.js) en el directorio dist. Si se utiliza npx webpack --watch, Webpack recompila automáticamente el bundle al detectar cambios.

Enlazar al index.html:
En el archivo index.html, se enlaza el bundle.js generado por Webpack mediante la etiqueta <script src="dist/bundle.js"></script>. Esto permite que el navegador cargue el archivo compilado y ejecute el código JavaScript.

Live Server:
Live Server es una herramienta que ejecuta un servidor local para servir archivos estáticos y recarga automáticamente la página cuando detecta cambios en los archivos. Al abrir index.html con Live Server, se carga el contenido y se actualiza en tiempo real cuando se modifica el bundle.js.



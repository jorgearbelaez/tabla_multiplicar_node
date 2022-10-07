const { crearArchivo } = require("./helpers/multiplicacion");
require("colors");
const argv = require("./config/yargs");
const yargs = require("yargs");

console.clear();

console.log("yargs", argv);

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((error) => console.log(error));

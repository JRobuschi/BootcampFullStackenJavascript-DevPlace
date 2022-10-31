const prompt = require("prompt-sync")({ sigint: true });

class Servicio extends Empleado {
  seccion;

  constructor(
    seccion,
    nombre,
    apellido,
    id,
    estadoCivil,
    añoInicio,
    numeroDespacho
  ) {
    super(nombre, apellido, id, estadoCivil, añoInicio, numeroDespacho);
    this.seccion = seccion;
  }

  translado() {
    return (this.seccion = seccion);
  }
}

// const transladar = () => {
//   var option = prompt(
//     "Ingrese su nueva seccion, poniendo la palabra como se indica, biblioteca, decano, secretaria"
//   );
//   if (
//     option === "decano" ||
//     option === "biblioteca" ||
//     option === "secretaria"
//   ) {
//     return option;
//   } else {
//     return spam("Lo siento no se pudo cambiar, no se encontro esa seccion");
//   }
// };

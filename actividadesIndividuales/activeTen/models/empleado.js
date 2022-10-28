const prompt = require("prompt-sync")({ sigint: true });

class Empleado extends Person {
  añoInicio;
  numeroDespacho;

  constructor(añoInicio, numeroDespacho, nombre, apellido, id, estadoCivil) {
    super(nombre, apellido, id, estadoCivil);
    this.añoInicio = añoInicio;
    this.numeroDespacho = numeroDespacho;
  }

  reasignacion(numeroDespacho) {
    return (this.numeroDespacho = numeroDespacho);
  }
}

// const nuevoDespacho = () => {
//   var option = prompt("Ingrese su numero de despacho");
//   if (option == Number) {
//     return option;
//   } else {
//     return spam("Ese valor no es valido");
//   }
// };

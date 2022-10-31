const prompt = require("prompt-sync")({ sigint: true });

class Profesor extends Empleados {
  departamento;

  constructor(
    departamento,
    nombre,
    apellido,
    id,
    estadoCivil,
    añoInicio,
    numeroDespacho
  ) {
    super(nombre, apellido, id, estadoCivil, añoInicio, numeroDespacho);
    this.departamento = departamento;
  }

  nuevoDepartamento() {
    return (this.departamento = departamento);
  }
}

// const crearDepartamento = () => {
//   var option = prompt(
//     "Ingrese su nuevo departamento, poniendo la palabra como se indica, java, base de datos, php"
//   );
//   if (option === "base de datos" || option === "java" || option === "php") {
//     return option;
//   } else {
//     return spam("Lo siento no se pudo anotar, no se encontro ese departamento");
//   }
// };

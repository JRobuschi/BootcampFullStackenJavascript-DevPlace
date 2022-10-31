const prompt = require("prompt-sync")({ sigint: true });

class Estudiante extends Person {
  cursoMatricula;

  constructor(cursoMatricula, nombre, apellido, id, estadoCivil) {
    super(nombre, apellido, id, estadoCivil);
    this.cursoMatricula = cursoMatricula;
  }

  nuevaMatricula() {
    return (this.cursoMatricula = this.cursoMatricula);
  }
}

// const curso = () => {
//   var option = prompt(
//     "En que curso te deseas anotar, base de datos, java, php? ingrese la palabra como se encuentra en el texto"
//   );
//   if (option === "base de datos" || option === "java" || option === "php") {
//     return option;
//   } else {
//     return spam("Lo siento no se pudo anotar, no se encontro esa materia");
//   }
// };

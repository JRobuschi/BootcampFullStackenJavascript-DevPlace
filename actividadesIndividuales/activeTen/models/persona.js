const prompt = require("prompt-sync")({ sigint: true });

class Person {
  nombre;
  apellido;
  id;
  estadoCivil;

  constructor(nombre, apellido, id, estadoCivil) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
    this.estadoCivil = estadoCivil;
  }

  estadoCivil() {
    return (this.estadoCivil = estado);
  }
}

class Estudiante extends Person {
  cursoMatricula;

  constructor(nombre, apellido, id, estadoCivil, cursoMatricula) {
    super(nombre, apellido, id, estadoCivil);
    this.cursoMatricula = cursoMatricula;
  }

  nuevaMatricula() {
    return (this.cursoMatricula = this.cursoMatricula);
  }
}

class Empleado extends Person {
  añoInicio;
  numeroDespacho;

  constructor(nombre, apellido, id, estadoCivil, añoInicio, numeroDespacho) {
    super(nombre, apellido, id, estadoCivil);
    this.añoInicio = añoInicio;
    this.numeroDespacho = numeroDespacho;
  }

  reasignacion(numeroDespacho) {
    return (this.numeroDespacho = numeroDespacho);
  }
}

class Profesor extends Empleado {
  departamento;

  constructor(
    nombre,
    apellido,
    id,
    estadoCivil,
    añoInicio,
    numeroDespacho,
    departamento
  ) {
    super(nombre, apellido, id, estadoCivil, añoInicio, numeroDespacho);
    this.departamento = departamento;
  }

  nuevoDepartamento() {
    return (this.departamento = departamento);
  }
}

class Servicio extends Empleado {
  seccion;

  constructor(nombre, apellido, id, estadoCivil, añoInicio, seccion) {
    super(nombre, apellido, id, estadoCivil, añoInicio, seccion);
    this.seccion = seccion;
  }

  translado() {
    return (this.seccion = seccion);
  }
}
// function estado() {
//   var option = prompt(
//     "Ingrese su estado civil, si esta casado ingrese 'Casado' y si esta soltero ingrese 'Soltero', como esta escrito entre las comillas"
//   );
//   if (option === "Casado") {
//     return true;
//   } else if (option === "Soltero") {
//     return false;
//   } else {
//     return spam("No es un estado valido, ingrese alguna de las dos opciones");
//   }
// }

let estudiantes = [];
let profesores = [];
let servicios = [];

let estudiante = new Estudiante("Ricardo", "Perez", "1", "Casado", "Phyton");
estudiantes.push(estudiante);
console.table(estudiantes);

let profesor = new Profesor(
  "juan",
  "Robuschi",
  "2",
  "Soltero",
  "2022",
  "4",
  "Economia"
);
profesores.push(profesor);
console.table(profesores);

let servicio = new Servicio(
  "mateo",
  "lalo",
  "89",
  "soltero",
  "2021",
  "32",
  "Economia"
);
servicios.push(servicio);
console.table(servicios);

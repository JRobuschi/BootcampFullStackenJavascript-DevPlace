const prompt = require("prompt-sync")({ sigint: true });

class Persona {
  dni;
  nombre;
  apellido;
  telefono;

  constructor(dni, nombre, apellido, telefono) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }

  setDni(dni) {
    return (this.dni = dni);
  }
  setNombre(nombre) {
    return (this.nombre = nombre);
  }
  setApellido(apellido) {
    return (this.apellido = apellido);
  }
  setTelefono(telefono) {
    return (this.telefono = telefono);
  }
  getDni() {
    return this.dni;
  }
  getNombre() {
    return this.nombre;
  }
  getApellido() {
    return this.apellido;
  }
  getTelefono() {
    return this.telefono;
  }
}

var opcion;

var datos = [];

do {
  option = parseInt(
    prompt(
      "Ingrese 1 para Agregar un usuario, 2 para Eliminar un usuario, 3 para Consultar si existe un usuario o 4 si ya no quiere ingresar mas datos: "
    )
  );

  if (option == 1) {
    function crearPersonaNueva() {
      var dni = prompt("Dni: ");
      var nombre = prompt("Nombre: ");
      var apellido = prompt("Apellido: ");
      var telefono = prompt("Telefono: ");
      let user = new Persona(dni, nombre, apellido, telefono);
      return user;
    }

    let nueva = datos.push(crearPersonaNueva());
    console.table(datos);
  } else if (option == 2) {
    var documento = prompt("Ingrese el DNI de la persona que desea Eliminar: ");
    eliminarIndice(documento);
    function eliminarIndice(documento) {
      let personaAeliminar = datos.find((persona) => persona.dni === documento);
      let indiceAEliminar = datos.indexOf(personaAeliminar);
      datos.splice(indiceAEliminar, 1);
    }
  } else if (option == 3) {
    var documento = prompt("Ingrese el DNI de la persona que desea buscar: ");
    buscarDocumento(documento);
    function buscarDocumento(documento) {
      let datoDevuelto = datos.find((Persona) => Persona.dni === documento);
      console.log(datoDevuelto);
    }
  } else if (opcion == 4) {
  } else {
    console.log("Intente con otro valor, el ingresado no es valido");
  }
} while (option != 4);

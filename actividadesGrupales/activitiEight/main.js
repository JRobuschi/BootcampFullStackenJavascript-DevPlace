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
        return this.dni = dni;
    }
    setNombre(nombre) {
        return this.nombre = nombre;
    }
    setApellido(apellido) {
        return this.apellido = apellido;
    }
    setTelefono(telefono) {
        return this.telefono = telefono;
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


//var personaNueva = parseInt(promt("Ingrese DNI: "))
//let personaNueva = new (Persona)

function crearPersona(dni, nombre, apellido, telefono) {
    personaNueva.setDni(dni)
    personaNueva.setNombre(nombre)
    personaNueva.setApellido(apellido)
    personaNueva.setTelefono(telefono)
}

var opcion;

var datos = []

do {
    option = parseInt(prompt("Ingrese 1 para Agregar un usuario, 2 para Eliminar un usuario, 3 para Consultar si existe un usuario o 4 si ya no quiere ingresar mas datos: "));


    if (option == 1) {
        
        function crearPersonaNueva(){
            var dni = prompt("Dni: ")
            var nombre = prompt("Nombre: ")
            var apellido = prompt("Apellido: ")
            var telefono = prompt("Telefono: ")
            let user = new Persona(dni, nombre, apellido, telefono);
            return user;
        }
        
        let nueva = datos.push(crearPersonaNueva())
        console.log(datos)

    } else if (option == 2) {
        var DNI = prompt("Ingrese el DNI de la persona que desea Eliminar: ")
        eliminarArray(DNI)
        function eliminarArray(DNI) {
            for (i = 0; i < datos.length; i++) {
                let dniDatos = datos[i][0];
                if (dniDatos == DNI) {
                    console.log("Se eliminara: ", dniDatos);
                    return eliminarDato = datos.splice(i, 1);
                }
            }
        }
    } else if (option == 3) {
        var DNI = prompt("Ingrese el DNI de la persona que desea buscar: ")
        buscarArray(DNI);
        function buscarArray(DNI) {
            for (i = 0; i < datos.length; i++) {
                let dniDatos = datos[i][0];
                if (dniDatos == DNI) {
                    return datos[i];
                }
            }
        }
        console.log(buscarArray(DNI))
    } else if (opcion == 4) {

    } else {
        console.log("Intente con otro valor, el ingresado no es valido")
    }
} while (option != 4)
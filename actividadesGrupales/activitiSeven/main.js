const prompt = require("prompt-sync")({ sigint: true });

//Se Ingresa la Opcion que elige el usuario y se guarda en la variable
var opcion;
option = parseInt(prompt("Ingrese 1 para Agregar un usuario, 2 para Eliminar un usuario o 3 para Consultar si existe un usuario: "));

var datos = [
    ["DNI", "NOMBRE", "APELLIDO", "TELEFONO"],
    ["12345678", "Juan", "asd", "2222222222"],
    ["87654321", "Martin", "qwe", "3333333333"],
    ["33333333", "Lucas", "zxc", "4444444444"],
    ["44444444", "Sofia", "yui", "5555555555"],
    ["55555555", "Marta", "hjk", "6666666666"],

    
]

if(option==1){   
    var dni;
    var name;
    var lastName;
    var cel;

    var array = []

    dni=prompt("Ingrese su DNI: ");
    name=prompt("Ingrese su Nombre: ");
    lastName=prompt("Ingrese su Apellido: ");
    cel=prompt("Ingrese Numero de Telefono: ");

    array.push(dni, name, lastName, cel)
    
    datos.push(array)

}else if(option==2){
    var DNI = prompt("Ingrese el DNI de la persona que desea Eliminar: ")
    eliminarArray(DNI)
    function eliminarArray(DNI){
        for (i = 0;  i < datos.length;  i++) {
            let dniDatos = datos[i][0];
            if (dniDatos == DNI) {
                console.log("Se eliminara: ", dniDatos);
                return eliminarDato = datos.splice(i, 1);
            }
        }
    }
}else if(option==3){
    var DNI = prompt("Ingrese el DNI de la persona que desea buscar: ")
    buscarArray(DNI);
    function buscarArray(DNI){
        for (i = 0;  i < datos.length;  i++) {
            let dniDatos = datos[i][0];
            if (dniDatos == DNI) {
                return datos[i];
            }
        }
    }
    console.log(buscarArray(DNI))
}else{
    console.log("Intente con otro valor, el ingresado no es valido")
}




console.table(datos);



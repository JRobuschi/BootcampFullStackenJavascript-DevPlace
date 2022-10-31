const prompt = require("prompt-sync")({ sigint: true });

//Se Ingresa la Opcion que elige el usuario y se guarda en la variable
var opcion;


do{
    option = parseInt(prompt("Ingrese 1 para Agregar un usuario, 2 para Eliminar un usuario, 3 para Consultar si existe un usuario o 4 si ya no quiere ingresar mas datos"));
    var datos = [
    [{"DNI":0," NOMBRE":"", "APELLIDO":"", "TELEFONO":0}],
      
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
}else if (opcion==4){

}else{
    console.log("Intente con otro valor, el ingresado no es valido")
}
}while(option != 4)



console.table(datos);



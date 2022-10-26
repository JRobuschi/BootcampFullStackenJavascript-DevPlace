class Person{
    nombre;
    edad;
    dni;

    constructor(){
        this.nombre="";
        this.edad=0;
        this.dni=0;
    }

    getNombre(){
        return this.nombre;
    }

    getEdad(){
        return this.edad;
    }

    getDni(){
        return this.dni
    }

    setNombre(nombre){
        if(nombre === String){
            this.nombre = nombre;
        }else{
            console.log("Ese no es un nombre valido")
        }
        
    }

    setEdad(edad){
        if(edad == Number){
            this.edad = edad;
        }else{
            console.log("Es un valor invalido de edad")
        }
        
    }

    setDni(dni){
        if(dni == Number && dni.length == 8){
            this.dni = dni;
        }else{
            console.log("Es un dni invalido")
        }
    }

    mostar(nombre, edad, dni){
        console.log(nombre, edad, dni)
    }
    
    esMayorDeEdad(edad){
        if(edad >= 18){
            return true;
        }else{
            return false;
        }
    }
}
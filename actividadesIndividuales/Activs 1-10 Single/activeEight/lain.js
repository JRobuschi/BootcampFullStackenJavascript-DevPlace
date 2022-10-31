const prompt = require("prompt-sync")({ sigint: true });

class NIF{
    DNI;
    Letra;


    constructor(DNI){
        this.DNI = DNI;
        this.Letra = this.encontrarLetra();
    }

    encontrarLetra(){
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; 
        return letras[this.DNI % 23]
    }


    leer(){
        this.DNI = prompt("Ingrese su dni: ")
        if(this.DNI < 0 || this.DNI > 99999999) {
            console.log("El número proporcionado no es válido");
        }else{
            this.Letra=this.encontrarLetra();
        }
        
    }
    setDni(DNI){
        this.DNI= DNI;
    }

    getDni(){
        return this.DNI;
    }

    toString(){
        return "Tu DNI es: " + this.DNI + "-" + this.Letra
    }
}

var nif = new NIF();
nif.leer();
console.log(nif.toString());







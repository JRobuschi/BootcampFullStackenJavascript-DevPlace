const prompt = require("prompt-sync")({ sigint: true });

var ecuacion = prompt("Ingrese 1 para sumar\nIngrese 2 para restar\nIngrese 3 mara dividir\nIngrese 4 para multiplicar  ");

switch (ecuacion) {
    case "1":
        var cantidad = parseInt(prompt("Cuantos numeros desea evaluar? "));
        var sum = 0;
        for (let i = cantidad; i > 0; i--) {
            var numeros = parseInt(prompt("Los numero son: "));    
            sum+= numeros     
        }
        console.log("El resultado de la suma es: " + sum)

        break;

    case "2": 
        var cantidad = parseInt(prompt("Cuantos numeros desea evaluar? "));
        var resta = 0;
        for (let i = 0; i < cantidad; i++) {
            var numeros = parseInt(prompt("Los numero son: "));    
            if(i==0){
                resta = numeros;
            }else{
                resta=resta - numeros
            }    
        }
        console.log("El resultado de la resta es: " + resta)
 
        break;
        
    case "3":
        var cantidad = prompt("Cuantos numeros desea evaluar? "); 
        var division = 1;
        for (let i = 0; i < cantidad; i++) {
            var numeros = parseInt(prompt("Los numero son: "));    
            if(i==0){
                division= numeros;
            }else{
                division=division/numeros
            }
        }
        console.log("El resultado de la division es: " + division)
 
        break;    
        
    case "4": 
        var cantidad = prompt("Cuantos numeros desea evaluar? ");
        var multiplicacion = 1;
        for (let i = cantidad; i > 0; i--) {
            var numeros = parseInt(prompt("Los numero son: "));    
            multiplicacion *= numeros    
        }
        console.log("El resultado de la multiplicacion es: " + multiplicacion)
 
        break;

    default: console.log("Esa opcion no se encuentra momentaneamente, intente con otro valor")    
}

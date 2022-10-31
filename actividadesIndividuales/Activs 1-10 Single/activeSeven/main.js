// Actividad 1
// var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")

// console.log(meses);

// for (let i = 0; i < meses.length; i++) {
//     console.log(meses[i])
// }


//Actividad 2
// function parOimpar(n) {
//     if(n % 2 == 0){
//         return "Par";
//     }else{
//         return "Impar";
//     }
// }
// console.log(parOimpar(18));


//Actividad 3
// function checkType(cadena) {
//     //Con trim eliminamos los espacios en Blanco
//     cadena = String(cadena).trim();
//     const tipe = {
//       "lower": /^[a-z0-9 ]+$/,
//       "upper": /^[A-Z0-9 ]+$/,
//       "upperLower": /^[A-Za-z0-9 ]+$/
//     };

//     //Con test ejecuta una busqueda de ocurrencia, si ocurre o no el factor
//     if (tipe.lower.test(cadena)) {
//       return '0';
//     }
 
//     if (tipe.upper.test(cadena)){
//      return '1';
//     }
 
//     if (tipe.upperLower.test(cadena)){
//      return '2';
//     }
 
//     return -1;
// }

// function resultCadena(cadena) {
//       var result = checkType(cadena);

//       if (result == '0') {
//           return('Contiene minusculas');
//       }  else if (checkType(cadena) == '1') {
//           return('Contiene MAYUSCULAS');
//       } else if (checkType(cadena) == '2') {
//           return('Contiene minusculas y MAYUSCULAS');
//      } else {
//          return('El mensaje no incluye letras');
//      }
// }

// console.log(resultCadena("3"))


//Actividad 4
// function factorial(n) {
//     var total = 1;
//     for (let i = n; i > 1; i--) {
//         total *=  i
//     }
//     return total
// }
// console.log(factorial(3))



//Practica

// let numeros = [15, 2, 35, 4, 5, 16, 7, 8, 10];
// numeros.forEach(element => {
//     if(element > 10)
//     {
//         console.log(element);
//     }
// });


//Practica 2

// function aMenosQue(prueba, entonces) {
//     if(!prueba) entonces();
// }

// repetir(3, n => {
//     aMenosQue(/*primer parametro de prueba*/n % 2 == 1, 
//         /*segundo parametro de consecuencia, el "entonces"*/() => {
//         console.log(n, "es par");
//     });
// });

//Practica 3

const frutas = ["naranja", "manzana", "pera"];

console.log(frutas.map(fruta => fruta.length));


(function (param){
    return param + 100
}); //Funcion anonima tradicional

(param) => { 
    return param +100;
}//Funcion anonima flecha

a => a +100;

//Funcion anonima tradicional
(function(param1, param2){
    return param1 * param2 + 100
});

//Funcion flecha
(param1, param2) => param1 * param2 + 100;

//Funcion anonima sin argumentos
(function(){
    return param1 * param2 + 100;
});

//funcion flecha sin argumentos
() => param1 * param2 + 100;

//funcion tradicional
function sumar100(param) {
    return param + 100;
}

//funcion flecha
const sumando100 = (param) => param + 100;


// DO WHILE

let texto = "";
let i = 0;

do{
    texto += i + "<br>";
    i++
}while( i < 5 );
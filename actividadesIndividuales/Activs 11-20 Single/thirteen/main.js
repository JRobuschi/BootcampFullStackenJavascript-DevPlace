const prompt = require("prompt-sync")({ sigint: true });

//localStorage.setItem("usuario", "jdoe");

//const usuario = localStorage.getItem("usuario");
//localStorage.removeItem("usuario");

// class Datos {
//   constructor(nombre, apellido, backgroundColor, fontColor, fontSize) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.backgroundColor = backgroundColor;
//     this.fontColor = fontColor;
//     this.fontSize = fontSize;
//   }
// }

// const nombre = prompt("Ingrese su nombre");
// const apellido = prompt("Ingrese su apellido");
// const backgroundColor = prompt("Ingrese su background");
// const fontColor = prompt("Ingrese su fontColor");
// const fontSize = prompt("Ingrese su fontSize");

// localStorage.setItem("nombre", nombre);
// localStorage.setItem("apellido", apellido);
// localStorage.setItem("backgroundColor", backgroundColor);
// localStorage.setItem("fontColor", fontColor);
// localStorage.setItem("fontSize", fontSize);

// ///////////Otro

// class Persona {
//   constructor(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//   }
// }

// const persona = new Persona("Matias", "Godoy");

// localStorage.setItem("nombre", persona.nombre);
// localStorage.setItem("apellido", persona.apellido);

// let json = JSON.stringify(persona);

// localStorage.setItem("persona", json);

//Actividad 1
// function calculadora() {
//   var numA = parseInt(prompt("Ingrese el primer valor"));
//   var numB = parseInt(prompt("Ingrese el segundo valor"));

//   var operacion = prompt(
//     "Ingrese el numero 1 para sumar, 2 para restar, 3 para multiplicar o 4 para dividir: "
//   );
//   switch (operacion) {
//     case "1":
//       console.log("El resultado de la suma es: ", numA + numB);
//       break;
//     case "2":
//       console.log("El resultado de la resta es: ", numA - numB);
//       break;
//     case "3":
//       console.log("El resultado de la multiplicacion es: ", numA * numB);
//       break;
//     case "4":
//       console.log("El resultado de la division es: ", numA / numB);
//       break;

//     default:
//       console.log("Intente con otro valor");
//   }
// }
// calculadora();

//Actividad 2
// let array = [];
// let numPares = [];
// let numImpares = [];

// function numeros() {
//   for (let i = 0; i < 10; i++) {
//     var n = parseInt(prompt("Ingrese un valor: "));
//     array.push(n);
//   }
// }
// numeros();

// function numerosPares() {
//   array.map(function pares(n) {
//     if (n % 2 == 0) {
//       numPares.push(n);
//     }
//   });
// }
// numerosPares();

// function numerosImpares() {
//   array.map(function pares(n) {
//     if (n % 2 != 0) {
//       numImpares.push(n);
//     }
//   });
// }
// numerosImpares();

// console.log("El array: ", array);
// console.log("El numero mayor: ", Math.max(...array));
// console.log("El numero menor: ", Math.min(...array));
// console.log("Los numeros pares son: ", numPares);
// console.log("Los numeros pares son: ", numImpares);
// console.log(
//   "Hordenamos de menor a mayor",
//   array.sort(function (a, b) {
//     return a - b;
//   })
// );
// console.log(
//   "Hordenamos de mayor a menor",
//   array.sort(function (a, b) {
//     return b - a;
//   })
// );

//Actividad 3

var jugadores = 0;
var array = [];
var jugador1 = [];
var jugador2 = [];
var jugador3 = [];

function numeros() {
  for (let i = 0; i < 4; i++) {
    var n = parseInt(prompt("Jugador 1 Ingrese un valor: "));
    array.push(n);
    jugador1.push(n);
  }
}
numeros();

function numeros2() {
  for (let i = 0; i < 4; i++) {
    var n = parseInt(prompt("Jugador 2 Ingrese un valor: "));
    array.push(n);
    jugador2.push(n);
  }
}
numeros2();

const aleatorio1 = array[Math.floor(Math.random() * array.length)];
const aleatorio2 = array[Math.floor(Math.random() * array.length)];
console.log(aleatorio1);
console.log(aleatorio2);

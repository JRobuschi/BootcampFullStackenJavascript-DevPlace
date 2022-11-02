const listaPalabras = [
  "doctor",
  "gustaría",
  "tierra",
  "cara",
  "elefante",
  "genial",
  "cree",
  "supuesto",
  "tomar",
  "equipo",
  "justo",
  "juego",
  "ninguna",
  "ballena",
  "cinco",
  "dicen",
  "amo",
  "cuándo",
  "pequeño",
  "algunos",
  "conozco",
  "clase",
  "maldito",
  "unas",
  "muchos",
  "hubiera",
  "segundo",
  "aunque",
  "pueda",
  "dime",
  "igual",
  "comida",
  "manzana",
  "cuerpo",
  "encontrar",
  "fuerte",
  "vuelta",
  "venga",
  "creer",
  "realidad",
  "saben",
  "hormiga",
  "deberías",
];
let palabraAdivinar = [];
let palabraMostrar = [];
let historialLetrasUsuario = [];
let numIntentos = 6;
let letra = document.querySelector("#letra");
let boton = document.querySelector("#boton");
let resultado = document.querySelector("#resultado");
let intentos = document.querySelector("#intentos");
let historial = document.querySelector("#historial");

function prepararJuego() {
  let posAleatoriaListaPalabras = _.random(listaPalabras.length - 1);

  let palabraAleatoria = listaPalabras[posAleatoriaListaPalabras];

  palabraAdivinar = palabraAleatoria.split("");

  for (let letra of palabraAdivinar) {
    palabraMostrar.push("_");
  }

  dibujarJuego();
}

function dibujarJuego() {
  resultado.textContent = palabraMostrar.join(" ");

  intentos.textContent = numIntentos;

  historial.textContent = historialLetrasUsuario.join(" ");
}

function comprobarLetraUsuario() {
  let letraUsuario = letra.value;

  letra.value = "";

  for (const [posicion, letraAdivinar] of palabraAdivinar.entries()) {
    if (letraUsuario == letraAdivinar) {
      palabraMostrar[posicion] = letraAdivinar;
    }
  }

  if (!palabraAdivinar.includes(letraUsuario)) {
    numIntentos -= 1;

    historialLetrasUsuario.push(letraUsuario);
  }

  acabarJuego();

  dibujarJuego();
}

function comprobarPulsadoEnter(evento) {
  if (evento.code == "Enter") {
    comprobarLetraUsuario();
  }
}

function acabarJuego() {
  if (!palabraMostrar.includes("_")) {
    alert("Has ganado!!!");

    location.reload(true);
  }

  if (numIntentos == 0) {
    alert("Has Perdido!!! Era: " + palabraAdivinar.join(""));

    location.reload(true);
  }
}

boton.addEventListener("click", comprobarLetraUsuario);

letra.addEventListener("keyup", comprobarPulsadoEnter);

prepararJuego();

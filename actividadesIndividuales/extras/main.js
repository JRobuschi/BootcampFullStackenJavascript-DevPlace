//pairProgramming del 27/10
//Lautaro Rocha y Gonzalo Ordoñez

//después de escribir todo el código,
//llevamos toda la operatoria a otro archivo
//y solo traemos las funciones y variables
//que se usan en los eventos.
//para usar la regla import declaramos este script
//como type="module" en el html.

import {
  agregarContacto,
  verContacto,
  renovarAgenda,
  agenda,
} from "./functions.mjs";

///BOTONES Y EVENTOS

let botonAñadir = document.getElementById("product-form");
let botonBuscar = document.querySelector("#buscar");
let botonOrdenDes = document.querySelector("#ordenar-des");
let botonOrdenAsc = document.querySelector("#ordenar-asc");

botonAñadir.addEventListener("submit", function () {
  let dni = prompt("DNI del contacto");
  let nombre = prompt("Nombre del contacto");
  let apellido = prompt("Apellido del contacto");
  let telefono = prompt("Telefono del contacto");
  agregarContacto(parseInt(dni), nombre, apellido, parseInt(telefono));
  renovarAgenda();
});

botonBuscar.onclick = () => {
  let dniParaVer = prompt("DNI del contacto");
  verContacto(parseInt(dniParaVer));
};

botonOrdenDes.onclick = () => {
  agenda.sort(function (a, b) {
    if (a.dni > b.dni) {
      return 1;
    } else if (a.dni < b.dni) {
      return -1;
    } else {
      return 0;
    }
  });
  renovarAgenda();
};

botonOrdenAsc.onclick = () => {
  agenda.sort(function (a, b) {
    if (a.dni < b.dni) {
      return 1;
    } else if (a.dni > b.dni) {
      return -1;
    } else return 0;
  });
  renovarAgenda();
};

//contactos por defecto
agregarContacto(40478142, "Lautaro", "Rocha", 2235502403);
agregarContacto(42754844, "Roberto", "Ingaramo", 264458799);
agregarContacto(39654789, "Gonzalo", "Ordañoz", 223456998);
agregarContacto(39674789, "Gonzalo", "Ardañoz", 223456998);

//iniciar applicación al abrir el navegador
renovarAgenda();

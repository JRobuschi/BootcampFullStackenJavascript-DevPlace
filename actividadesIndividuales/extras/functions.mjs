//con la palabra export marcamos las funciones
//y variables que mandaremos al archivo principal

//se cambia la extension a minjavascript para
//que el navegador acepte el módulo

class Contacto {
  constructor(dni, nombre, apellido, telefono) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }
}

let botonEliminar, botonEditar;
export let agenda = [];
let main = document.querySelector("main");
let resultado = document.querySelector(".resultado");

export const agregarContacto = (dni, nombre, apellido, telefono) => {
  let contactoExiste = agenda.find((ele) => ele.dni === dni);
  if (!contactoExiste) {
    if (chekearDatos(dni, nombre, apellido, telefono)) {
      let contacto = new Contacto(dni, nombre, apellido, telefono);
      agenda.push(contacto);
    } else {
      alert(
        "DNI y TELEFONO deben ser números, NOMBRE Y APELLIDO deben ser texto"
      );
    }
  } else {
    alert("ya hay un contacto con ese dni");
  }
};

export const eliminarContacto = (dni) => {
  if (agenda.length === 0) {
    alert("No hay nada en la agenda");
  } else {
    if (isNaN(dni)) {
      alert("el DNI debe ser un número");
    } else {
      eliminarIndice(dni);
    }
  }
  renovarAgenda();
};

export const verContacto = (dni) => {
  if (agenda.length === 0) {
    alert("No hay nada en la agenda");
  } else {
    if (isNaN(dni)) {
      alert("el DNI debe ser un número");
    } else {
      verIndice(dni);
    }
  }
};

//FUNCIONES AUXILIARES

function eliminarIndice(dni) {
  let contactoAEliminar = agenda.find((ele) => ele.dni === dni);
  let indiceAEliminar = agenda.indexOf(contactoAEliminar);
  agenda.splice(indiceAEliminar, 1);
}

function verIndice(dni) {
  let indiceAVer = agenda.indexOf(agenda.find((ele) => ele.dni === dni));
  encontrarDatosDeContacto(agenda[indiceAVer]);
}

function chekearDatos(dni, nombre, apellido, telefono) {
  if (!isNaN(dni) && isNaN(nombre) && isNaN(apellido) && !isNaN(telefono)) {
    return true;
  } else {
    return false;
  }
}

function encontrarDatosDeContacto(contacto) {
  let resultadoDni = document.querySelector("#resultado-dni");
  let resultadoNombre = document.querySelector("#resultado-nombre");
  let resultadoTel = document.querySelector("#resultado-tel");
  resultadoDni.textContent = contacto.dni;
  resultadoNombre.textContent = `${contacto.apellido}, ${contacto.nombre}`;
  resultadoTel.textContent = contacto.telefono;
  resultado.style.display = "flex"; //vuelve visible la card con el resultado
}

//crear card de contacto

const generarCardContacto = (ele) => {
  let cardContacto = escribirDatos(ele);
  main.appendChild(cardContacto);
  //cada vez que se pintan las cards
  //se levantan todos los botones nuevos
  //y se programan los eventos
  botonEliminar = document.querySelectorAll("#eliminar");
  botonEliminar.forEach((btn) => {
    btn.onclick = (e) => {
      let dni = e.target.parentElement.firstChild.textContent;
      eliminarContacto(parseInt(parseInt(dni)));
    };
  });
  botonEditar = document.querySelectorAll("#editar");
  botonEditar.forEach((btn) => {
    btn.onclick = (e) => {
      let dni = e.target.parentElement.firstChild.textContent;
      // eliminarContacto(parseInt(parseInt(dni)));
      editarContacto(parseInt(dni));
    };
  });
};

function generarBotonBorrar() {
  let botonBorrar = document.createElement("svg");
  //los atributos nos permiten darle el estilo
  //y el id con el que levantamos los botones
  botonBorrar.setAttribute("id", "eliminar");
  botonBorrar.setAttribute("class", "borrar");
  botonBorrar.innerHTML = "X";
  //devolvemos el botón creado
  //para guardarlo en una variable(línea139)
  return botonBorrar;
}

function escribirDatos(ele) {
  let cardContacto = document.createElement("div");
  let botonEditar = document.createElement("span");
  let dniContacto = document.createElement("span");
  let nombreContacto = document.createElement("span");
  let telContacto = document.createElement("span");
  let botonBorrar = generarBotonBorrar();

  dniContacto.setAttribute("class", "dni");
  nombreContacto.setAttribute("class", "name");
  telContacto.setAttribute("class", "tel");
  cardContacto.setAttribute("class", "contacto");
  botonEditar.setAttribute("id", "editar");

  cardContacto.appendChild(dniContacto);
  cardContacto.appendChild(nombreContacto);
  cardContacto.appendChild(telContacto);
  cardContacto.appendChild(botonEditar);
  cardContacto.appendChild(botonBorrar);

  botonEditar.textContent = "✏️";
  dniContacto.textContent = ele.dni;
  nombreContacto.textContent = `${ele.apellido}, ${ele.nombre} `;
  telContacto.textContent = ele.telefono;

  return cardContacto;
}

//función para mostrar toda la agenda en el navegador
export const renovarAgenda = () => {
  main.innerHTML = ""; //resetea la pantalla
  agenda.forEach((ele) => {
    generarCardContacto(ele);
  });
};

//editarcontacto

const editarContacto = (dni) => {
  //encontramos el contacto, de existir
  //lo modificamos con los valores ingresados
  //después de comprobar los tipos de dato
  let contactoExiste = agenda.find((ele) => ele.dni === dni);
  if (contactoExiste) {
    let indiceDeContacto = agenda.indexOf(contactoExiste);
    let nombre = prompt("nuevo nombre");
    let apellido = prompt("nuevo apellido");
    let telefono = prompt("nuevo telefono");
    if (
      typeof nombre === "string" &&
      typeof apellido === "string" &&
      typeof parseInt(telefono) === "number"
    ) {
      let objetoAEditar = agenda[indiceDeContacto];
      objetoAEditar.nombre = nombre;
      objetoAEditar.apellido = apellido;
      objetoAEditar.telefono = telefono;
    } else {
      alert("datos inválidos");
    }
  } else {
    alert("no existe un contacto con ese dni");
  }
  renovarAgenda();
};

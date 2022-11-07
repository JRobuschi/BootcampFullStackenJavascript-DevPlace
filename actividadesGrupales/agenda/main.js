var person = {
  name: "Jose",
  lastName: "perez",
  age: 20,
  active: true,
  fullname: function () {
    return this.name + " " + this.lastName;
  },
  address: {
    state: "CABA",
    street: "Blanco...",
    number: 12,
    cp: 1024,
  },
  jobi: ["musica", "leer", "cantar"],
};
var arrayObject = [
  {
    name: "hola",
    ape: "ejemplo",
  },
  {
    name: "hola",
    ape: "ejemplo",
  },
  {
    name: "hola",
    ape: "ejemplo",
  },
  {
    name: "hola",
    ape: "ejemplo",
  },
];
arrayObject.forEach((element) => {
  element.name;
});

var resultado = document.getElementById("status");
//resultado.innerHTML = person.fullname() + "" + person["address"]["cp"];
console.log(person.fullname());
/*var obj = new Object();
  obj.name = "hola";
  
  var nombre = "juan";
  var apellido = "Pedro";
  var pr = [
    { nombre, apellido },
    { nombre, apellido },
    { nombre, apellido }
  ];
  */
var indexinput = document.getElementById("index");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var dni = document.getElementById("dni");
var filterData = document.getElementById("filterData");
var listFilter = [];
var listPerson = [];
function save() {
  if (parseInt(indexinput.value) === -1) {
    let existe = verificationDni(dni.value);
    if (validateInputs() === false) {
      if (existe === -1) {
        let obj = {
          nombre: nombre.value,
          apellido: apellido.value,
          dni: dni.value,
          mostarData: function () {
            return (
              "DNI: " +
              this.dni +
              " Nombre: " +
              this.nombre +
              " Apellido: " +
              this.apellido +
              "<br>"
            );
          },
        };
        listPerson.push(obj);
        mostrarData(1);
        tableResult();
        alertHidden(2, "Datos Guardados exitosamente");
        clearData();
      } else {
        alertHidden(1, "Error. El DNI ya se encuentra registrado");
        //alert("EL DNI EXISTE");
      }
    } else {
      alertHidden(1, "Faltan datos, ingrese los datos correctos");
    }
  } else {
    updateData();
  }
}

function validateInputs() {
  let nombreInput = nombre.value;
  let apellidoInput = apellido.value;
  let dniInput = dni.value;
  if (nombreInput !== "" && apellidoInput !== "" && dniInput !== "") {
    return false;
  }
  return true;
}

function clearData() {
  nombre.value = "";
  apellido.value = "";
  dni.value = "";
}

function verificationDni(valor) {
  /* let band = false;
    listPerson.forEach((element) => {
      if (element.dni === valor) {
        band = true;
      }
    });
    return band;
    [2,3,4,6,2,3,5]
    */
  return listPerson.findIndex((element) => element.dni === valor);
}

function mostrarData(x) {
  let text = "";
  if (x === 1) {
    listPerson.forEach((element) => {
      text += element.dni; //element.mostarData();
    });
    // resultado.innerHTML = text;
  } else {
    listFilter.forEach((element) => {
      text += element.dni; //element.mostarData();
    });

    // filterData.innerHTML = text;
  }
}

function consultarData(valor) {
  listFilter = listPerson.filter((element) => {
    return element.nombre.toLowerCase() === valor.toLowerCase();
  });
  console.log(listFilter);
}

function consultarDni(valor) {
  listFilter = listPerson.filter((element) => {
    return element.dni === valor;
  });
  console.log(listFilter.length);
  if (listFilter.length > 0) {
    nombre.value = listFilter[0].nombre;
    apellido.value = listFilter[0].apellido;
  } else {
    alertHidden(1, "EL DNI NO SE ENCUENTA");
    nombre.value = "";
    apellido.value = "";
  }
}

function consultar() {
  consultarDni(dni.value);
  mostrarData(2);
}

function eliminar() {
  var index = verificationDni(dni.value);
  console.log(index);
  if (index === -1) {
    alert("EL DNI NO EXISTE");
  } else {
    listPerson.splice(index, 1);
    mostrarData(1);
  }
}
alertHidden(99);
function alertHidden(oculto, message = null) {
  let error = document.getElementById("error");
  let success = document.getElementById("success");
  if (oculto === 1) {
    error.style.display = "block";
    error.innerHTML = message;
    success.style.display = "none";
  } else if (oculto === 2) {
    error.style.display = "none";
    success.style.display = "block";
    success.innerHTML = message;
  } else {
    error.style.display = "none";
    success.style.display = "none";
  }
  setTimeout(() => {
    error.style.display = "none";
    success.style.display = "none";
  }, 2000);
}

function tableResult() {
  let resultTable = document.getElementById("resultTable");
  let resulTr = "";
  listPerson.forEach((element, index) => {
    resulTr += `<tr><td>${index + 1}</td><td>${element.nombre}</td><td>${
      element.apellido
    }</td><td>${element.dni}</td>
      <td><button class="btn m-1 btn-danger" type="button" onclick="editarId(${index})">Editar</button><button class="btn btn-warning m-1" type="button" onclick="eliminarId(${index})">Eliminar</button><br>
    </tr>`;
  });
  resultTable.innerHTML = resulTr;
}

function eliminarId(index) {
  var boolean = confirm(
    "Seguro que desea eliminar " + listPerson[index].nombre + "?"
  );
  if (boolean) {
    alertHidden(2, "Elemento eliminado");
    listPerson.splice(index, 1);
    listPersonStorage();
    tableResult();
  } else {
    alertHidden(1, "Cancelo La operación");
  }
}

function editarId(index) {
  console.log(listPerson[index]);
  nombre.value = listPerson[index].nombre;
  apellido.value = listPerson[index].apellido;
  dni.value = listPerson[index].dni;
  dni.setAttribute("readonly", "readonly");
  indexinput.value = index;
}

function updateData() {
  var index = indexinput.value;
  listPerson[index].nombre = nombre.value;
  listPerson[index].apellido = apellido.value;
  dni.removeAttribute("readonly");
  indexinput.value = -1;
  clearData();
  tableResult();
}

//Alamacenar los datos en la sesion del storage
/**Si el usuario cierra el navegador
 * la información se borrara. (SessionStorage)
 */
/**Agregar items a la storage setItem
 * primer valor es el de la variables
 * el segundo valor es el value de la variable
 */
sessionStorage.setItem("firstname", "Prueba del sistema");
/** Tenemos la opcion de leer la variable del storage
 * GetItem(nombre variable), nos devolvera el valor
 */
console.log(sessionStorage.getItem("firstname"));
console.log(sessionStorage.getItem("lastname"));
/** Remover el item
 * removeItem(nombre variable) eliminar el item creado
 */
sessionStorage.removeItem("firstname");
/** Remover todos los items creado vaciar, limpiar el storage
 * clear(), permite limpiar el storage
 */
sessionStorage.clear();
sessionStorage.setItem("firstname", "Prueba del sistema");

/** Local Storage
 * localStorage guardar la informacion en el navegador, y los
 * datos se van a mantener, asi el usuario cierre el navegador.
 */
/** Agregar un Item
 * localStorage.setItem("nombre variable", "valor")
 */
localStorage.setItem("firstname", "ejemplo de local");
console.log(localStorage.getItem("firstname"));
/** Leer el item
 * localStorage.getItem("nombre de la variable");
 */
localStorage.setItem("firstname", "ejemplo de locals");
console.log(localStorage.getItem("firstname"));
/** Remover el item del localstorage
 * localStorage.removeItem("nombre del item")
 */
localStorage.removeItem("firstname");
/** limpiar remover todos los items
 * clear();
 */
//localStorage.clear();

var student = {
  firstName: "Duglas",
  lastName: "Moreno",
  year: 20,
};
localStorage.setItem("student", JSON.stringify(student));
console.log(localStorage.getItem("student"));
var pr = JSON.parse(localStorage.getItem("student"));
console.log(pr);
console.log(pr.firstName);

inicialStore();

function inicialStore() {
  console.log(localStorage.getItem("listPerson"));
  if (localStorage.getItem("listPerson") != null) {
    listPerson = JSON.parse(localStorage.getItem("listPerson"));
    tableResult();
  } else {
    localStorage.setItem("listPerson", JSON.stringify(listPerson));
  }
}
function listPersonStorage() {
  localStorage.setItem("listPerson", JSON.stringify(listPerson));
}
function saveStorage() {
  if (parseInt(indexinput.value) === -1) {
    let existe = verificationDni(dni.value);
    if (validateInputs() === false) {
      if (existe === -1) {
        let obj = {
          nombre: nombre.value,
          apellido: apellido.value,
          dni: dni.value,
          cantidad: 1,
          mostarData: function () {
            return (
              "DNI: " +
              this.dni +
              " Nombre: " +
              this.nombre +
              " Apellido: " +
              this.apellido +
              "<br>"
            );
          },
        };
        listPerson.push(obj);
        listPersonStorage();
        mostrarData(1);
        tableResult();
        alertHidden(2, "Datos Guardados exitosamente");
        clearData();
      } else {
        alertHidden(1, "Error. El DNI ya se encuentra registrado");
        //alert("EL DNI EXISTE");
      }
    } else {
      alertHidden(1, "Faltan datos, ingrese los datos correctos");
    }
  } else {
    updateData();
    listPersonStorage();
  }
}

function addcart(index) {
  listPerson.forEach((element, indexElement) => {
    if (indexElement === index) {
      element.cantidad = element.cantidad + 1;
    }
  });
  console.log(listPerson);
  localStorage.setItem("listPerson", JSON.stringify(listPerson));
}
function removecar(index) {
  listPerson.forEach((element, indexElement) => {
    if (indexElement === index) {
      element.cantidad = element.cantidad - 1;
      if (element.cantidad === 0) {
        listPerson.splice(index, 1);
        tableResult();
      }
    }
  });
  localStorage.setItem("listPerson", JSON.stringify(listPerson));
}
var orderna = 0;
var buscar = [];
function ordenar() {
  console.log(orderna);
  let icons = document.getElementById("icons");
  if (orderna === 0) {
    orderna = 1;
    icons.classList.add("fa-arrow-down");
    icons.classList.remove("fa-arrow-up");
    listPerson.sort((a, b) => a.dni - b.dni);
  } else {
    orderna = 0;
    icons.classList.add("fa-arrow-up");
    icons.classList.remove("fa-arrow-down");
    listPerson.sort((a, b) => b.dni - a.dni);
  }

  buscar = listPerson;
  tableResult();
  console.log(orderna);
}
ordenar();
function findData() {
  let searchName = document.getElementById("find").value;

  listPerson = listPerson.filter((item) => {
    return (
      item.nombre.toString().toLowerCase().indexOf(searchName.toLowerCase()) >
        -1 ||
      item.apellido.toLowerCase().indexOf(searchName.toLowerCase()) > -1 ||
      item.dni.toLowerCase().indexOf(searchName.toLowerCase()) > -1
    );
  });

  if (searchName.length === 0) {
    listPerson = buscar;
  }
  tableResult();
  listPerson = buscar;
}

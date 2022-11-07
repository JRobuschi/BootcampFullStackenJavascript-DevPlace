let oficina = null;

class Oficina {
  constructor(nombreOf, cantidadEmpleados) {
    this.nombreOf = nombreOf;
    this.cantidadEmpleados = cantidadEmpleados;

    if (typeof Oficina.instance === Object) {
      return Oficina.instance;
    } else {
      Oficina.instance = this;
      return this;
    }
  }

  GetOficinaData(cantidadEmpleados) {
    return this.cantidadEmpleados;
  }
}

function init_Oficina() {
  var oficina1 = new Oficina("data1", 8);
  var oficina2 = new Oficina("data2", 4);
  console.log(oficina1.GetOficinaData());
  console.log(oficina2.GetOficinaData());

  //El operador instanceof verifica si un objeto en su cadena de prototipos contiene la propiedad prototype de un constructor.
  console.log(oficina1 instanceof Oficina);
  console.log(oficina2 instanceof Oficina);
  console.log(oficina1 === oficina2);
}

init_Oficina();

//Contradice al principio abierto-cerradi, por que este modulo de software deberia estar abierto a extension pero cerrado a modificaciones.

// class Color {
//   constructor(color) {}
// }

// class Vencimiento {
//   constructor(vencimiento) {}
// }

// class Factory {
//   crate = (color, vencimiento) => {

//   };
// }

// Vehiculos cars(pequeños) Trailers(camionetas)

class Cars {
  constructor(parametros) {
    this.color = parametros.color;
    this.puertas = parametros.puertas;
  }
}

class Trailers {
  constructor(parametros) {
    this.color = parametros.color;
    this.puertas = parametros.puertas;
  }
}

class FactoryCars {
  create = (parametros, tipoCars) => {
    if (!tipoCars) {
      return "Error";
    } else {
      let vehiculo;
      if (tipoCars === "car") {
        vehiculo = new Cars(parametros);
      } else if (tipoCars === "trailers") {
        vehiculo = new Trailers(parametros);
      }
      vehiculo.tipo = tipoCars;
      return vehiculo;
    }
  };
}

const vehiculoFactory = new FactoryCars();
const car1 = vehiculoFactory.create(
  {
    color: 2,
    puertas: 4,
  },
  "car"
);

const car2 = vehiculoFactory.create(
  {
    color: 2,
    puertas: 4,
  },
  "trailers"
);

console.log(car1);
console.log(car2);

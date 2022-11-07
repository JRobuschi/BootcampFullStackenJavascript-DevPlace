class Person {
  nombre;
  apellido;
  id;

  constructor(nombre, apellido, id) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
  }
}

class Producto extends Person {
  servicio;

  constructor(nombre, apellido, id, servicio) {
    super(nombre, apellido, id);
    this.servicio = servicio;
  }
  clone() {
    return new Producto(super(nombre, apellido, id), this.servicio);
  }
}

class CuentaCorriente extends Producto {
  empresaDueña;

  constructor(nombre, apellido, id, servicio, empresaDueña) {
    super(nombre, apellido, id, servicio);
    this.empresaDueña = empresaDueña;
  }
}

class CajaAhorro extends Producto {
  totalDePlata;

  constructor(nombre, apellido, id, servicio, totalDePlata) {
    super(nombre, apellido, id, servicio);
    this.totalDePlata = totalDePlata;
  }
}

class SeguroDeVida extends Producto {
  edad;

  constructor(nombre, apellido, id, servicio, edad) {
    super(nombre, apellido, id, servicio);
    this.edad = edad;
  }
}

class SeguroHogar extends Producto {
  localidad;
  direccion;

  constructor(nombre, apellido, id, servicio, localidad, direccion) {
    super(nombre, apellido, id, servicio);
    this.localidad = localidad;
    this.direccion = direccion;
  }
}

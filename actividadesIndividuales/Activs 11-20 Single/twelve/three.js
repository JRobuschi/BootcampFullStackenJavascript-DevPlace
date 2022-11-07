//Builder
class Pizza {
  constructor() {
    this.tomate = false;
    this.muzza = false;
    this.rodajasPanceta = 0;
    this.oregano = false;
    this.cantAceitunas = 0;
    this.otrosIngredientes = [];

    //this.tomate = tomate -> tomate siendo pasado por parametro;
  }

  setTomate() {
    this.tomate = true;
    return this;
  }

  setMuzza() {
    this.queso = true;
    return this;
  }

  setRodajasPanceta(rodajas) {
    this.rodajasPanceta = rodajas;
    return this;
  }

  setOregano() {
    this.oregano = true;
    return this;
  }

  setCantAceitunas(aceitunas) {
    this.cantAceitunas = aceitunas;
    return this;
  }

  setOtrosIngredientes(ingrediente) {
    this.otrosIngredientes.push(ingrediente);
    return this;
  }

  build() {
    return {
      tomate: this.tomate,
      muzza: this.muzza,
      rodajasPanceta: this.rodajasPanceta,
      oregano: this.oregano,
      cantAceitunas: this.cantAceitunas,
      otrosIngredientes: this.otrosIngredientes,
    };
  }
}

const nuevaPizza = new Pizza().setTomate().setMuzza().setOregano().build();

const PizzaEspecial = new Pizza()
  .setTomate()
  .setMuzza()
  .setOtrosIngredientes(["Roquefort", "Cheddar", "Provolone"])
  .build();

console.log(PizzaEspecial);

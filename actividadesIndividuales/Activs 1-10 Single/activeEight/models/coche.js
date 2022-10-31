class Coche extends Motor,Rueda, Puerta {
    motor;
    rueda1;
    rueda2;
    rueda3;
    rueda4;
    puerta1;
    puerta2;

    constructor(){
        this.motor = new Motor();
        this.rueda1 = new Rueda();
        this.rueda2 = new Rueda();
        this.rueda3 = new Rueda();
        this.rueda4 = new Rueda();
        this.puerta1 = new Puerta();
        this.puerta2 = new Puerta();
    }
}
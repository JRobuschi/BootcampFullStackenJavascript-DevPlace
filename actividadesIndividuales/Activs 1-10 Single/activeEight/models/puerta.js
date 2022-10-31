class Puerta extends Ventana{
    abierta;
    ventana;

    constructor(){
        this.abierta=false;
        this.ventana=new Ventana();
    }

    abrirPuerta(){
        this.abierta=true;
    }

    cerrarPuerta(){
        this.abierta=false;
    }
}
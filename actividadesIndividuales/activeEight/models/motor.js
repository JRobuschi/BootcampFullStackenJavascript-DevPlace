class Motor{
    encendido;

    constructor(){
        this.estado=false;
    }

    prender(){
        this.encendido = true;
    }

    apagar(){
        this.encendido = false;
    }
}
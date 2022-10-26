class Cuenta{
    titular;
    cantidad;

    constructor(){
        this.titular = "Mateo";
        this.cantidad = 0;
    }

    getTitular(){
        return this.titular 
    }

    getCantidad(){
        return this.cantidad
    }

    setTitular(titular){
        if(titular == String){
            this.titular = titular;
        }else{
            console.log("No es valido ese titular")
        }
    }

    setCantidad(cantidad){
        if(cantidad == Number){
            this.cantidad = cantidad;
        }else{
            console.log("Es un valor invalido de cantidad")
        }
    }

    mostrar(titular, cantidad){
        console.log
    }
}
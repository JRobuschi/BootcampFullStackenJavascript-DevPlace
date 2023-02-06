import React from "react";
import "../App.css";

function Abuelo(){
    return (<>
    <h1>Tienda de Tecnologia</h1>
    <Padre/> 
        </>)
}

function Padre(){
    return(<>
    <h2>La mejor atencion</h2>
    <Hijo/>
    </>)
}

function Hijo(){
    return <h3>Muchos productos</h3>
}

export default Abuelo;
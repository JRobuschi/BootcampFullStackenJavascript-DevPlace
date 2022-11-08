import React from "react";
import "../App.css";

function Abuelo(){
    return (<>
    <h1>Hola soy el Abuelo</h1>
    <Padre/> 
        </>)
}

function Padre(){
    return(<>
    <h2>Hola soy el Padre</h2>
    <Hijo/>
    </>)
}

function Hijo(){
    return <h3>Hola soy el Hijo</h3>
}

export default Abuelo;
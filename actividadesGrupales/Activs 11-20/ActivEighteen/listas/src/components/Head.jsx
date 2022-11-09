import React from "react";
import '../styles/head.css'

function Head(props){

    function selectSection(e){
        props.setSection(e.target.textContent)
    }

    return(
        <header>
            <h1>Cyclops</h1>
            <nav>
                <ul>
                    <li data-name="Productos" onClick={selectSection}>Productos</li>
                    <li data-name="Marca" onClick={selectSection}>Marca</li>
                    <li data-name="FAQ" onClick={selectSection}>FAQ</li>
                </ul>
            </nav>
        </header>
    )
}

export default Head;
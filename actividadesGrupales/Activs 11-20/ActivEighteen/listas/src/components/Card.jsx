import React from "react";
import '../styles/card.css'

function Card(props){
    return(
        <div className="card">
            <span className="card-title">{props.obj.title}</span>
            <img src={props.obj.img} alt="" className="card-img" />
            <span className="card-price">{props.obj.price}</span>
        </div>
    )
}

export default Card;
import React from "react";

import { Button } from "react-bootstrap/";
  
const productos = [
    {
        id: 0,
        img: "https://www.lenovo.com/medias/23073683046-73368-20201123120156.png?context=bWFzdGVyfHJvb3R8MTYzMDc5fGltYWdlL3BuZ3xoYjEvaDg5LzExODExMjYwMzM0MTEwLnBuZ3w5MGI4MjlkYzc5MWRiN2MwMDE1NTYzNTgwOTg2ZTU0MjgxZDI4ZDc2YTMxMTI4YzA5YzVhNjlhNDUwZjUzMDhj",
        title: "Monitor",
        description: "Monitor para juegos QHD Lenovo ",
        price:500,
    },
    {
        id: 1,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_932126-MLA50021886571_052022-F.webp",
        title: "Mouse",
        description: "Mouse Ps2 Con Bolita Varios",
        price:1000,
    },
    {
        id: 2,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_894065-MLA51903347632_102022-F.webp",
        title: "Teclado",
        description: "Teclado gamer Razer DeathStalker ",
        price:250,
    },
    {
        id: 3,
        img: "https://images-ext-2.discordapp.net/external/r3WSl2ZV4tle02fPhthkJQA313O31KZLfHkEjQ0g5yA/%3Fq%3Dtbn%3AANd9GcTS3Yklt5RbhleoInOypWA4ngdrP_2PMt9KiA%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images",
        title: "Placa de video",
        description: "Placa de video AFOX SuperUltra",
        price:700,
    },
    
    
];


function mapenado(){
    return (<>{productos.map((e) => (
        
 <h3>{e.title}</h3>
      ))}</>)
}


function resumenProductos() {
  return alert(mapenado)
}

export default function Products() {
  return (
    <>
      <Button onClick={resumenProductos}>Ver Los Tipos de Productos</Button>
    </>
  );
}

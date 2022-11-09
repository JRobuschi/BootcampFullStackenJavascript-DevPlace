import Monitores from "./Monitores";
import Mouse from "./Mouse";
import Teclado from "./Teclado";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';



function DevolverTodo() {
  const productos = [
    {
      id: 0,
      img: "https://www.lenovo.com/medias/23073683046-73368-20201123120156.png?context=bWFzdGVyfHJvb3R8MTYzMDc5fGltYWdlL3BuZ3xoYjEvaDg5LzExODExMjYwMzM0MTEwLnBuZ3w5MGI4MjlkYzc5MWRiN2MwMDE1NTYzNTgwOTg2ZTU0MjgxZDI4ZDc2YTMxMTI4YzA5YzVhNjlhNDUwZjUzMDhj",
      title: "Monitor",
      description: "Monitor para juegos QHD Lenovo ",
      price: 500,
    },
    {
      id: 1,
      img: "https://www.lenovo.com/medias/23073683046-73368-20201123120156.png?context=bWFzdGVyfHJvb3R8MTYzMDc5fGltYWdlL3BuZ3xoYjEvaDg5LzExODExMjYwMzM0MTEwLnBuZ3w5MGI4MjlkYzc5MWRiN2MwMDE1NTYzNTgwOTg2ZTU0MjgxZDI4ZDc2YTMxMTI4YzA5YzVhNjlhNDUwZjUzMDhj",
      title: "Monitor",
      description: "Mouse Ps2 Con Bolita Varios",
      price: 1000,
    },
    {
      id: 2,
      img: "https://www.lenovo.com/medias/23073683046-73368-20201123120156.png?context=bWFzdGVyfHJvb3R8MTYzMDc5fGltYWdlL3BuZ3xoYjEvaDg5LzExODExMjYwMzM0MTEwLnBuZ3w5MGI4MjlkYzc5MWRiN2MwMDE1NTYzNTgwOTg2ZTU0MjgxZDI4ZDc2YTMxMTI4YzA5YzVhNjlhNDUwZjUzMDhj",
      title: "Monitor",
      description: "Teclado gamer Razer DeathStalker ",
      price: 250,
    },
    {
      id: 3,
      img: "https://http2.mlstatic.com/D_NQ_NP_788429-MLA51064776306_082022-V.jpg",
      title: "Mouse",
      description: "Monitor para juegos QHD Lenovo ",
      price: 500,
    },
    {
      id: 4,
      img: "https://http2.mlstatic.com/D_NQ_NP_788429-MLA51064776306_082022-V.jpg",
      title: "Mouse",
      description: "Mouse Ps2 Con Bolita Varios",
      price: 1000,
    },
    {
      id: 5,
      img: "https://http2.mlstatic.com/D_NQ_NP_788429-MLA51064776306_082022-V.jpg",
      title: "Mouse",
      description: "Teclado gamer Razer DeathStalker ",
      price: 250,
    },
    {
      id: 6,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_894065-MLA51903347632_102022-F.webp",
      title: "Teclado",
      description: "Monitor para juegos QHD Lenovo ",
      price: 500,
    },
    {
      id: 7,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_894065-MLA51903347632_102022-F.webp",
      title: "Teclado",
      description: "Mouse Ps2 Con Bolita Varios",
      price: 1000,
    },
    {
      id: 8,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_894065-MLA51903347632_102022-F.webp",
      title: "Teclado",
      description: "Teclado gamer Razer DeathStalker ",
      price: 250,
    },
  ];

  const [count, setCount] = useState(false);
  const handleClose = () => setCount(false);
  const handleShow = () => setCount(true);

  return (
    <>
      <Monitores />
      <Mouse />
      <Teclado />

      <Container className="d-flex justify-content-center mt-3">
      <Button variant="primary" onClick={handleShow}>
        Resumen
      </Button>

      <Modal count={count} onHide={handleClose}>
        <Modal.Header className="d-flex" closeButton>
          <Modal.Title >Todos los Productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>{productos.map((element)=>(
          <div key={element.id}>
            <h5 className="text-center">{element.title}</h5>
          </div>
        ))}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Seguir viendo
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </>
  );
}

export default DevolverTodo;
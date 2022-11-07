//No me dejaba hacerlo sin importar react
import React from "react";

//Actividad 1
// class Auto extends React.Component {
//   render() {
//     return <h2>Soy un Auto</h2>;
//   }
// }

// export default Auto;

//Actividad 2

// function Auto() {
//   return <h2>Soy un Auto</h2>;
// }

// export default Auto;

//Actividad 3 esta en el index.js

//Actividad 4

// function Auto(props) {
//   return <h2>Soy un Auto {props.color}</h2>;
// }

// export default Auto;

//Actividad 5

function Auto(props) {
  return <h2>Soy un Auto {props.color}</h2>;
}

function Garage() {
  return (
    <>
      <h1>Quien sos vos??</h1>;
      <Auto color="Rojo" />
    </>
  );
}

export default Garage;

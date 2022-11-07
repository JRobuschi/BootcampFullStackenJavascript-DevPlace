import "./App.css";
import { useState } from "react";

function App() {
  //Activ 1
  const first = "Hola JSX";

  //Activ 2
  const user = [
    { name: "Pedro", id: 1 },
    { name: "Martina", id: 2 },
    { name: "Jose", id: 3 },
  ];

  //Activ 3
  function ListadoResultados(props) {
    return (
      <ul>
        {props.resultados.map((elemento) => (
          <li>
            La suma de {elemento.valor1} y {elemento.valor2} es{" "}
            {elemento.resultado}
          </li>
        ))}
      </ul>
    );
  }

  const [operaciones, setOperacion] = useState([]);

  function sumar(event) {
    event.preventDefault();
    const v1 = parseInt(event.target.valor1.value, 10);
    const v2 = parseInt(event.target.valor2.value, 10);
    const suma = v1 + v2;
    const nuevo = {
      resultado: suma,
      valor1: v1,
      valor2: v2,
    };
    setOperacion([nuevo, ...operaciones]);
    event.target.valor1.value = "";
    event.target.valor2.value = "";
  }

  //Activ 4

  const holaMundo = "Hola Mundo!!!";

  return (
    <>
      <h1>{first}</h1>

      <ul>
        {user.map((e) => (
          <div key={e.id}>
            <h3>Nombre: {e.name}</h3>
            <ul>id: {e.id}</ul>
          </div>
        ))}
      </ul>

      <div>
        <form onSubmit={sumar}>
          <p>
            Ingrese primer valor:
            <input type="text" name="valor1" />
          </p>
          <p>
            Ingrese segundo valor:
            <input type="text" name="valor2" />
          </p>
          <input type="submit" value="Sumar" />
        </form>
        <ListadoResultados resultados={operaciones} />
      </div>

      <h1 className="miclase">{holaMundo}</h1>
    </>
  );
}

export default App;

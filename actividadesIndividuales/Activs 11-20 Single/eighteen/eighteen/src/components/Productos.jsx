import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Monitores from "./Monitores";
import Mouse from "./Mouse";
import Teclado from "./Teclado";
import Todos from "./Todos";
import "./Productos.css";

//import Sonnet from '../../components/Sonnet';

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Monitores">
        <Monitores />
      </Tab>
      <Tab eventKey="profile" title="Mouse">
        <Mouse />
      </Tab>
      <Tab eventKey="contact" title="Teclados">
        <Teclado />
      </Tab>
      <Tab eventKey="Todos" title="Todos">
        <Todos />
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;

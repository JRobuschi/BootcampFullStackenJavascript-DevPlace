import Carousel from "react-bootstrap/Carousel";
import Cards from "./Cards";
import "./Carrousel.css";

function UncontrolledExample() {
  return (
    <Carousel variant="dark" className="carrousel">
      <Carousel.Item className="container-carrousel">
        <div className="d-flex gap-3 justify-content-center mt-5 mb-5">
          <Cards />
        </div>
      </Carousel.Item>
      <Carousel.Item className="container-carrousel">
        <div className="d-flex gap-3 justify-content-center mt-5 mb-5">
          <Cards />
        </div>
      </Carousel.Item>
      <Carousel.Item className="container-carrousel">
        <div className="d-flex gap-3 justify-content-center mt-5 mb-5">
          <Cards />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

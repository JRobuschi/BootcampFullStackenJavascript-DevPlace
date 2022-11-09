import Carousel from 'react-bootstrap/Carousel';
import Cards from "./Cards"


function UncontrolledExample() {
  return (
    <Carousel variant='dark'>
      <Carousel.Item>
          <div className='d-flex gap-3 justify-content-center mt-5 mb-5'>
            <Cards/>
             
          </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex gap-3 justify-content-center mt-5 mb-5'>
            <Cards/>
              
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex gap-3 justify-content-center mt-5 mb-5'>
            <Cards/>
              
          </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
import Carousel from "react-bootstrap/Carousel";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://media.gq.com.mx/photos/6035a2003cfde9cffa1c76ef/16:9/w_2991,h_1682,c_limit/reloj%20compromiso.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>What's your Style</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://media.revistagq.com/photos/60647838f0dbd58beb792309/16:9/w_2560%2Cc_limit/david%2520beckham%2520eyewear.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Never Hide</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/RFLSOTZHKZG45OGBLVOFWOCJXY.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fragance for man</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;

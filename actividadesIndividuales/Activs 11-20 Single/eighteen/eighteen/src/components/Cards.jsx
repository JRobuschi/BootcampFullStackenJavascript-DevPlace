import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }} >
        <div className='d-flex'>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
 <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_2X_868375-MLA49771546386_042022-F.webp" />
        </div>
       
     
    </Card>
  );
}

export default BasicExample;
import storeItems from "../data/items.json";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/cards/Cards";

function Store() {
  return (
    <>
      <h1 className="m-3">Store</h1>
      <div className="m-3">
        <Row md={2} xs={1} lg={3} className="g-3">
          {storeItems.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Store;

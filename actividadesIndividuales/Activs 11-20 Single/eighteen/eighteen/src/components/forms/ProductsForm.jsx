import React, { useState, useRef, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./productsForm.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Cards from "../cards/Cards";
import { ProductsContext } from "../../App";
import { allProducts } from "../list/List";

//Api connect
import axios from "axios";

function AddProduct(props) {
  const url = "http://localhost:3030/product";
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("stock", stock);
      bodyFormData.append("price", price);
      bodyFormData.append("title", title);
      bodyFormData.append("image", image[0]);
      bodyFormData.append("description", description);
      const resp = await axios.post(url, bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
    resetInputs();
    e.target.rest();
  };

  const titleInput = useRef();
  const stockInput = useRef();
  const priceInput = useRef();
  const categoryInput = useRef();
  const descriptionInput = useRef();
  const imageInput = useRef();

  //Cuando se manda el form se limpia el formulario
  function resetInputs() {
    titleInput.current.value = "";
    stockInput.current.value = "";
    priceInput.current.value = "";
    categoryInput.current.value = "";
    descriptionInput.current.value = "";
    imageInput.current.value = "";
  }
  ///////////////////////

  const [productos, setProductos] = useState(null);

  useEffect(() => {
    allProducts(setProductos);
  }, []);

  return (
    <>
      <section className="addproduct__container">
        <h2>Add Product</h2>
        <form
          action="/"
          method="POST"
          className="form"
          id="form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <Row>
            <Form.Group className="mb-3">
              <Form.Label>Title Product</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ref={titleInput}
              />
            </Form.Group>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  name="stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  type="number"
                  placeholder="Stock"
                  ref={stockInput}
                />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>price</Form.Label>
                <Form.Control
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  placeholder="Enter price"
                  ref={priceInput}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
              {/* <Form.Label>Category</Form.Label>
              <Form.Select
                ref={categoryInput}
                value=" "
                className="mb-3"
                aria-label="Default select example"
              >
                <option>Open this select menu</option>
                <option value="monitor">Monitor</option>
                <option value="teclado">Teclado</option>
                <option value="mouse">Mouse</option>
              </Form.Select> */}
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control
                  onChange={(e) => setImage(e.target.files)}
                  type="file"
                  name="image"
                  ref={imageInput}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Product Description</Form.Label>
              <FloatingLabel
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                controlId="floatingTextarea2"
                label="Description"
                ref={descriptionInput}
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "125px" }}
                  ref={descriptionInput}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
        {/* <div className="showProduct">
          {props.products !== null ? (
            props.products.map((pro) => {
              return (
                <div key={pro.idProduct}>
                  <span>{pro.title}</span>
                </div>
              );
            })
          ) : (
            <span>Añadir producto </span>
          )}
          ;
        </div> */}
        {/* <div className="products-container">
          {selectProducts &&
            selectProducts.map((obj, idx) => {
              return (
                <>
                  <Cards obj={obj} key={idx} />
                </>
              );
            })}
        </div> */}
      </section>

      <h2>Store</h2>
      <Row md={2} xs={1} lg={3} className="g-3">
        {productos != null
          ? productos.map((producto) => (
              <Col>
                <Cards
                  key={producto.idProduct}
                  title={producto.title}
                  image={producto.image}
                  idProduct={producto.idProduct}
                  stock={producto.stock}
                  description={producto.description}
                />
              </Col>
            ))
          : "no hay productos"}
      </Row>
    </>
  );
}

export default AddProduct;

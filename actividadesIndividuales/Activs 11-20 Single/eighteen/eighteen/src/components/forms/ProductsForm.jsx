import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./productsForm.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

//Api connect

import axios from "axios";

function AddProduct() {
  const url = "http://localhost:3030/product";
  const [title, setTitle] = useState(null);
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
      e.target.reset();
    } catch (error) {
      console.log(error.response);
    }
  };
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
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
              <Form.Label>Category</Form.Label>
              <Form.Select className="mb-3" aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="monitor">Monitor</option>
                <option value="teclado">Teclado</option>
                <option value="mouse">Mouse</option>
              </Form.Select>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control
                  onChange={(e) => setImage(e.target.files)}
                  type="file"
                  name="image"
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
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "125px" }}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </section>
    </>
  );
}

export default AddProduct;

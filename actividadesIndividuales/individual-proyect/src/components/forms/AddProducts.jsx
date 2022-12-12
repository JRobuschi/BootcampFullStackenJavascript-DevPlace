import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./addProducts.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
//import Cards from "../cards/Cards";
//import { ProductsContext } from "../../App";
//import { allProducts } from "../list/List";
import { StoreItem } from "../../components/cards/Cardscrud";
import "../../pages/store.css";
import { allProducts } from "../../data/List";

import Swal from "sweetalert2";

//Api connect
import axios from "axios";

function AddProduct(props) {
  const url = "http://localhost:3060/product";
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("category", category);
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

  //Cuando se manda el form se limpia el formulario
  const titleInput = useRef();
  const priceInput = useRef();
  const categoryInput = useRef();
  const descriptionInput = useRef();
  const imageInput = useRef();
  function resetInputs() {
    titleInput.current.value = "";
    priceInput.current.value = "";
    categoryInput.current.value = "";
    descriptionInput.current.value = "";
    imageInput.current.value = "";
  }

  //Muestra un alerta cuando se envia el formulario
  const showAlert = () => {
    Swal.fire("Good job!", "You added this product to the cart!", "success");
  };

  //Mostrar todos los productos de la base de datos
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const products = await allProducts();
      setProducts(products);
    }
    fetchData();
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
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Title Product</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  ref={titleInput}
                  required
                />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  name="price"
                  type="number"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  ref={priceInput}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
              <Form.Label>Category</Form.Label>
              <Form.Select
                ref={categoryInput}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mb-3"
                aria-label="Default select example"
                required
              >
                <option value="fragance">Fragance</option>
                <option value="sunglasses">Sunglasses</option>
                <option value="wristwatch">Wristwatch</option>
              </Form.Select>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={(e) => setImage(e.target.files)}
                  ref={imageInput}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Product Description</Form.Label>
              <FloatingLabel
                name="description"
                controlId="floatingTextarea2"
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ref={descriptionInput}
                required
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "125px" }}
                  ref={descriptionInput}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Button
            style={{ background: "rgb(44, 74, 90)", border: "rgb(44, 74, 90)" }}
            type="submit"
            onClick={() => {
              const uno = showAlert();
              uno();
            }}
          >
            Submit
          </Button>
        </form>
      </section>
      <div className="store__container">
        <h4 className="m-3 mt-0 mb-0 p-3">All Products</h4>
        <div className="m-3">
          <Row md={2} xs={1} lg={3} className="g-3">
            {products != null
              ? products.map((item) => (
                  <Col
                    key={item.idProduct}
                    title={products.title}
                    image={products.image}
                    category={products.category}
                    idproduct={products.idProduct}
                    description={products.description}
                  >
                    <StoreItem {...item} />
                  </Col>
                ))
              : "no hay productos"}
          </Row>
        </div>
      </div>
    </>
  );
}

export default AddProduct;

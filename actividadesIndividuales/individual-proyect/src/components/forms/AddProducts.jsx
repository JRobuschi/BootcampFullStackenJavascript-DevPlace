import React, { useState, useRef, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./addProducts.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
//import Cards from "../cards/Cards";
//import { ProductsContext } from "../../App";
//import { allProducts } from "../list/List";
import Swal from "sweetalert2";

//Api connect
import axios from "axios";

function AddProduct(props) {
  //   const url = "http://localhost:3030/product";
  //   const [title, setTitle] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [stock, setStock] = useState("");
  //   const [image, setImage] = useState("");
  //   const [description, setDescription] = useState("");
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       var bodyFormData = new FormData();
  //       bodyFormData.append("stock", stock);
  //       bodyFormData.append("price", price);
  //       bodyFormData.append("title", title);
  //       bodyFormData.append("image", image[0]);
  //       bodyFormData.append("description", description);
  //       const resp = await axios.post(url, bodyFormData, {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       });
  //       console.log(resp.data);
  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //     resetInputs();
  //     e.target.rest();
  //   };

  //   const titleInput = useRef();
  //   const stockInput = useRef();
  //   const priceInput = useRef();
  //   const categoryInput = useRef();
  //   const descriptionInput = useRef();
  //   const imageInput = useRef();

  //   //Cuando se manda el form se limpia el formulario
  //   function resetInputs() {
  //     titleInput.current.value = "";
  //     stockInput.current.value = "";
  //     priceInput.current.value = "";
  //     categoryInput.current.value = "";
  //     descriptionInput.current.value = "";
  //     imageInput.current.value = "";
  //   }
  //   ///////////////////////

  //   const [productos, setProductos] = useState(null);

  //   useEffect(() => {
  //     allProducts(setProductos);
  //   }, []);

  const showAlert = () => {
    Swal.fire("Good job!", "You added this product to the cart!", "success");
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
          //   onSubmit={handleSubmit}
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
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                  // ref={titleInput}
                />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>price</Form.Label>
                <Form.Control
                  name="price"
                  type="number"
                  placeholder="Enter price"
                  //   value={price}
                  //   onChange={(e) => setPrice(e.target.value)}
                  //   ref={priceInput}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
              <Form.Label>Category</Form.Label>
              <Form.Select
                // ref={categoryInput}
                value=" "
                className="mb-3"
                aria-label="Default select example"
              >
                <option>Open this select menu</option>
                <option value="monitor">Fragance</option>
                <option value="teclado">Sunglasses</option>
                <option value="mouse">Wristwatch</option>
              </Form.Select>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  //   onChange={(e) => setImage(e.target.files)}
                  //   ref={imageInput}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Product Description</Form.Label>
              <FloatingLabel
                name="description"
                controlId="floatingTextarea2"
                label="Description"
                // value={description}
                // onChange={(e) => setDescription(e.target.value)}
                // ref={descriptionInput}
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "125px" }}
                  //   ref={descriptionInput}
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
    </>
  );
}

export default AddProduct;

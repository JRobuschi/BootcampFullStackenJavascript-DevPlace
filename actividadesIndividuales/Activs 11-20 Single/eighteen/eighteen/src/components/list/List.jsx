import axios from "axios";

const allProducts = async (state) => {
  const peticion = await axios.get("http://localhost:3030/product");
  state(peticion.data.data);
};

const oneProduct = async (idProduct, state) => {
  await axios
    .get(`http://localhost:3030/product/${idProduct}`)
    .then((response) => state(response.data.data));
  //.then((res) => (data = res));
  //return data;
};

export { allProducts, oneProduct };

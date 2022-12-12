import axios from "axios";

const allProducts = async () => {
  const peticion = await axios.get("http://localhost:3060/product");
  return peticion.data.data;
};

const OneProduct = async (idProduct, state) => {
  await axios
    .get(`http://localhost:3060/product/${idProduct}`)
    .then((response) => state(response.data.data));
  //.then((res) => (data = res));
  //return data;
};

export { allProducts, OneProduct };

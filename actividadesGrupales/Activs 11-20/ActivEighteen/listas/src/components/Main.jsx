import React from "react";
import ProductsGrid from "./ProductsGrid";
import Brand from "./Brand";
import Intro from "./Intro";
import Faq from "./FAQ";
import "../styles/main.css";

function Main(props) {
  let content;

  switch (props.section) {
    case "Productos":
      content = <ProductsGrid />;
      break;
    case "Marca":
      content = <Brand />;
      break;
    case "Intro":
      content = <Intro />;
      break;
    case "FAQ":
      content = <Faq />;
      break;
  }

  return <main>{content}</main>;
}

export default Main;

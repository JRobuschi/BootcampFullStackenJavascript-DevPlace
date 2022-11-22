import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Cards from "../cards/Cards";
import { useContext } from "react";
import { ProductsContext } from "../../App";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function CarrouselProducts() {
  var products = useContext(ProductsContext);

  const [selectProducts, setSelectProducts] = useState(products);

  return (
    <>
      <div className="all__container">
        <div className="container py-4 px-4 justify-content-center ">
          <h2>Ofertas</h2>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1230: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <div className="products-container">
              {products &&
                products.map((obj, idx) => {
                  return (
                    <>
                      <SwiperSlide>
                        <Cards obj={obj} key={idx} />
                      </SwiperSlide>
                    </>
                  );
                })}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default CarrouselProducts;

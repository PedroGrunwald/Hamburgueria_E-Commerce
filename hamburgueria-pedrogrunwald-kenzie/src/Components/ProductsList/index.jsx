import React from "react";
import Product from "../Product";

const ProductsList = ({ products, cartIdd }) => {
  return (
    <>
      {products.map((item, index) => {
        return (
           
            <Product product={item} key={index} cartIdd={cartIdd}  />
          
        );
      })}
    </>
  );
};

export default ProductsList;

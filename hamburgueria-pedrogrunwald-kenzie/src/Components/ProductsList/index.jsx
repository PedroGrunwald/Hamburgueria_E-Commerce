import React from "react";
import Product from "../Product";

const ProductsList = ({ products, cartId }) => {
  return (
    <>
      {products.map((item, index) => {
        return (
           
            <Product product={item} key={index} cartId={cartId}  />
          
        );
      })}
    </>
  );
};

export default ProductsList;

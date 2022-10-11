import React from "react";
import {
  ContainerProduct,
  ContainerImageProduct,
  Image,
  ProductName,
  Category,
  Price,
  Button,
  ContainerInformation
} from "./style";
const Product = ({ product, cartId }) => {

  return (
    <ContainerProduct>
      {/* <p>{product.id}</p> */}
      <ContainerImageProduct>
        <Image src={product.img} alt="" />
      </ContainerImageProduct>
      <ContainerInformation>
        <ProductName>{product.name}</ProductName>
        <Category>{product.category}</Category>
        <Price> R${product.price}</Price>
        <Button
          onClick={() => {
            cartId(product.id);
           
          }}
        >
          Adicionar
        </Button>
      </ContainerInformation>
    </ContainerProduct>
  );
};

export default Product;

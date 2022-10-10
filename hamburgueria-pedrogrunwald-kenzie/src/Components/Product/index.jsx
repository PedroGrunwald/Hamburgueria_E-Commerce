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
import { toast } from "react-toastify";
const Product = ({ product, cartIdd }) => {
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
            cartIdd(product.id);
            toast("item adicionado com sucesso");
          }}
        >
          Adicionar
        </Button>
      </ContainerInformation>
    </ContainerProduct>
  );
};

export default Product;

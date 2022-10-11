import React from "react";
import {Main,ContainerTitle,ContainerCart,ContainerProduct,ImageProduct,ProductName,ProductCategory,Button,ContainerTotalSale,RemoveAll,ContainerList,ContainerValue } from "./style";

const Cart = ({cartItems}) => {

const totalSum = cartItems.reduce((prev, current) => prev+current.price,0)

  return (
       <Main>
    <ContainerTitle>
        <h2>Carrinho de compras</h2>
      </ContainerTitle>
      <ContainerCart>
        <ContainerList>
        {cartItems.length > 0 ? 
          cartItems.map((cartItem) => (
            <ContainerProduct key={cartItem.id}>
              <ImageProduct src={cartItem.img} alt={cartItem.name} />
              <div>
                <ProductName> {cartItem.name}</ProductName>
                <ProductCategory>{cartItem.category}</ProductCategory>
              </div>
              <Button>Remover</Button>
            </ContainerProduct>
          ))
         : (
          <>
          <p>Sua sacola está vazia</p>
          </>
        )}


        </ContainerList>
      </ContainerCart>
      <ContainerTotalSale>
        <ContainerValue>
        <p>total:</p>
        <p>R$ {totalSum.toFixed(2)}</p>
        </ContainerValue>
         <RemoveAll type="text" placeholder="Remover Todos"/>
      </ContainerTotalSale>
      </Main>
  );
};

export default Cart;

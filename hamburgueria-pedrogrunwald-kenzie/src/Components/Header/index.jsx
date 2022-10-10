import React, { useState,useEffect } from "react";
import { Container, Logo, ContainerInput, Button } from "./style";

const Header = ({products,setSearch,setsearchProduct}) => {
const [inputValue,setinputValue] = useState()

  useEffect(() => {
    setsearchProduct(
      products.filter((prod) => {
        return (
          prod.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          prod.category.toLowerCase().includes(inputValue.toLowerCase())
        );
      })
    );
  }, [inputValue]);


  // function searchResults() {
  //   return setSearch(
  //     products.filter((elem) => {
  //       return (
  //         elem.name.toLowerCase().includes(searchProduct.trim().toLowerCase()) ||
  //         elem.category.toLowerCase().includes(searchProduct.trim().toLowerCase())
  //       );
  //     })
  //   );
   
  // }

  
  return (
    <Container>
      <Logo src="/images/logo.svg" alt="" />
      <div>
        <ContainerInput
          type="search"
          onChange={(event) => setinputValue(event.target.value)}
          placeholder="Digite aqui sua pesquisa"
        />
        <Button type="button">
          {" "}
          Pesquisar
          {" "}
        </Button>
       
      </div>
    </Container>
  );
};

export default Header;

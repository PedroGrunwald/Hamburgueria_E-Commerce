import React, { useState } from "react";
import Header from "./Components/Header";
import ProductsList from "./Components/ProductsList";
import { useEffect } from "react";
import api from "./services/api";
import Cart from "./Components/Cart";
import { ContainerList } from "./Components/Product/style";
import {ContainerContent} from "./style"
import { toast } from "react-toastify";


function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");
  const [searchProduct, setsearchProduct] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data);
      setsearchProduct(response.data);
    });
  }, []);

  function cartId(itemId) {
    const filteredItems = products.filter((item) => item.id === itemId);
   
    if((cartItems.every((item) => item.id !== itemId))){
      setCartItems((oldItems) => [...oldItems.concat(filteredItems)]);
      toast("item adicionado com sucesso");
    } else{
      toast("Item ja foi adicionado ao carrinho")
    }
  }
  
  return (
    <>
      <Header
        setSearch={setSearch}
        products={products}
        setsearchProduct={setsearchProduct}
      />
      <ContainerContent>
      <ContainerList setSearch={setSearch} search={search} products={products}>
        <ProductsList products={searchProduct} cartId={cartId} />
      </ContainerList>
      <Cart cartItems={cartItems} />
      </ContainerContent>
     
      </>
  );
}
export default App;

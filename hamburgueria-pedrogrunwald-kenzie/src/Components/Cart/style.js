import styled from "styled-components";

export const Main = styled.main`
  width: 365px;
  height: 530px;

@media (max-width:800px){



}


`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 55px;
  background: #27ae60;
  border-radius: 5px 5px 0px 0px;
  display: flex;

  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
  list-style: none;
  background-color: #f5f5f5;
  padding: 0;
`;

export const ContainerList = styled.ul`
  width: 80%;

@media (max-width:800px){
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    gap: 5rem;
}

`;

export const ContainerProduct = styled.li`
  width: 100%;
  height: 80px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
  margin-left: -2rem;
`;

export const ImageProduct = styled.img`
  width: 70px;
  height: 70px;
`;

export const ProductName = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #333333;
`;

export const ProductCategory = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #828282;
`;

export const Button = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #bdbdbd;
  margin: auto;
  margin-right: -2rem;
  border: none;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;
`;

export const ContainerTotalSale = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  width: 96%;
  height: 100px;
  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;
`;

export const ContainerValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 96%;
`;

export const RemoveAll = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 343px;
  height: 50px;
  background: #e0e0e0;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
`;

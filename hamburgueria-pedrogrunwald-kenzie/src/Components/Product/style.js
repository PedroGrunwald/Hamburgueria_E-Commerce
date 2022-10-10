import styled from "styled-components";

export const ContainerList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 950px;
  height: 720px;
  margin: 0;
  list-style: none;
  gap: 1rem;
  
@media (max-width:800px){

  flex-wrap: nowrap;
  overflow-x: scroll;
  height: 450px;
  max-width: 700px;
}


`;

export const ContainerProduct = styled.li`
  box-sizing: border-box;
  width: 300px;
  height: 420px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
`;

export const ContainerImageProduct = styled.div`
  width: 100%;
  height: 150px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`

`

export const ContainerInformation = styled.div`
padding:1rem;
`

export const ProductName = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #333333;
`;

export const Category = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #828282;
`;

export const Price = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #27ae60;
`;
export const Button = styled.button`
  background: #27ae60;
  border: 2px solid #27ae60;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  height: 40px;
`;

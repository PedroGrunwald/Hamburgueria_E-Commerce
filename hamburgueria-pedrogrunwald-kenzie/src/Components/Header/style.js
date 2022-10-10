import styled from "styled-components"


export const Container = styled.header`
display: flex;

background: #F5F5F5;
justify-content: space-between;
padding: 1rem;
`

export const Logo = styled.img`
width: 150px;
height: 36.83px;
`
export const ContainerSearch = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
`

export const ContainerInput = styled.input`
width :300px;
height:40px;
box-sizing: border-box;
margin-right: 10px;
padding: 0px 10px 0px 15px;
gap: 115px;
background: #FFFFFF;
border: 2px solid #E0E0E0;
border-radius: 8px;
`

export const Button = styled.button`
box-sizing: border-box;

padding: 0px 20px;
gap: 10px;
width: 107px;
height: 40px;
background: #27AE60;
border: 2px solid #27AE60;
border-radius: 8px;
margin-right: 30px;
`
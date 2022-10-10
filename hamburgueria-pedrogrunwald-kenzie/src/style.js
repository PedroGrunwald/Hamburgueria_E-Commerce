import styled from "styled-components"

export const ContainerContent = styled.div`
display: flex;
flex-direction: row;
padding: 2rem;

@media (max-width:800px){
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    justify-content: center;
    padding: 0;
}

`
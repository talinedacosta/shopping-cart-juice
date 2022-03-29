import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.125rem;
  height: 4rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-orange);

  span {
    display: inline-block;
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

export const Cart = styled.button`
  strong {
   margin-right: 0.5rem;
  } 
   
`
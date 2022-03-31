import styled from "styled-components";

export const Container = styled.main`
  padding: 3rem 0;

  h2 {
    text-align: center;
    padding-bottom: 3rem; 
  }
`;

export const ProductsList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  padding-bottom: 1rem;
  border-bottom: 1px solid #0e0e0e;
  gap: 1rem;

  .header {
    max-height: 100px;
    display: flex;
    gap: 1rem;

    img {
      width: auto;
      height: 100%;
    }
  }

  .body, .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    text-align: right;
  }
`;
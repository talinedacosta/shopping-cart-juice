import styled from "styled-components";

export const Container = styled.main`
  padding: 3rem 0;

  h2 {
    text-align: center;
    padding-bottom: 3rem; 
  }
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .emptyCart {
    align-self: center;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid #0e0e0e;
  gap: 1rem;

  .product {
    flex: 1 0;
    max-height: 100px;
    display: flex;
    gap: 1rem;

    img {
      width: 80px;
    }
  }

  .amount {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 0.8rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      text-align: right;
    }
  }

  button {
    pointer-events: all;

    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

`;

export const Total = styled.section`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
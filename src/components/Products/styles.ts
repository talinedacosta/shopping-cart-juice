import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 0;
`
export const ProductsList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`
export const Product = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  padding-bottom: 1rem;
  border-bottom: 1px solid #0e0e0e;

  .body {
    
    h3 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.3rem;

      small {
        font-size: 50%;
        color: #707070;
      }
    }
  }

  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
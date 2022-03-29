import styled from "styled-components";
import { darken } from 'polished';

export const Container = styled.main`
  width: 100%;
`
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  list-style: none;

  li {
    background-color: var(--color-white);
    border: 0.4rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;

    img {
      align-self: center;
      border-radius: 0.2rem;
    }

    .details {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .quantity {
        color: var(--color-grey);
      }

      .price {
        font-size: 1.3rem;
        font-weight: bold;
      }
    }

    button {
      padding: 0;

      .cartAmount {
        height: 100%;
        background: ${darken(0.06, '#fe9000')};
        padding: 0.5rem;
        display: flex;
        align-items: center;
        border-top-left-radius: 0.4rem;
        border-bottom-left-radius: 0.4rem;
        gap: 0.5rem;
        margin-right: 0.5rem;
      }
    }
  }
`
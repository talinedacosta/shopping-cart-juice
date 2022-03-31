import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  border-bottom: 1px solid #0e0e0e;

  nav {
    height: 5rem;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .navegation {
      display: flex;
      gap: 1rem;

      a {
        color: #0e0e0e;
        position: relative;

        &.active {
          margin: 0 -0.4em;
          padding: 0.1em 0.4em;
          border-radius: 0.8em 0.3em;
          background: transparent;
          background-image: linear-gradient(
            to right,
            rgba(255, 225, 0, 0.1),
            rgba(255, 225, 0, 0.7) 4%,
            rgba(255, 225, 0, 0.3)
          );
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }
      }     
    }
  }
`;

export const Logo = styled(Link)`
  color: #0e0e0e;
`;

export const Cart = styled(Link)`

`;
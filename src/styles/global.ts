import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import { darken } from 'polished';

export default createGlobalStyle`
  :root {
    --color-blue: #0297d9;
    --color-yellow: #edbc18;
    --color-orange: #fe9000;
    --color-white: #ffffff;
    --color-black: #040404;
    --color-grey: #767676;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f7f7f7;
  }

  body, input, button {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;
    font: 16px , sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 2.5rem;
    padding: 0 1rem;
    border-radius: 0.3rem;
    border: 0;
    transition: background 0.2s;

    &.btn-blue {     
      color: white;
      background-color: var(--color-blue);  

      &:hover {
        background: ${darken(0.06, '#0297d9')};
      }
    }

    &.btn-orange {     
      color: white;
      background-color: var(--color-orange);  

      &:hover {
        background: ${darken(0.06, '#fe9000')};
      }
    }
  }
  img {
    width: 100%;
  }
`;
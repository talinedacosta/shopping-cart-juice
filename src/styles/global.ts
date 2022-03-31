import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  :root {
    --font-family-title: 'Alfa Slab One', cursive;
    --font-family-body: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #ffffff;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  body, input, button {
    font-family: var(--font-family-body);
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-title);
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
    gap: 0.5rem;
    padding: 0.4rem 0.7rem;
    background-color: #ffffff;
    color: #0e0e0e;
    border-radius: 0.4rem;
    border: 1px solid #0e0e0e;
    transition: all 0.2s ease-in-out;

    &:hover{
      background-color: #0e0e0e;
      color: #ffffff;
    }
  }

  img {
    width: 100%;
  }
`;
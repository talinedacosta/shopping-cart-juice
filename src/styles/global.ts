import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: rgb(0,159,255);
    background: linear-gradient(90deg, rgba(0,159,255,1) 0%, rgba(255,255,255,1) 100%); 
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }
`;
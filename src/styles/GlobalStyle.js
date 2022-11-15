import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Bahnschrift", sans-serif;
  }

  *:focus {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background-color: #f6f7f8;
    //overflow: overlay;
  }
  
`;
export default GlobalStyles;

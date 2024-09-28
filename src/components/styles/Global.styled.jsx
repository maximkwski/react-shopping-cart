import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-size: 1.3rem;
        font-family: Montserrat, sans-serif;
    }

    img {
        max-width: 100%;
    }

    p {
        opacity: 0.8;
        line-height: 1.5;
    }



`

export default GlobalStyles;
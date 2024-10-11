import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-size: 1rem;
        background: ${ ( {theme} ) => theme.colors.body};
        font-family: "Red Hat Text", sans-serif;
    }

    img {
        max-width: 100%;
    }

    h1,h2,h3,h4 {
        margin: 0;
    }

    p {
        line-height: 1.5;
        margin: 0;
    }



`

export default GlobalStyles;
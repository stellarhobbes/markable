import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0px;
        margin: 0px;
    }

    section {
        width: 80%;
        max-width: 1250px;
        margin: auto;
    }

    h1 {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 4em;
        margin: 10px 0px;
    }

    h2 {
        font-family: 'Inter', sans-serif;
        font-size: 3em;
        margin: 10px 0px;
        @media (max-width: 960px) {
            font-size: 2em;
        } 
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        line-height: 1.7em;
    }
`;

export default GlobalStyle;

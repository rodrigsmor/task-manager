import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html, body {
        width: 100%;
        color: #13070c;
        max-width: 100%;
        overflow-x: hidden;
        background: #EFF9F0;
    }
`;
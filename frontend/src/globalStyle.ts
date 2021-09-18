import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
    }

    html, body {
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
        background: #EFF9F0;
    }
`;
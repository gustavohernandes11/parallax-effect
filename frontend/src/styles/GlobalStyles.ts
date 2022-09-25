import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 
* {
    box-sizing: border-box;
   
}

 html,
 body {
    padding: 0;
    font-family: "Raleway", sans-serif, -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
        Helvetica Neue, sans-serif;
        margin: 0;
        padding: 0;
}

hr {
            border-color: #fafafa;
            width: 100%;
            margin: 0;
        }
        
a {
    color: inherit;
    text-decoration: none;
}

p {
    line-height: 1.5;
    letter-spacing: 0.00938em;
}



.loading-page {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
}
 
.MuiDrawer-paper {
    padding: 20px;
}
    `;

export default GlobalStyles;

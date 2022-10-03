import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


* {
    box-sizing: border-box;
   scroll-behavior: smooth;
};

 html,
 body {
    padding: 0;
    font-family: "Raleway", sans-serif, -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
        Helvetica Neue, sans-serif;
        margin: 0;
        padding: 0;
};
.landing-scroll {
  min-height: 500vh;
}
  `;

export default GlobalStyles;

import GlobalStyles from "../src/styles/GlobalStyles";
import "antd/dist/antd.css";

import type { AppProps } from "next/app";
import "../src/styles/globals.css";

import { GlobalContextProvider } from "../src/contexts/globalContext/GlobalContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GlobalContextProvider>
            <GlobalStyles />
            
            <Component {...pageProps} />
        </GlobalContextProvider>
    );
}

export default MyApp;

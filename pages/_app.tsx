import type { AppProps } from "next/app";

//providers
import { ThemeProvider } from "styled-components";
import { NextIntlProvider } from "next-intl";

//styles and themes
import GlobalStyle from "../src/styles/globalStyle";
import defaultTheme from "../src/themes/default";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </NextIntlProvider>
  );
}

export default MyApp;

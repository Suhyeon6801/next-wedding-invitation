import type { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';

const GlobalFontStyle =  css`
  @import url('https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap');

  body {
    font-family: 'East Sea Dokdo', cursive;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalFontStyle} />
      <Component {...pageProps} />
    </>
  );
}

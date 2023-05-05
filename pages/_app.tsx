import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import Head from 'next/head';

const GlobalFontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap');

  @font-face {
    font-family: 'Nanum Myeongjo';
    src: url('/fonts/NanumMyeongjo-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Nanum Myeongjo', serif;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>박동현, 박혜진 결혼합니다</title>
      </Head>
      <Global styles={GlobalFontStyle} />
      <Component {...pageProps} />
    </>
  );
}

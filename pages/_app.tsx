import type { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';
import Head from 'next/head';

const GlobalFontStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap');

  body {
    font-family: 'East Sea Dokdo', cursive;
  }

  @font-face {
    font-family: 'Nanum Myeongjo';
    src: url('/fonts/NanumMyeongjo-Regular.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
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

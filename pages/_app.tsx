import type { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';
import Head from 'next/head';

const GlobalFontStyle =  css`
  @import url('https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap');

  body {
    font-family: 'East Sea Dokdo', cursive;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
        <meta name="description" content="6월 10일 토요일 오후 1시 10분, 더 베네치아 3층 베네치아홀" />
        <meta
          property="og:description"
          content="6월 10일 토요일 오후 1시 10분, 더 베네치아 3층 베네치아홀"
        />
        <meta property="og:image" content="./meta.png" />
        <meta property="og:title" content="박동현, 박혜진 결혼합니다" />
        <meta
          property="og:url"
          content="https://next-wedding-invitation.vercel.app/"
        />
        {/* twitter open graph */}
        <meta name="twitter:title" content="박동현, 박혜진 결혼합니다" />
        <meta name="twitter:image" content="./meta.png" />
        <meta
          name="twitter:url"
          content="https://next-wedding-invitation.vercel.app/"
        />
      </Head>
      <Global styles={GlobalFontStyle} />
      <Component {...pageProps} />
    </>
  );
}

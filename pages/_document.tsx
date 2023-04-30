import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_API_KEY}&autoload=false`;

// TODO: url이 정해지면 content 수정
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="6월 10일 토요일 오후 1시 10분, 더 베네치아 3층 베네치아홀"
        />
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
        <link rel="icon" href="/favicon.png" />
        <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      </Head>
      <body style={{ margin: '0px', padding: '0px' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

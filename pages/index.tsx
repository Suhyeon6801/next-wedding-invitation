import { NextPage } from 'next';
import { Intro } from '@/components/Intro';
import { Footer } from '@/components/Footer';
import { Photo } from '@/components/Photo';
import { Account } from '@/components/Account';
import { MapInfo } from '@/components/MapInfo';
import styled from '@emotion/styled';
import Head from 'next/head';
import META_IMAGE from '@/public/images/wedding_hor1.jpeg';

const IndexPage: NextPage = () => {
  return (
    <>
      <Background>
        <Head>
          <meta name="og:description" content="6월 10일 토요일 오후 1시 10분 더 베네치아 3층 베네치아홀" />
          <meta property="og:image" content="./meta.png" />
          <meta property="og:title" content="박동현, 박혜진 결혼합니다" />
        </Head>
        <Intro />
        <Photo />
        <MapInfo />
        <Account />
        <Footer />
      </Background>
    </>
  );
}

const Background = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Nanum Myeongjo', serif;
`;

export default IndexPage;

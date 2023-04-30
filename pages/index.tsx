import { NextPage } from 'next';
import { Intro } from '@/components/Intro';
import { Footer } from '@/components/Footer';
import { Photo } from '@/components/Photo';
import { Account } from '@/components/Account';
import { MapInfo } from '@/components/MapInfo';
import styled from '@emotion/styled';
import { ShareLink } from '@/components/ShareLink';
import { useEffect } from 'react';

const IndexPage: NextPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Background>
        <Intro />
        <Photo />
        <MapInfo />
        <Account />
        <Footer />
        <ShareLink />
      </Background>
    </>
  );
};

const Background = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Nanum Myeongjo', serif;
`;

export default IndexPage;

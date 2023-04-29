import { NextPage } from 'next';
import { Intro } from '@/components/Intro';
import { Footer } from '@/components/Footer';
import { Photo } from '@/components/Photo';
import { Account } from '@/components/Account';
import { MapInfo } from '@/components/MapInfo';
import styled from '@emotion/styled';

const IndexPage: NextPage = () => {
  return (
    <>
    <Background>
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
  display: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  font-family: 'Nanum Myeongjo', serif;
`;

export default IndexPage;

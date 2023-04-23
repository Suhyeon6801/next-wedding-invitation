import { NextPage } from 'next';
import { Intro } from '@/components/Intro';
import { Footer } from '@/components/Footer';
import { Photo } from '@/components/Photo';
import { Account } from '@/components/Account';
import { MapInfo } from '@/components/MapInfo';
import { GuestBook } from '@/components/GuestBook';
import styled from '@emotion/styled';

const IndexPage: NextPage = () => {
  return (
    <>
    {/* <Background> */}
      <Intro />
      <Photo />
      <MapInfo />
      <Account />
    {/* </Background> */}
    </>
  );
}

const Background = styled.div`

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default IndexPage;

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
    <Background>
      <Intro />
      <Photo />
      <MapInfo />
      <Account />
    </Background>
    </>
  );
}

const Background = styled.div`
  display: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: #f5f5f5;
  margin: 0 20em;
`;

export default IndexPage;

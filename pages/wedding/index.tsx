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
    <MainFrame>
      <Intro />
      <Photo />
      <MapInfo />
      <Account />
      <GuestBook />
      <Footer />
    </MainFrame>
    </>
  );
}

const MainFrame = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-size: 0;
  width: 800px;
  height: 1423px;
  style="position:absolute; top:0px; left: 0px color: #f7f7f7;
`;

export default IndexPage;

import { NextPage } from 'next';
import { Intro } from '@/components/Intro';
import { Footer } from '@/components/Footer';
import { Photo } from '@/components/Photo';
import { Account } from '@/components/Account';
import { MapInfo } from '@/components/MapInfo';
import { GuestBook } from '@/components/GuestBook';

const IndexPage: NextPage = () => {
  return (
    <>
      <Intro />
      <Photo />
      <MapInfo />
      <Account />
      <GuestBook />
      <Footer />
    </>
  );
}

export default IndexPage;

import React from 'react';
import { NextPage } from 'next';
import { Intro } from './Intro';
import {Footer} from '../../components/Footer';

const IndexPage: NextPage = () => {
  return (
    <>
      <Intro />
      <Footer />
    </>
  );

  // return (
      //   //  <Intro />
  //   // <MainPhoto />
  //   // <Notice />
  //   // <Photo />
  //   // <Map />
  //   // <Account/>
  //   // <GuestBook />
  //   // <Footer />
  // )
}

export default IndexPage;

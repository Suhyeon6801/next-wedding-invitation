import React from 'react';
import Image from 'next/image'
import styled from '@emotion/styled';
import CAT7 from '../public/images/cat7.jpeg';
import FLOWER from '../public/images/flower.png'
import { Autour_One } from '@next/font/google';

export const Intro = () => {
    return (
      <>
        <Header>SeungHyun & Suhyeon Wedding Card</Header>
        <TitleSection />
        <MainPhoto />
        <TimeSpaceSection />
        <GreetingText />
        <FromInfo />
      </>
    )
}

const TitleSection = () => {
  return (
    <Title>이승현 & 김수현</Title>
  )
}

const MainPhoto = () => {
  return (
    <PhotoContainer>
      <Image
        src={CAT7}
        alt="main cat"
        layout="responsive"
      />
    </PhotoContainer>
  );
}

const TimeSpaceSection = () => {
  return (
    <TimeSpace>
      <div>2023.06.17 토요일 오후 12시</div>
      <br/>
      <div>1784, 28층 스카이홀</div>
    </TimeSpace>
  )
}

const GreetingText = () => {
  return (
    <InfoText>
      <Image 
        src={FLOWER} 
        alt={'image1'} 
        style={{
          display: 'flex', 
          objectFit: 'contain', 
          margin: 'auto',
          paddingBottom: '15px',
      }}/>
      <h3>우리의 약속, 여러분과 함께 나누고 싶어요!</h3>
      <br/>
      <div>서로가 마주보며 다져온 사랑을</div>
      <br/>
      <div>이제 함께 한곳을 바라보며 걸어갈 수 있는</div>
      <br/>
      <div>큰 사랑으로 키우고자 합니다.</div>
      <br/>
      <div>저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게</div>
      <br/>
      <div>앞날을 축복해 주시면 감사하겠습니다.</div>
    </InfoText>
  )
}

const FromInfo = () => {
  return (
    <InfoText>
      <div>000, 000 장남 박동현</div>
      <br/>
      <div>ㅁㅁㅁ, ㅁㅁㅁ 장녀 박혜진</div>
    </InfoText>
  )
}

const Header = styled.header`
  padding: 20px;
  font-size: 1.2em;
  font-stretch: 150%;
  font-family: cursive;
`;

const Title = styled.h1`
  margin: 20px;
  padding: 30px;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit:cover;
`

const TimeSpace = styled.h3`
  padding: 30px;
`;

const InfoText = styled.div`
  flex-wrap: wrap;
  padding: 30px;
  position: relative;
`;
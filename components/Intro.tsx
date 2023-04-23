import React from 'react';
import Image from 'next/image'
import styled from '@emotion/styled';
import CAT7 from '../public/images/cat7.jpeg';

export const Intro = () => {
    return (
      <>
        <Header>SeungHyun & Suhyeon Wedding Card</Header>
        <TitleSection />
        <MainPhoto />
        <TimeSpaceSection />
        <InvitationText />
        <FromInfo />
      </>
    )
}

const TitleSection = () => {
  return (
    <Title>이승현 & 김수현</Title>
  )
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

const MainPhoto = () => {
  return (
    <PhotoContainer>
      <Image
        src={CAT7}
        alt="main cat"
        width={500}
        height={500}
        style={{
          height: '100vh',
          objectFit: "cover"
        }}
      />
    </PhotoContainer>
  );
}

const InvitationText = () => {
  return (
    <Invitation>
      <div>서로가 마주보며 다져온 사랑을</div>
      <br/>
      <div>이제 함께 한곳을 바라보며 걸어갈 수 있는</div>
      <br/>
      <div>큰 사랑으로 키우고자 합니다.</div>
      <br/>
      <div>저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게</div>
      <br/>
      <div>앞날을 축복해 주시면 감사하겠습니다.</div>
    </Invitation>
  )
}

const FromInfo = () => {
  return (
    <div>
      <div>000, 000 장남 000</div>
      <br/>
      <div>ㅁㅁㅁ, ㅁㅁㅁ 장녀 ㅁㅁㅁ</div>
    </div>
  )
}

const Header = styled.header`
  background-color: white;
  padding: 20px;
  text-align : center;
  font-size: 1.2em;
  font-stretch: 150%;
  font-family: cursive;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  padding: 30px;
  background-color: #ff33ee;
`;

const TimeSpace = styled.h3`
  margin: 50px;
  padding: 30px;
  background-color: #0033ee;
`;

const Invitation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin: 50px;
  padding: 30px;
  background-color: #ffe300;
`;

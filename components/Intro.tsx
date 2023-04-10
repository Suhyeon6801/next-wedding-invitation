import React from 'react';
import Image from 'next/image'
import styled from '@emotion/styled';
import CAT7 from '../public/images/cat7.jpeg';

export const Intro = () => {
    return (
      <>
        <Header>SeungHyun & Suhyeon Wedding Card</Header>
        <MainPhoto />
        <FlexContainer>
          <TitleSection />
        </FlexContainer>
        <Invitation />
        <FromInfo />
      </>
    )
}

const TitleSection = () => {
  return (
    <>
      <Title>
        <div>이승현 & 김수현</div>
      </Title>
      <SubTitle>
        <div>2023.06.17 토요일 오후 12시</div>
        <br/>
        <div>1784, 28층 스카이홀</div>
      </SubTitle>
    </>
  )
}

const MainPhoto = () => {
  return (
    <Image
      src={CAT7}
      alt="main cat"
      width={500}
      height={500}
      style={{
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'absolute',
        zIndex: -1,
      }}
    />
  );
}

const Invitation = () => {
  return (
    <div>
      <p>서로가 마주보며 다져온 사랑을</p>
      <br/>
      <p>이제 함께 한곳을 바라보며 걸어갈 수 있는</p>
      <br/>
      <p>큰 사랑으로 키우고자 합니다.</p>
      <br/>
      <p>저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게</p>
      <br/>
      <p>앞날을 축복해 주시면 감사하겠습니다.</p>
    </div>
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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  text-align: center;
`;

const TitleBox = styled.div`
  margin: 59.7vh 0 24px;
  background: grey;
`;

const Title = styled.h1`
  margin: 70vh 0 24px;
  color: white;
`;

const SubTitle = styled.h3`
  color: white;
`;

const HorizontalLine = styled.div`
  height: 40vh;
  border-left: 1px solid white;
`;
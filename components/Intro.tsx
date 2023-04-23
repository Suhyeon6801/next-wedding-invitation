import React from 'react';
import Image from 'next/image'
import styled from '@emotion/styled';
import CAT7 from '../public/images/cat7.jpeg';
import FLOWER from '../public/images/flower.png'
import MAIN from '../public/images/main_sample.jpeg';

export const Intro = () => {
    return (
      <>
        {/* <Header>SeungHyun & Suhyeon Wedding Card</Header> */}       
        <ImageWithText>
          <div className="photo">
            <Image 
              src={MAIN} 
              layout="responsive" 
              alt="이미지" 
              style={{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                objectFit: 'cover'
            }} />
          </div>
           <div className="text-container">
            <span>박혜진, 박동현</span>
            <span style={{fontSize: '0.5em', marginTop: '10px'}}>우리의 결혼식에 초대합니다</span>
          </div>
        </ImageWithText>
        {/* <TitleSection />
        <MainPhoto /> */}
        <TimeSpaceSection />
        <GreetingText />
        <FromInfo />
      </>
    )
}

const TitleSection = () => {
  return (
    <Title>박혜진 & 박동현</Title>
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


const ImageWithText = styled.div`
  position: relative;
  display: inline-block;

  .photo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-container {
    position: absolute;
    margin-top: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 1em;
    font-weight: bold;
    color:#ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .text-container span {
    margin-bottom: 5px;
  }
`;

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
`

const TimeSpace = styled.h3`
  padding: 30px;
`;

const InfoText = styled.div`
  flex-wrap: wrap;
  padding: 30px;
  position: relative;
`;
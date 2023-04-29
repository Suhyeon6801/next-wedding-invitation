import React from 'react';
import Image from 'next/image'
import styled from '@emotion/styled';
import CAT7 from '../public/images/cat7.jpeg';
import FLOWER from '../public/images/flower.png'
import MAIN from '@/public/images/wedding1.jpeg';

export const Intro = () => {
    return (
      <>
      <Image 
        src={FLOWER} 
        alt={'image1'} 
        style={{
          display: 'flex', 
          objectFit:'contain',
          margin: 'auto',
          paddingTop: '15px',
      }}/>
        <Header>결혼합니다</Header>  
        <TitleSection />
        <PhotoContainer>
          <Image 
            src={MAIN}  
            alt={'main'}
            layout="responsive" 
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'contain',
            }}
          /> 
        </PhotoContainer>        
        <GreetingText />
        <TimeSpaceSection />
      </>
    )
}

const TitleSection = () => {
  return (
    <Title>박동현 • 박혜진</Title>
  )
}

const TimeSpaceSection = () => {
  return (
    <TimeSpace>
      <div>2023.06.10 토요일 오후 1시 10분</div>
      <br/>
      <div>더 베네티아 3층 베네치아홀</div>
    </TimeSpace>
  )
}

const GreetingText = () => {
  return (
    <InfoText>
      <div style={{
        margin: '10px 0px 50px 0px',
        fontSize: '1.1em',
        fontWeight: 'bold',
        textDecoration: 'underline',
        textUnderlineOffset: '0.7em',
        textDecorationColor: '#C2B280'
      }}>
        <p>동현  💐  혜진</p>
      </div>
      <div style={{ fontSize: '0.9em', marginBottom: '50px'}}>
        <p>"인생은 누구나 비슷한 길을 걸어간다.</p>
        <p>결국엔 나이가 들어 지날을 추억하는 것일 뿐이다.</p>
        <p>그러니 결혼은 따뜻한 사람과 하거라."</p>
        <p> — 영화 '어바웃 타임' 中</p>
      </div>
      <div>
        <p>평생을 함께 하고 싶은 따뜻한 사람을 만나</p>
        <p>함께 보내는 아홉 번째 여름,</p>
        <p>소중한 분들의 응원 속에서</p>
        <p>사랑의 결실을 이루려 합니다.</p>
        <p>귀한 시간 내주시어 저희 두 사람의 앞날을</p>
        <p>축복해 주시면 감사하겠습니다.</p>
      </div>
      <div style={{ margin: '50px 0px 10px 0px', fontSize: '1.1em', color: '#C2B280'}}>
        동현, 혜진 올림
      </div>
    </InfoText>
  )
}

const FromInfo = () => {
  return (
    <InfoText>
      <h3>000, 000 장남 박동현</h3>
      <h3>ㅁㅁㅁ, ㅁㅁㅁ 장녀 박혜진</h3>
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
  margin: 30px;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TimeSpace = styled.div`
  padding: 0px 0px 0px 30px;
  margin: 20px 0px 50px 0px;
  text-align: left;
`;

const InfoText = styled.div`
  flex-wrap: wrap;
  padding: 30px;
  position: relative;
  text-align: left;
`;
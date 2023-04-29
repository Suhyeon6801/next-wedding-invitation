import Image from 'next/image'
import styled from '@emotion/styled';
import FRAME from '@/public/images/frame.png'
import MAIN from '@/public/images/wedding1.jpeg';
import CALENDAR from '@/public/images/calendar.png';
import LOCATION from '@/public/images/location.png';

export const Intro = () => {
    return (
      <>
        <Header>유월의 웨딩마치</Header>  
        <TitleSection />
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
        <GreetingText />
        <TimeSpaceSection />
      </>
    )
}

const TitleSection = () => {
  return (
    <>
      <div style={{ objectFit: 'cover', position: 'absolute', zIndex: -1 }}>
        <Image 
          src={FRAME} 
          alt={'frame'} 
          style={{
            width: '100vw',
            height: '50hw',
          }}/>
      </div>
      <FlexContainer>
        <Title>박동현 & 박혜진</Title>
      </FlexContainer>
    </>
  )
}

const TimeSpaceSection = () => {
  return (
    <TimeSpace>
      <div>
        <Image 
            src={CALENDAR} 
            alt={'calendar'} 
            style={{
              verticalAlign: 'middle',
              display: 'inline-block',
              width: '1em',
              height: '1em',
              marginRight: '0.7em',
              paddingBottom: '6px',
          }}/>
        2023.06.10 토요일 오후 1시 10분
      </div>
      <br/>
      <div>
        <Image 
          src={LOCATION} 
          alt={'location'} 
          style={{
            verticalAlign: 'middle',
            display: 'inline-block',
            width: '1em',
            height: '1em',
            marginRight: '0.7em',
            paddingBottom: '6px',
        }}/>
        더 베네치아 3층 베네치아홀
      </div>
    </TimeSpace>
  )
}

const GreetingText = () => {
  return (
    <InfoText>
      <div style={{
        margin: '0px 0px 50px 0px',
        fontSize: '1.8em',
        textDecoration: 'underline',
        textUnderlineOffset: '0.7em',
        textDecorationColor: '#C2B280'
      }}>
        <p style={{ fontFamily: 'East Sea Dokdo' }}>
          동현 ♡ 혜진
        </p>
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
      <h3>신랑 박동현</h3>
      <h3>신부 박혜진</h3>
    </InfoText>
  )
}

const Header = styled.header`
  padding: 20px;
  font-size: 1.5em;
  font-stretch: 200%;
  font-family: 'East Sea Dokdo', cursive;
  textDecoration: 'underline',
  textUnderlineOffset: '0.7em',
  textDecorationColor: '#C2B280'
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h2`
  margin: 40px 0px 50px 0px;
`;

const TimeSpace = styled.div`
  padding: 0px 0px 0px 30px;
  margin: 35px 0px 80px 0px;
  text-align: left;
`;

const InfoText = styled.div`
  flex-wrap: wrap;
  padding: 10px 0px 0px 30px;
  margin: 20px 0px 20px 0px;
  position: relative;
  text-align: left;
`;
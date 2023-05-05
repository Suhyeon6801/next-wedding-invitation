import Image from 'next/image';
import styled from '@emotion/styled';
import MAIN from '@/public/images/wedding_hor1.jpg';

export const TitleSection = () => {
    return (
      <>
        {/* <div style={{ objectFit: 'cover', position: 'absolute', zIndex: -1 }}>
          <Image
            src={FRAME}
            alt={'frame'}
            style={{
              width: '100vw',
              height: '50hw',
            }}
          />
        </div> */}
        <FlexContainer>
            <Image
              src={MAIN}
              alt={'main'}
              layout="responsive"
              style={{
                width: '100vw',
                height: '100vh',
                objectFit: 'contain',
              }}
              loading="lazy"
            />
        </FlexContainer>
      </>
    );
  };


const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h2`
  margin: 50px 0px 50px 0px;
  font-weight: normal;
`;
import styled from '@emotion/styled';
import Image from 'next/image';
import {CATS_IMAGES} from '@/public/images/images';

export const Photo = () => {
    return (
      <>
        <h3
          style={{ 
            borderRadius: '100px', 
            textAlign: 'center', 
            margin: '30px' 
          }}>
          Album
        </h3>
        <VerticalContainer showSmallerImageOnMobile={false}>
            {CATS_IMAGES.map((img, index) => (
              <Image src={img} key={index} alt={'스튜디오 사진'} width={300} height={300}/>
            ))}
        </VerticalContainer>
      </>
    );
}

const VerticalContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  > span {
    flex: 0 0 auto;
    width: 90% !important;
    @media (min-width: 800px) {
      width: ${({
        showSmallerImageOnMobile,
      }: {
        showSmallerImageOnMobile: boolean;
      }) => (showSmallerImageOnMobile ? '60%' : '90%')} !important;
    }
    scroll-snap-align: start;
  }
`;
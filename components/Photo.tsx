import styled from '@emotion/styled';
import Image from 'next/image';
import {
  VERTICAL_WEDDING_IMAGES,
  HORIZONTAL_WEDDING_IMAGES,
} from '@/public/images/images';

export const Photo = () => {
  return (
    <>
      <h3
        style={{
          textAlign: 'center',
          margin: '50px 0px 50px 0px',
          fontSize: '1.1em',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textUnderlineOffset: '0.7em',
          textDecorationColor: '#C2B280',
        }}
      >
        Album
      </h3>
      <VerticalContainer showSmallerImageOnMobile={false}>
        {VERTICAL_WEDDING_IMAGES.map((img, index) => (
          <Image
            src={img}
            key={index}
            alt={'스튜디오 사진'}
            width={500}
            height={500}
          />
        ))}
      </VerticalContainer>
      <VerticalContainer
        showSmallerImageOnMobile={false}
        style={{ marginTop: '20px' }}
      >
        {HORIZONTAL_WEDDING_IMAGES.map((img, index) => (
          <Image
            src={img}
            key={index}
            alt={'스튜디오 사진'}
            width={800}
            height={500}
          />
        ))}
      </VerticalContainer>
    </>
  );
};

const VerticalContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin: 1px;
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

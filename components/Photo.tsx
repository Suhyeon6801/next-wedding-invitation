import styled from '@emotion/styled';
import Image from 'next/image';
import {
  VERTICAL_WEDDING_IMAGES,
  HORIZONTAL_WEDDING_IMAGES,
} from '@/public/images/images';
import FINTER_SWIPE from '@/public/images/swipe.png';

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
      <VerticalContainer showSmallerImageOnMobile={true}>
        <DragBox>
          <Image
            src={FINTER_SWIPE}
            alt={'swipe'}
            style={{
              width: '30px',
              height: '30px',
              margin: '0px 0px 4px 0px ',
            }}
          />
          <p>
            밀어서 더 많은 <br /> 사진 보기
          </p>
        </DragBox>
        {VERTICAL_WEDDING_IMAGES.map((img, index) => (
          <Image
            src={img}
            key={index}
            alt={'스튜디오 사진'}
            width={500}
            height={500}
            loading="lazy"
          />
        ))}
      </VerticalContainer>
      <VerticalContainer
        showSmallerImageOnMobile={true}
        style={{ marginTop: '20px' }}
      >
        <DragBox>
          <Image
            src={FINTER_SWIPE}
            alt={'swipe'}
            style={{
              width: '30px',
              height: '30px',
              margin: '0px 0px 4px 0px ',
            }}
          />
          <p>
            밀어서 더 많은 <br /> 사진 보기
          </p>
        </DragBox>
        {HORIZONTAL_WEDDING_IMAGES.map((img, index) => (
          <Image
            src={img}
            key={index}
            alt={'스튜디오 사진'}
            width={800}
            height={500}
            loading="lazy"
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

const DragBox = styled.div`
  display: flex;
  flex: right;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  color: #ffffff;
  font-size: 0.7em;
  padding: 10px;
  border-radius: 5px;
  width: 110px;
  height: 30px;
  right: 12px;
  margin-top: 17px;
  align-items: center;
  justify-content: space-between;
`;

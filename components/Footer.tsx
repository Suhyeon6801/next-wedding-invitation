import styled from '@emotion/styled';
import Image from 'next/image';
import FOOTER_MAIN from '@/public/images/wedding_hor1.jpg';

export const Footer = () => {
  return (
    <>
      <FooterCover>소중한 분을 초대합니다</FooterCover>
      <Image
        src={FOOTER_MAIN}
        alt={'footer_main'}
        layout="responsive"
        loading="lazy"
      />
    </>
  );
};

const FooterCover = styled.div`
  margin: 20px 0px 0px 0px;
  padding: 18px;
  background-color: #f5f5f5;
`;

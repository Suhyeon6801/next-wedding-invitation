import styled from '@emotion/styled';
import React from 'react';

export const Footer = () => {
  return <FooterCover>{'여기는 푸터죠'}</FooterCover>;
}

const FooterCover = styled.footer`
  background: grey;
  color: white;
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;

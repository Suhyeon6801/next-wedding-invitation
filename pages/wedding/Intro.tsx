import React from 'react';
import styled from '@emotion/styled';

export const Intro = () => {
    return (
        <>
            <Header>Save the Date</Header>
            <Title>
                <h1>이승현 & 김수현</h1>
                <div>2023.06.17 토요일 오후 12시</div>
            </Title>
        </>
    )
}

const Header = styled.div`
  background-color: hotpink;
  div {
    font-size: 24px;
  }
`;

const Title = styled.footer`
  background: blue;
  color: white;
  padding: 24px;
  display: flex;
`;
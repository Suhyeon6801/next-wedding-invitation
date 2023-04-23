import copyToClipboard from "@/utils/copyToClipboard";
import styled from "@emotion/styled";
import React, { useState } from "react";

export const Account = () => {

    return (
        <div style={{paddingBottom: '30px'}}>
            <h3 style={{ 
                color: '#E9B4B6',
                margin: '50px 30px 20px 20px',
                padding: '10px'
            }}>멀리서 마음 전하기</h3>
            <AccountBox 
                title='신랑 측 계좌번호 보기' 
                contents={
                    <div>
                    <AccountInfo 
                        name='홍길동'
                        bankName='국민은행'
                        bankAccountNumber='123-456-789'
                    />
                    </div>
            }/>     
            <br/>
            <AccountBox 
                title='신부 측 계좌번호 보기' 
                contents={
                <div>
                    <AccountInfo 
                    name='홍길동'
                    bankName='국민은행'
                    bankAccountNumber='123-456-789'
                    />
                    <AccountInfo 
                    name='홍깅ㄹ동'
                    bankName='국민은행'
                    bankAccountNumber='123-456-789'
                    />
                    <AccountInfo 
                    name='홍깅ㄹ동'
                    bankName='국민은행'
                    bankAccountNumber='123-456-789'
                    />
                </div>
        }/>
    </div>
    )
}

const AccountBox = ({title, contents}:{title: string; contents: React.ReactNode}) => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <Container>
            <div onClick={() => setCollapsed(prev => !prev)}>{title}</div>
            {!collapsed && <Contents>{contents}</Contents>}
        </Container>
    )
}


const AccountInfo = ({bankName, bankAccountNumber, name}:{
    bankName: string;
    bankAccountNumber: string;
    name: string;
}) => {
    const copyAccounNumberToClipBoard = () => copyToClipboard(bankAccountNumber, () => {
        alert(`${name} 님의 ${bankName} 계좌번호를 복사했습니다. `);
    });

    return(
        <InfoContainer onClick={copyAccounNumberToClipBoard} >
            <Text>
                <p>
                    <span>{bankName} </span>
                    <span>{bankAccountNumber}</span>
                </p>
                <span>{name}</span>
            </Text>
            <CopyButton>복사</CopyButton>
        </InfoContainer>
    )
}

const Container = styled.div`
  border-radius: 6px;
  margin-bottom: 10px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 10px 13px;
  cursor: pointer;
  border: 1px solid #E9B4B6;
  border-radius: 2px;
`;

const Contents = styled.div`
  border-top: 1px solid #000000b5;
  margin-top: 10px;
  padding-top: 10px;
  box-sizing: border-box;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  text-align: left;
  maring-left: 10px;
`;

const CopyButton = styled.p`
color: #fff;
  text-align: left;
  background-color: #d5d5d5;
  font-size: 0.5em;
padding: 8px 15px;
margin-top: 30px;
margin-bottom: 15px;
border-radius: 3px;
line-height: 20px;
cursor: pointer;
`;
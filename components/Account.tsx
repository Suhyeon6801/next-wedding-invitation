import copyToClipboard from "@/utils/copyToClipboard";
import styled from "@emotion/styled";
import React, { useState } from "react";

export const Account = () => {

    return (
        <div style={{paddingBottom: '30px'}}>
        <div style={{ 
            background: '#f0e9d2',
            margin: '30px 0px',
            padding: '20px'
          }}>멀리서 마음 전하기</div>
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
                <div style={{
                    padding: '10px',
                }}>
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
        <div 
            onClick={copyAccounNumberToClipBoard} style={{
                overflow: 'hidden'
                }}>
            <div style={{
                float: 'left',
                paddingLeft: '30px'
            }}>
                <p>
                    <span>{bankName} </span>
                    <span>{bankAccountNumber}</span>
                </p>
                <p>{name}</p>
            </div>
            <CopyButton>복사</CopyButton>
        </div>
    )
}

const Container = styled.div`
  border-radius: 6px;
  margin-bottom: 10px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 10px 13px;
  cursor: pointer;
`;

const Contents = styled.div`
  border-top: 1px solid #000000b5;
  margin-top: 10px;
  padding-top: 10px;
  box-sizing: border-box;
`;

const CopyButton = styled.p`
color: #fff;
font-family: 'Pre-M';
display: inline-block;
height: 20px;
line-height: 20px;
cursor: pointer;
border-radius: 3px;
font-size: 0.75rem;
padding: 10px 20px;
margin: 15px;
background-color: #d5d5d5;
float: right;
`;
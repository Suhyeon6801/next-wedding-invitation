import copyToClipboard from "@/utils/copyToClipboard";
import styled from "@emotion/styled";
import React, { useState } from "react";

export const Account = () => {

    return (
        <>
        <div style={{ 
            background: '#f0e9d2',
            textAlign: 'center', 
            margin: '30px' ,
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
    </>
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
        <div onClick={copyAccounNumberToClipBoard}>
            <div>{bankName}</div>
            <div>{bankAccountNumber}</div>
            <div>{name}</div>
        </div>
    )
}

const Container = styled.div`
  background:  #f0e9d2;
  border-radius: 6px;
  margin-bottom: 12px;
  padding: 10px 13px;
  cursor: pointer;
`;

const Contents = styled.div`
  border-top: 1px solid #000000b5;
  margin-top: 10px;
  padding-top: 10px;
`;
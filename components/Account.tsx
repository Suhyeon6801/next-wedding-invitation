import copyToClipboard from "@/utils/copyToClipboard";

export const Account = () => {
    return (
        <div>
            <div>멀리서 마음 전하기</div>
            <br/>
            <AccountInfo bankName={'국민은행'} bankAccountNumber={'511302-01-388725'} name={'김수현'}/>
            <br/>
            <AccountInfo bankName={'신한은행'} bankAccountNumber={'110-92-390580'} name={'김수현'}/>
        </div>
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
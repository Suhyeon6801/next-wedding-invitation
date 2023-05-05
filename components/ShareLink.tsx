import styled from '@emotion/styled';
import Image from 'next/image';
import copyToClipboard from '@/utils/copyToClipboard';
import LINK from '@/public/images/external-link.png';
import KAKAOTALK from '@/public/images/kakao-talk.png';
import { Credit } from './Credit';

export const ShareLink = () => {
  const URL = 'https://donghyun-hyejin-wedding-card.vercel.app/';
  const kakaoKey = process.env.KAKAO_API_KEY;

  const handleShare = () => {
    const kakao = window.Kakao;

    if (!kakaoKey) {
      return;
    }

    // key값이 없을 때
    if (!kakao) {
      return;
    }

    // 중복 initialization 방지
    if (!kakao.isInitialized()) {
      // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
      kakao.init(kakaoKey);
    }

    if (!kakao.Link) {
      return;
    }

    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '박동현, 박혜진 결혼합니다',
        description:
          '6월 10일 토요일 오후 1시 10분 \n더 베네치아 3층 베네치아홀',
        imageUrl: URL + 'meta.png',
        link: {
          mobileWebUrl: URL,
          webUrl: URL,
        },
      },
      buttons: [
        {
          title: '자세히 보기',
          link: {
            webUrl: URL,
          },
        },
      ],
    });
  };

  const copyUrlToClipBoard = () =>
    copyToClipboard(URL, () => {
      alert(`주소를 복사했습니다.`);
    });

  return (
    <>
      <ShareLinkContent>
        <div onClick={handleShare} style={{ marginBottom: '20px' }}>
          <Image
            src={KAKAOTALK}
            alt={'kakao-talk'}
            style={{
              verticalAlign: 'middle',
              display: 'inline-block',
              width: '1.2em',
              height: '1.2em',
              marginRight: '0.4em',
              paddingBottom: '4px',
            }}
          />
          카카오톡으로 공유하기
        </div>
        <div onClick={copyUrlToClipBoard}>
          <Image
            src={LINK}
            alt={'link'}
            style={{
              verticalAlign: 'middle',
              display: 'inline-block',
              width: '1em',
              height: '1em',
              marginRight: '0.4em',
              paddingBottom: '4px',
            }}
          />
          청첩장 주소 복사하기
        </div>
      </ShareLinkContent>
      <Credit />
    </>
  );
};

const ShareLinkContent = styled.div`
  margin: 30px 0px 15px 0px;
  font-size: 0.9em;
`;

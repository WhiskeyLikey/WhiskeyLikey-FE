import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from './assets/logo.svg';
import mainImg from './assets/start_img.svg';
import likelion from './assets/likelion.svg';
import { useNavigate } from 'react-router-dom';

const { Kakao } = window;

const Start = () => {
  const navigate = useNavigate();

  const navigateToTest = () => {
    navigate('/test');
  };

  // eslint-disable-next-line no-unused-vars
  const appURI = ''; // 배포된 서비스 도메인
  const localURI = window.location.href; // localhost:3000

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('2876a318025229258708805024d1db25'); // js키
    console.log(Kakao.isInitialized()); // 잘 적용되면 true 반환
  }, []);

  const shareKakao = async () => {
    console.log('shareKakao called');
    try {
      await Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '위스키라이키 WhiskeyLikey',
          description: '나에게 잘 맞는 위스키는 무엇일까?',
          imageUrl:
            'https://postfiles.pstatic.net/MjAyMzExMDZfMTA3/MDAxNjk5MjU1NTE0MTc3.8RDmFL8Yx_StnoGY5wJ0KExDmq1EkEdc2kUsq1mZXNkg.sEcEyvWGR6JTDrlH_Y1ma_5DovLwRn8OF3EjW8gwTIgg.PNG.mjsonsj/image.png?type=w966',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        buttons: [
          {
            title: '나도 테스트 하러 가기',
            link: {
              // 배포 후 수정
              mobileWebUrl: localURI,
              webUrl: localURI,
            },
          },
        ],
      });
      console.log('Kakao.Share.sendDefault completed');
    } catch (error) {
      console.error('Kakao.Share.sendDefault failed', error);
    }
  };

  return (
    <Wrapper>
      <Logo src={logo} />
      <h3>
        나에게 꼭 맞는
        <br />
        위스키는?
      </h3>
      <MainImg src={mainImg} />
      <p>현재 100명의 위스키라이커가 참여했어요!</p>
      <ButtonContainer>
        <button onClick={navigateToTest}>테스트 시작하기</button>
        <button onClick={shareKakao}>테스트 공유하기</button>
      </ButtonContainer>
      <BottomLogo src={likelion} />
    </Wrapper>
  );
};

export default Start;
export {Logo};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    text-align: center;
    font-size: 1.9rem;
    font-weight: 700;
  }
  p {
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(51, 51, 51, 0.9);
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

const Logo = styled.img`
  width: 160px;
`;

const MainImg = styled.img`
  width: 200px;
  margin-top: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    border: none;
    border-radius: 15px;
    width: 320px;
    height: 48px;
    box-shadow:
      0 4px 4px rgba(0, 0, 0, 0.1),
      0 4px 4px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    font-weight: 600;
  }
  button:first-child {
    background: #785440;
    color: #fff;
  }
  button:last-child {
    background: #fff;
    color: #785440;
  }
  button + button {
    margin-top: 12px;
  }
`;

const BottomLogo = styled.img`
  margin-top: 48px;
  width: 176px;
  height: 18px;
`;

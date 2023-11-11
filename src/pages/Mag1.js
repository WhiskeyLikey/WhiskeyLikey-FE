import React from 'react';
import { styled } from 'styled-components';
import { Logo } from './Start';
import logo from './assets/logo.svg';
import prevBtn from './assets/prevBtn.svg';
import mag1 from './assets/mag1.png';
import high1 from './assets/high1.png';
import high2 from './assets/high2.png';
import high3 from './assets/high3.png';
import high4 from './assets/high4.png';
import high5 from './assets/high5.png';
import high6 from './assets/high6.png';
import likelion from './assets/likelion.svg';

import { useNavigate } from 'react-router-dom';
const Mag1 = () => {
  const navigator = useNavigate();
  const goPrev = () => {
    navigator(-1); // 바로 이전 페이지로 이동
  };
  return (
    <Wrapper>
      <div>
        <TopBar>
          <img src={prevBtn} onClick={goPrev} className="prevBtn" />
          <Logo src={logo}></Logo>
        </TopBar>
        <h2>🥃 하이볼, 나도 집에서 마셔보자!</h2>
        <section>
          <MagImgDiv>
            <img src={mag1}></img>
          </MagImgDiv>
          <article>
            <p>
              칵테일의 종류 중 하나이다. 위스키나 브랜디에 탄산수나 다른 음료를
              넣고 얼음을 띄워 만드는 것이 일반적이다. 일본에서 맥주, 사케
              다음으로 술집에서 하이볼이 없는 경우는 거의 존재하지 않는다고 봐도
              될 정도로 대중적이며 우리나라도 코로나를 기점으로 하이볼의 인기가
              매우 높아졌다.{' '}
            </p>
            <p>
              일본에서는 보통 단맛이 없는 탄산수를 넣는 것이 대중적이나
              우리나라에서는 보통 토닉을 많이 넣는다. ( 그래서 우리나라 사람들
              중에서는 일본 본토의 하이볼이 맛없다고 하는 경우도 있다고.. )
              우리나라에서 하이볼은 많이 단 술로 많이 알려져 있는 듯 하다.
            </p>
            <p>
              언제 어디서나 간단히 만들어 먹을 수 있는 하이볼, 방법은 다음과
              같다.
            </p>
          </article>
          <RowImgDiv>
            <HalfMagImgDiv>
              <img src={high1}></img>
            </HalfMagImgDiv>
            <HalfMagImgDiv>
              <img src={high2}></img>
            </HalfMagImgDiv>
          </RowImgDiv>
          <article>
            <p>
              <strong>STEP 1</strong>
            </p>
            <p>
              하이볼 잔( 탄산의 느낌을 더욱더 느끼고 싶다면 차갑게 해주는 것이
              좋다. ) 에 얼음을 채우고, 그 위에 위스키를 붓는다.
              <br />
              표준적인 양은 30 ~ 45㎖ 이다. <br />
              소주잔이 대략 50㎖ 이니 소주잔의 반보다 조금더 넣으면된다.
            </p>
          </article>
          <RowImgDiv>
            <HalfMagImgDiv>
              <img src={high3}></img>
            </HalfMagImgDiv>
            <HalfMagImgDiv>
              <img src={high4}></img>
            </HalfMagImgDiv>
          </RowImgDiv>
          <article>
            <p>
              <strong>STEP 2</strong>
            </p>
            <p>
              탄산수나 토닉워터, 사이다를 붓고 한 두 번만 살짝 저어준다.
              <br />
              통상의 비율은 위스키 1 : 탄산수 4 정도
            </p>
          </article>
          <HalfMagImgDiv>
            <img src={high5}></img>
          </HalfMagImgDiv>
          <article>
            <p>
              <strong>STEP 3</strong>
            </p>
            <p>
              취향에 따라, 또는 위스키 종류에 따라 레몬 슬라이드
              <br />한 조각이나 민트잎 등을 넣어주면 완성
            </p>
          </article>
          <MagImgDiv>
            <img src={high6}></img>
          </MagImgDiv>
          <article>
            <p>
              그런데 보통 소맥을 먹는 비율도 사람마다 다르듯이, 처음엔 비율을 잘
              맞춰먹다가 취향에 따라 위스키를 더넣거나 덜넣거나 하며 본인에게
              가장 잘맞는 맛의 하이볼을 찾을 수 있다. 이것이 직접 만드는
              하이볼의 묘미가 아닐까 싶다.{' '}
            </p>
            <p>
              위스키를 즐길 수 있는 가장 라이트한 방법인 하이볼, 추천받은
              위스키로 직접 해먹어보는것은 어떨까?
            </p>
          </article>
        </section>
        <BottomLogo src={likelion} style={{ marginBottom: '1rem' }} />
      </div>
    </Wrapper>
  );
};

export default Mag1;
export { Wrapper, RowImgDiv, TopBar, MagImgDiv, HalfMagImgDiv, BottomLogo };

const RowImgDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 22rem;

  @media all and (min-width: 431px) {
    width: 56.25rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-top: 2.5rem;
    color: #333333;
    font-size: 1.5rem;
    font-weight: 500;
  }

  article {
    width: 22rem;
    font-size: 0.69rem;
    line-height: 20px;

    p {
      margin: 1.25rem auto;
    }
  }

  @media all and (min-width: 431px) {
    padding-left: 32px;
    padding-right: 32px;
    h2 {
      margin-top: 5rem;
      font-size: 2.25rem;
    }

    article {
      width: 56.25rem;
      font-size: 1.3rem;

      p {
        margin: 3rem auto;
        line-height: 35px;
      }
    }
  }
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;

  .prevBtn {
    position: absolute;
    left: -10px;
  }

  .prevBtn:hover {
    cursor: pointer;
  }

  @media all and (min-width: 431px) {
    .prevBtn {
      width: 2rem;
      height: 2rem;
      left: -2px;
    }
  }
`;

const MagImgDiv = styled.div`
  border-radius: 20px;
  width: 22rem;
  height: 12rem;
  margin-top: 1rem;

  overflow: hidden;
  text-align: center;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media all and (min-width: 431px) {
    margin-top: 3rem;
    width: 56.25rem;
    height: 31rem;
  }
`;

const HalfMagImgDiv = styled(MagImgDiv)`
  width: 10rem;
  height: 10rem;

  @media all and (min-width: 431px) {
    img {
      height: 100%;
    }
    width: 25.93rem;
    height: 25.93rem;
  }
`;

const BottomLogo = styled.img`
  padding-top: 72px;
  width: 176px;
  height: 18px;
`;

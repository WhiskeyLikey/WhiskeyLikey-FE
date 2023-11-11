import React from 'react';
import styled from 'styled-components';
import { TopBar, BottomLogo } from './Mag1';
import { Logo } from './Start';
import logo from './assets/logo.svg';
import img1 from './assets/mag2_1.svg';
import img2 from './assets/mag2_2.svg';
import img3 from './assets/mag2_3.svg';
import img4 from './assets/mag2_4.svg';
import likelion from './assets/likelion.svg';

const Mag2 = () => {
  return (
    <div>
      <Wrapper>
        <TopBar>
          <Logo src={logo} />
        </TopBar>
        <h2>🥃 위린이들을 위한 위스키 마시는 법</h2>
        <Header>
          <img src={img1} />
          <p>
            우린 이들에게 위스키가 다가가기 어려운 이유는 아마 어려운 용어가
            한몫할 것이다. 한 번 알아두면 아주 유용한 위스키 용어들을 알아보자.
            <br />
            <br />
            먼저 마시는 방법에 대한 용어이다. 위스키를 마시는 방법은 크게 세
            가지로 구분할 수 있는데, 그냥 생으로 마시기, 얼음과 마시기, 다른
            음료와 섞어 마시기가 있다.
          </p>
        </Header>
        <Section>
          <h3>1.니트(Neat)와 스트레이트(Straight)</h3>
          <img src={img2} />
          <p>
            위스키를 있는 그대로 마시는 것이다. 잔이야 따라서 마실 수만 있으면
            되겠지만, 향과 맛을 더 잘 음미하기 위해 위스키 전용잔을 사용하는
            것을 추천한다.
            <br />
            <br />
            위스키 회사에서는 간혹 이벤트로 잔을 패키지로 브랜드를 즐기는데 가장
            최적화된 도구를 제공하는 개념이라고 할 수 있다. 보통 30~45ml 가량의
            위스키를 따르고 조금씩 음미하며 마시면 된다. 한 잔에 5번 정도에 나눠
            마신다고 생각하면 마신다고 생각하면 편하다.
          </p>
        </Section>
        <Section>
          <h3>2.온 더 락(On the Rock)</h3>
          <img src={img3} />
          <p>
            온 더 락은 글라스에 얼음을 넣어 마시는 방법이다. 온도가 내려가면서
            알코올 향이 덜 올라오거나 은은하게 올라오며, 얼음이 녹아 희석되면서
            도수도 자연스럽게 낮출 수 있다.
            <br />
            <br />
            위스키 마니아들 사이에서는 위스키 본연의 맛을 해치는 방법이라고
            비추하기도 하지만 사실 어떻게 먹든 본인 입맛에 맞으면 된다.🤔
            위스키를 단독으로 먹기에는 거부감이 있는 위린이들에게는 시작하기에
            아주 좋은 방법이다.
          </p>
        </Section>
        <Section>
          <h3>3.물타기/하이볼/칵테일</h3>
          <img src={img4} />
          <p>
            위스키를 가장 부담 없이 즐길 수 있는 방법이다. 먼저 물타기는 조금
            생소할 수 있는데, 아일랜드나 일본에서 선호하는 방법이다. 마스터
            블렌더들이 시향이나 시음을 할 때 코와 혀를 마비시키는 것을 방지하기
            위해 사용하는 방법이기도 하다. 온 더 락과 비슷하게 위스키 맛과 향은
            느끼고 싶지만 센 알코올 도수가 어려운 위린이에게 추천되는 방법이다.
            일반적으로는 1:1 이하의 비율이 좋다.
            <br />
            <br />
            하이볼은 칵테일의 한 종류로 탄산수나 토닉을 넣어 마시는 방법이다.
            우리나라 사람들에게도 이제는 매우 친숙하지 않을까 싶다. 하이볼에
            대한 이야기는 &lt;하이볼, 나도 집에서 마셔보자&gt; 글에서 더 자세히
            확인할 수 있다.🤭
            <br />
            <br />
            마지막으로 칵테일은 위스키와 다른 술 또는 음료를 섞은 방법이다. 그
            다양해서 취향에 따라 원하는 것을 마실 수 있다는 것이 가장 큰 장점
            같다. 칵테일 또한 하이볼처럼 원하는 대로 섞어서 마실 수 있는
            매력적인 방법이다.
            <br />
            <br />
            &lt;위스키라이키&gt;에서 추천받은 위스키 베이스의 칵테일부터
            도전해보는 것은 어떨까?
          </p>
          <div></div>
          <p>
            추가적으로 위스키의 맛과 향에 대한 용어를 간단히 알아보자. 맛과
            향으로는 크게 세 가지로 위스키를 구분할 수 있다.
            <br />
            <br />
            과실향과 맛을 좋아한다면 쉐리계 연기에 그을린듯한 향, 즉 스모크 향과
            맛을 좋아한다면 피트계 바닐라 향과 맛을 좋아한다면 버번계가 잘 맞을
            것이다. 취향에 맞는 계열의 위스키를 찾아보고 먼저 시도해 보는 것을
            추천한다. 또 생소한 단어인 ‘스파이시’는 우리가 아는 요리의 매운맛,
            불닭의 매운맛이라기보단 혀에 톡 쏘는 얼얼함을 표현하는 용어이다.
            <br />
            <br />
            이것은 위스키를 마셔봐야만 느낄 수 있으니 위린이들은 어서 도전해
            보고 느껴보면서 성장해나가기를 바란다. 🥃
          </p>
        </Section>
        <BottomLogo src={likelion} style={{ marginBottom: '1rem' }} />
      </Wrapper>
    </div>
  );
};

export default Mag2;

const Wrapper = styled.div`
  padding: 20px 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 1.8rem;
    text-align: center;
    margin-top: 80px;
  }
`;

const Header = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 600px;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    text-align: center;
    word-break: keep-all;
  }
`;

const Section = styled.div`
  margin-top: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 600px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 1.6rem;
    text-align: center;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8rem;
    text-align: center;
    word-break: keep-all;
  }
  div {
    width: 1000px;
    height: 2px;
    background: #000;
    margin: 40px 0;
  }
`;

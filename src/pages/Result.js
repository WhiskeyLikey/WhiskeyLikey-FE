import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo.svg';
import titlegraphic from './assets/Graphic_Elements.svg';
import honey from './assets/honey.svg';
import smoky from './assets/smoky.svg';
import drops from './assets/drops.svg';
import whiskey from './assets/whiskey.svg';
import save from './assets/save.svg';
import intersect from './assets/Intersect.svg';
import kakao from './assets/kakaotalk.svg';
import mag1 from './assets/mag1.png';
import mag2 from './assets/mag2.png';
import mag3 from './assets/mag3.png';

import { Logo } from './Start';

const Result = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <h3>나에게 꼭 맞는 위스키는</h3>
      <MainImgDiv>
        <img src={whiskey} className="whiskey"></img>
        <img src={drops}></img>
      </MainImgDiv>
      <div className="resultTxt">
        <h3 className="name">조니워커 레드 라벨</h3>
        <p>
          국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며,
          이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을
          요구할 수 있다.
        </p>
      </div>
      <Description>
        <div className="title">
          <img src={titlegraphic}></img>
          <p>Flavor &amp; Aroma</p>
          <img src={titlegraphic}></img>
        </div>
        <div className="pics">
          <img src={honey}></img>
          {/* <img src={smoky}></img>
          <img src={honey}></img> 
          <img src={honey}></img> */}
        </div>
      </Description>
      <Description>
        <div className="title">
          <img src={titlegraphic}></img>
          <p>How to drink?</p>
          <img src={titlegraphic}></img>
        </div>
        <div className="pics">
          <img src={honey}></img>
          <img src={smoky}></img>
          <img src={honey}></img>
          <img src={honey}></img>
        </div>
      </Description>
      <CtrlDiv>
        <div>
          <img src={save}></img>
          <p>이미지로 저장</p>
        </div>
        <div>
          <img src={intersect}></img>
          <p>
            링크
            <br />
            복사하기
          </p>
        </div>
        <div>
          <img src={kakao}></img>
          <p>카카오톡으로 공유하기</p>
        </div>
      </CtrlDiv>
      <p style={{ color: '#333', fontWeight: '500', fontSize: '1.5rem' }}>
        Recommended Magazine
      </p>
      <Mag>
        <img src={mag1}></img>
        <div>🥃 하이볼, 나도 집에서 마셔보자!</div>
      </Mag>
      <Mag>
        <img src={mag2}></img>
        <p>🥃 위린이들을 위한 위스키 마시는 법</p>
      </Mag>
      <Mag>
        <img src={mag3}></img>
        <p>🥃 서울 위스키 바 추천</p>
      </Mag>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #333;
    font-size: 1.75rem;
    font-weight: 500;
  }

  .resultTxt {
    text-align: center;
    width: 376px;
    p {
      color: #3f3f3f;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }

  // background: white;
  width: 430px;
  margin: 0 auto;
  padding: auto 27px;
  box-sizing: border-box;
`;

const MainImgDiv = styled.div`
  width: 355px;
  position: relative;
  margin-bottom: 1.3rem;

  img {
    width: 100%;
  }

  .whiskey {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Description = styled.div`
  width: 90%;
  box-sizing: border-box;
  margin: 1.5rem auto;

  .title {
    color: #333;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 500;

    img {
      margin: 0 0.5rem;
    }
  }

  .pics {
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;

    background: rgba(225, 186, 101, 0.7);
    border-radius: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
      margin: 0 0.5rem;
      min-width: 0;
    }
  }
`;

const CtrlDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.5rem auto;

  div {
    width: 60px;
    text-align: center;
    margin: 0 1.5rem;

    img {
      width: 100%;
    }
  }
`;

const Mag = styled.div`
  width: 307px;
  height: 219px;
  border-radius: 20px;
  text-align: center;
  background-color: white;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  margin-bottom: 1.5rem;

  img {
    object-fit: cover;
    height: 169px;
  }

  div {
    height: 60px;
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

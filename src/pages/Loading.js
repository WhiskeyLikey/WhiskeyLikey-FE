import React from 'react';
import styled from 'styled-components';
import { BottomLogo, Logo } from './Start';
import logo from './assets/logo.svg';
import cup from './assets/cup.svg';
import bub1 from './assets/Ellipse1.svg';
import bub2 from './assets/Ellipse2.svg';
import bub3 from './assets/Ellipse3.svg';
import likelion from './assets/likelion.svg';

const Loading = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <h3>
        당신에게 맞는
        <br />
        위스키를 제조하는 중 ...
      </h3>
      <div>
        <img src={bub1}></img>
        <img src={bub2}></img>
        <img src={bub3}></img>
      </div>
      <img src={cup}></img>
      <BottomLogo src={likelion} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h3 {
    margin-top: 6rem;
    color: #333;
    font-size: 1.5rem;
    font-weight: 500;
  }
  div {
    position: relative;
    margin-top: 10rem;

    img {
      position: absolute;
      animation:
        fadein 0.5s infinite,
        up 8s infinite ease-in;
    }

    img:nth-of-type(1) {
      left: -50px;
      bottom: 40px;
      animation-duration: 3s;
      animation-delay: 0.5s;
    }

    img:nth-of-type(2) {
      left: 60px;
      animation-duration: 3s;
      animation-delay: 1s;
    }
    img:nth-of-type(3) {
      left: -85px;
      animation-duration: 4s;
    }
  }
`;

export default Loading;

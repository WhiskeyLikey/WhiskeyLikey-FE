import React from 'react';
import { TopBar, Wrapper } from './Mag1';
import { Logo } from './Start';
import logo from './assets/logo.svg';

const Mag2 = () => {
  return (
    <div>
      <Wrapper>
        <TopBar>
          <Logo src={logo}/>
        </TopBar>
        <h2>🌃  서울 위스키 바 추천</h2>
      </Wrapper>
    </div>
  );
};

export default Mag2;
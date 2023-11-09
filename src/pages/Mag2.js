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
        <h2>🥃 위린이들을 위한 위스키 마시는 법</h2>
      </Wrapper>
    </div>
  );
};

export default Mag2;
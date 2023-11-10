import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({ progress }) => {
  return (
    <TotalGage>
      <CurrentGage progress={progress} />
    </TotalGage>
  );
};

export default ProgressBar;

const TotalGage = styled.div`
  width: 320px;
  height: 16px;
  border-radius: 50px;
  background: rgba(217, 217, 217, 0.5);
`;

const CurrentGage = styled.div`
  height: 16px;
  border-radius: 50px;
  background: rgba(120, 84, 64, 0.7);
  width: ${(props) => `${props.progress}%`};
  transition-property: width;
  transition-duration: 0.5s;
  transition-timing-function: ease-in;
`;

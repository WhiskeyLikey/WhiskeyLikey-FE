import React from 'react';
import styled from 'styled-components';

const TwoAnswer = ({ answers, onAnswer, selectedAnswer }) => {
  return (
    <TwoBtnContainer>
      <TwoBtn selected={selectedAnswer === 'Y'} onClick={() => onAnswer('Y')}>
        {answers[0]}
      </TwoBtn>
      <TwoBtn selected={selectedAnswer === 'N'} onClick={() => onAnswer('N')}>
        {answers[1]}
      </TwoBtn>
    </TwoBtnContainer>
  );
};

const FourAnswer = ({ answers, onAnswer, selectedAnswer }) => {
  return (
    <FourBtnContainer>
      <FourBtn selected={selectedAnswer === 'B'} onClick={() => onAnswer('B')}>
        {answers[0]}
      </FourBtn>
      <FourBtn selected={selectedAnswer === 'F'} onClick={() => onAnswer('F')}>
        {answers[1]}
      </FourBtn>
      <FourBtn selected={selectedAnswer === 'S'} onClick={() => onAnswer('S')}>
        {answers[2]}
      </FourBtn>
      <FourBtn selected={selectedAnswer === 'T'} onClick={() => onAnswer('T')}>
        {answers[3]}
      </FourBtn>
    </FourBtnContainer>
  );
};

// const longQuestion = require(data);

const TestItem = ({ data, selectedAnswer, onAnswer }) => {
  const answers = [
    data.answer1,
    data.answer2,
    data.answer3,
    data.answer4,
  ].filter(Boolean); // 선택지 3, 4가 없을 경우 undefined 값 제거시키기 위해 필터링

  return (
    <Container key={data.id}>
      <Question>
        <h3>Q.0{data.id}</h3>
        <pre style={{ fontFamily: 'Arial, sans-serif' }}>{data.question}</pre>
      </Question>
      <ImageContainer>
        <Image src={data.img} />
      </ImageContainer>
      <Answer>
        {answers.length > 2 ? (
          <FourAnswer
            answers={answers}
            onAnswer={onAnswer}
            selectedAnswer={selectedAnswer}
          />
        ) : (
          <TwoAnswer
            answers={answers}
            onAnswer={onAnswer}
            selectedAnswer={selectedAnswer}
          />
        )}
      </Answer>
    </Container>
  );
};

export default TestItem;

const TwoBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 108px;
  button + button {
    margin-top: 12px;
  }
`;

const TwoBtn = styled.button`
  width: 320px;
  height: 48px;
  background: #fff;
  color: #785440 !important;
  border: none;
  border-radius: 15px;
  box-shadow:
    0 4px 4px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 600;

  ${(props) =>
    props.selected &&
    `
      background: #785440;
      color: #fff !important;
    `}

  &:hover {
    transition: transform 0.15s linear;
    transform-origin: 50% 50%;
    transform: scale(1.03);
    background: #785440;
    color: #fff !important;
  }
`;

const FourBtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 12px;
  width: 320px;
  height: 108px;
`;

const FourBtn = styled.button`
  width: 150px;
  height: 48px;
  background: #fff;
  color: #785440 !important;
  border: none;
  border-radius: 15px;
  box-shadow:
    0 4px 4px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 600;

  ${(props) =>
    props.selected &&
    `
      background: #785440;
      color: #fff !important;
    `}

  &:hover {
    transition: transform 0.15s linear;
    transform-origin: 50% 50%;
    transform: scale(1.03);
    background: #785440;
    color: #fff !important;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 20px;
    color: #333333;
    text-align: center;
    margin-top: 44px;
    margin-bottom: 0;
  }
  pre {
    font-size: 20px;
    font-weight: 500;
    color: #333333;
    text-align: center;
    margin-top: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 240px;
  height: 244px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
`;

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

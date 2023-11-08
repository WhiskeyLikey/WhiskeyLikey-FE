import React from 'react';
import styled from 'styled-components';

const TwoAnswer = ({ answers, onAnswer, selectedAnswer }) => {
  return (
    <TwoBtn>
      <SelectedBtn
        selected={selectedAnswer === answers[0]}
        onClick={() => onAnswer(answers[0])}
      >
        {answers[0]}
      </SelectedBtn>
      <SelectedBtn
        selected={selectedAnswer === answers[1]}
        onClick={() => onAnswer(answers[1])}
      >
        {answers[1]}
      </SelectedBtn>
    </TwoBtn>
  );
};

const FourAnswer = ({ answers, onAnswer, selectedAnswer }) => {
  return (
    <FourBtn>
      <SelectedBtn
        selected={selectedAnswer === answers[0]}
        onClick={() => onAnswer(answers[0])}
      >
        {answers[0]}
      </SelectedBtn>
      <SelectedBtn
        selected={selectedAnswer === answers[1]}
        onClick={() => onAnswer(answers[1])}
      >
        {answers[1]}
      </SelectedBtn>
      <SelectedBtn
        selected={selectedAnswer === answers[2]}
        onClick={() => onAnswer(answers[2])}
      >
        {answers[2]}
      </SelectedBtn>
      <SelectedBtn
        selected={selectedAnswer === answers[3]}
        onClick={() => onAnswer(answers[3])}
      >
        {answers[3]}
      </SelectedBtn>
    </FourBtn>
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
      <Image src={data.img} />
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

const TwoBtn = styled.div`
  display: flex;
  flex-direction: column;
  button {
    background: #fff;
    color: #785440 !important;
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
  button + button {
    margin-top: 12px;
  }
`;

const FourBtn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 12px;
  button {
    background: #fff;
    color: #785440 !important;
    border: none;
    border-radius: 15px;
    width: 150px;
    height: 48px;
    box-shadow:
      0 4px 4px rgba(0, 0, 0, 0.1),
      0 4px 4px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    font-weight: 600;
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

const Image = styled.img`
  width: 240px;
  margin-top: 20px;
`;

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  /* button {
    ${(props) =>
    props.selected &&
    `
        width: 180px;
        height: 56px;
        background: #785440;
        color: #fff;
      `}
  } */
`;

const SelectedBtn = styled.button`
  ${(props) =>
    props.selected &&
    `
      width: 180px;
      height: 56px;
      background: #785440;
      color: #fff;
    `}
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './assets/logo.svg';
import ProgressBar from '../components/ProgressBar';
import TestItem from '../components/TestItem';
import likelion from './assets/likelion.svg';
import prevBtn from './assets/prev_btn.svg';
import testData from '../Question.json';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const navigate = useNavigate();
  const navigateToLoading = () => {
    navigate('/loading');
  };
  const navigateToStart = () => {
    navigate('/');
  };

  // 답변 선택 시 이벤트 핸들러
  const onHandleAnswer = (answer) => {
    // 선택한 답변을 저장
    setAnswers((prev) => {
      const nextAnswer = [...prev];
      nextAnswer[currentQuestionIndex] = answer;
      return nextAnswer;
    });

    // 마지막 질문이 아니라면 다음 문제로 넘어가도록
    if (currentQuestionIndex < testData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // 마지막 질문이라면 로딩 페이지로
      navigateToLoading();
    }
    console.log(answers);
  };

  // 이전 문제로 되돌리는 이벤트 핸들러
  const onPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      // 첫번째 질문이라면 시작 페이지로
      navigateToStart();
    }
  };

  return (
    <Wrapper>
      <Logo src={logo} />
      <TopBar>
        <img src={prevBtn} onClick={onPrev} />
        <ProgressBar
          progress={((currentQuestionIndex + 1) / testData.length) * 100}
        />
      </TopBar>
      <TestItem
        data={testData[currentQuestionIndex]}
        selectedAnswer={answers[currentQuestionIndex]}
        onAnswer={onHandleAnswer}
      />
      <BottomLogo src={likelion} />
    </Wrapper>
  );
};

export default Test;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 160px;
  margin-bottom: 20px;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: -4px;
  padding-right: 24px;
  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

const BottomLogo = styled.img`
  margin-top: 48px;
  width: 176px;
  height: 18px;
`;

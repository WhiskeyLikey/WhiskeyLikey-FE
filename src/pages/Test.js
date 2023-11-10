import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Test.css';
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

  useEffect(() => {
    // 선택된 답변이 추가되거나 변경될 때마다 콘솔 출력
    console.log(answers);

    // 마지막 질문의 답변을 선택했는지 확인 (answers가 완전히 업데이트 된 후 넘길 수 있도록)
    if (answers.length === testData.length) {
      setTimeout(() => {
        navigate('/loading', { state: { arrayProps: answers } });
      }, 0);
    }
  }, [answers, navigate]);

  // 답변 선택 시 이벤트 핸들러
  const onHandleAnswer = (answer) => {
    // 선택한 답변을 저장
    setAnswers((prev) => {
      const nextAnswer = [...prev];
      nextAnswer[currentQuestionIndex] = answer;
      return nextAnswer;
    });

    // 질문 끝났는지 체크하기 위해 비동기로 처리
    setTimeout(() => {
      // 마지막 질문이 아니라면 다음 문제로 넘어가도록
      if (currentQuestionIndex < testData.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      }
    }, 0);
  };

  // 이전 문제로 되돌리는 이벤트 핸들러
  const onPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      // 첫번째 질문이라면 시작 페이지로
      navigate('/');
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
        style={{ padding: '20px' }}
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
  @media screen and (max-width: 500px) {
    padding-left: 28px;
    padding-right: 28px;
  }
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
  padding-top: 48px;
  position: absolute;
  bottom: 28px;
  width: 176px;
  height: 18px;
`;

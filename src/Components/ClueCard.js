import React, { useState } from 'react';
import styled from 'styled-components';

const StyledShowAnswerButton = styled.button `
  width: 25%;
  height: 10%;
`;

const StyledCorrectButton = styled.button `
  width: 25%;
  height: 10%;
  background: green;
  z-index: 101;
  position: absolute;
  bottom: 20px;
  right: 33%;
`;

const StyledIncorrectButton = styled.button `
  width: 25%;
  height: 10%;
  background: red;
`;

export default function ClueCard(props) {

  const [clueIsShowing, setClueIsShowing] = useState(false);
  const [showAnswerLink, setShowAnswerLink] = useState(false);
  const [answerIsShowing, setAnswerIsShowing] = useState(false);
  const [cardText, setCardText] = useState(props.children);
  const [showButtons, setShowButtons] = useState(false);

  const showClue = (e) => {
    e.currentTarget.remove();

    setClueIsShowing(true);

    setInterval(
      () => setShowAnswerLink(true),
      0
    );
  }

  const hideClue = () => {
    setClueIsShowing(false);
  }

  const toggleAnswer = () => {
    if (!answerIsShowing) {
      setCardText(props.answer);
      setShowButtons(true);
    } else {
      setCardText(props.children);
      setShowButtons(false);
    }
    setAnswerIsShowing(!answerIsShowing);
  }

  const updateScore = (value) => {
    props.updateScore(parseInt(value));
    hideClue();
  }
  
  let valueClass = 'large';
  if (props.value.length === 4) {
    valueClass = 'medium';
  }

  let textClass = 'small';
  if (cardText.length < 20) {
    textClass = 'large';
  }

  return (
    <div className="clue-card">
      <button className={`clue-card__value ${valueClass}`} onClick={showClue}><span className="dollar-sign">$</span>{props.value}</button>
      <div className={`clue-card__inner ${textClass} ${clueIsShowing ? 'show' : 'hidden'}`}>
        <div className="clue-card__inner-wrapper">
          <div className="clue-card__clue">{cardText}</div>
          <StyledShowAnswerButton className={`clue-card__answer-link ${showAnswerLink ? '' : 'hidden'}`} onClick={toggleAnswer}>Toggle Answer</StyledShowAnswerButton>
          <StyledCorrectButton className={`${showAnswerLink ? '' : 'hidden'} ${showButtons ? '' : 'hidden'}`} onClick={() => updateScore(props.value)}>Correct</StyledCorrectButton>
          <StyledIncorrectButton className={`clue-card__close-link ${showAnswerLink ? '' : 'hidden'} ${showButtons ? '' : 'hidden'}`} onClick={() => updateScore(-props.value)}>Incorrect</StyledIncorrectButton>
        </div>
      </div>
    </div>
  );
}
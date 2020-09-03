import React, { useState } from 'react';

export default function ClueCard(props) {
  const [clueIsShowing, setClueIsShowing] = useState(false);
  const [showAnswerLink, setShowAnswerLink] = useState(false);
  const [answerIsShowing, setAnswerIsShowing] = useState(false);
  const [cardText, setCardText] = useState(props.children);

  const showClue = (e) => {
    e.currentTarget.remove();

    setClueIsShowing(true);

    setInterval(
      () => setShowAnswerLink(true),
      1000
    );
  }

  const hideClue = () => {
    setClueIsShowing(false);
  }

  const toggleAnswer = () => {
    if (!answerIsShowing) {
      setCardText(props.answer);
    } else {
      setCardText(props.children);
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
          <button className={`clue-card__answer-link ${showAnswerLink ? '' : 'hidden'}`} onClick={toggleAnswer}>Toggle Answer</button>
          <button className={`${showAnswerLink ? '' : 'hidden'}`} onClick={() => updateScore(props.value)}>Correct</button>
          <button className={`clue-card__close-link ${showAnswerLink ? '' : 'hidden'}`} onClick={() => updateScore(-props.value)}>Incorrect</button>
        </div>
      </div>
    </div>
  );
}
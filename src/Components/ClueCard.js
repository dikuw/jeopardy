
import React, { useState } from 'react';

export default class ClueCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardText: props.children,
      clueIsShowing: false,
      showAnswerLink: false,
      answerIsShowing: false
    };

    this.showClue = this.showClue.bind(this);
    this.hideClue = this.hideClue.bind(this);
    this.showAnswerLink = this.showAnswerLink.bind(this);
    this.toggleAnswer = this.toggleAnswer.bind(this);
  }

  showClue(e) {
    e.currentTarget.remove();

    this.setState({
      clueIsShowing: true
    });

    setInterval(
      () => this.showAnswerLink(),
      1000
    );
  }

  hideClue() {
    this.setState({
      clueIsShowing: false
    });
  }

  showAnswerLink() {
    this.setState({
      showAnswerLink: true
    });
  }

  toggleAnswer() {
    if (!this.state.answerIsShowing) {
      this.setState({
        cardText: this.props.answer
      });
    } else {
      this.setState({
        cardText: this.props.children
      });
    }

    this.setState({
      answerIsShowing: !this.state.answerIsShowing
    });
  }

  render() {
    let valueClass = 'large';
    if(this.props.value.length === 4) {
      valueClass = 'medium';
    }

    let textClass = 'small';
    if(this.state.cardText.length < 20) {
      textClass = 'large';
    }

    return (
      <div className="clue-card">
        <button className={`clue-card__value ${valueClass}`} onClick={this.showClue}><span className="dollar-sign">$</span>{this.props.value}</button>
        <div className={`clue-card__inner ${textClass} ${this.state.clueIsShowing ? 'show' : 'hidden'}`}>
          <div className="clue-card__inner-wrapper">
            <div className="clue-card__clue">{this.state.cardText}</div>
            <button className={`clue-card__answer-link ${this.state.showAnswerLink ? '' : 'hidden'}`} onClick={this.toggleAnswer}>Toggle Answer</button>
            <button className={`clue-card__close-link ${this.state.showAnswerLink ? '' : 'hidden'}`} onClick={this.hideClue}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}
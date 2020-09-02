import React  from 'react';

export default function Score(props) {
  return (
    <div className="scoreboard">
      <div className="scoreboard__inner-text">{props.score}</div>
    </div>
  );
}

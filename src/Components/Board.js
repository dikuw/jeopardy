import React  from 'react';
import CategoryCard from './CategoryCard';
import ClueCard from './ClueCard';

export default function Board(props) {
  const board = Object.keys(props.data).map(category => {
    return (
      <div className="column">
        <CategoryCard>{category}</CategoryCard>
        {Object.values(props.data[category]).map((card) => (
          <ClueCard value={card.value} answer={card.answer}>{card.clue}</ClueCard>
        ))}
      </div>
    );
  });

  return (
    <div className="board">{board}</div>
  );
}
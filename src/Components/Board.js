import React  from 'react';
import CategoryCard from './CategoryCard';
import ClueCard from './ClueCard';

export default function Board(props) {
  const board = Object.keys(props.data).map(category => {
    return (
      <div key={category.substring(0, 4)} className="column">
        <CategoryCard key={category.substring(0, 4)}>{category}</CategoryCard>
        {Object.values(props.data[category]).map((card, i) => (
          <ClueCard key={category.substring(0, 4) + i} updateScore={props.updateScore} value={card.value} answer={card.answer}>{card.clue}</ClueCard>
        ))}
      </div>
    );
  });

  return (
    <div className="board">{board}</div>
  );
}
import React  from 'react';

export default function CategoryCard(props) {
  return (
    <div className="category-card">
      <div className="card__inner-text">{props.children}</div>
    </div>
  );
}

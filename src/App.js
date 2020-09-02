import React  from 'react';
import data from './Data/data';
import Board from './Components/Board';
import Score from './Components/Score';

export default function App() {

  const boardData = data;

  return (
    <div>
      <Board data={boardData} />
      <Score score={0}></Score>
    </div>
  );
}
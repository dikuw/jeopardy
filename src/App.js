import React, { useState, useEffect }  from 'react';
import { Route, Switch } from 'react-router-dom';
import Board from './Components/Board';
import Score from './Components/Score';
import Admin from './Components/Admin';
import { firebaseApp } from './base';
import './App.css';

import set1 from './Data/data';

export default function App(props) {

  const [questionSet, setQuestionSet] = useState(set1);
  const [contestant, setContestant] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function initialize() {
      return firebaseApp.database().ref('questionSets').once('value').then(function(snapshot) {
        let boardData = (snapshot.val());
        console.log('boardData', boardData);
        setQuestionSet(Object.values(boardData)[0]);
      });
    }
    initialize();
  }, []);

  useEffect(() => {
    firebaseApp.database().ref('questionSets').push(questionSet);  
  }, [questionSet]);

  const updateScore = (points) => {
    setScore(score + points);
  };

  const addQuestionSet = (setName) => {
    firebaseApp.database().ref(`questionSets/${setName}`).push(questionSet);
  }

  const updateQuestionSet = (set) => {
    console.log('updateQuestionSet');
  }

  return (
    <main>
      <Switch>
        <Route exact path="/" 
          render={() => (
            <>
              <Board data={questionSet} updateScore={updateScore} />
              <Score history={props.history} addQuestionSet={addQuestionSet} updateQuestionSet={updateQuestionSet} contestant={contestant} setContestant={setContestant} score={score} />
            </>
          )}
        />
        <Route path="/admin" 
          render={() => (
            <>
              <Admin history={props.history} ></Admin>
            </>
          )}
        />
      </Switch>
    </main>
    
  );
}

import React, { useState, useEffect }  from 'react';
import { Route, Switch } from 'react-router-dom';
import Board from './Components/Board';
import Score from './Components/Score';
import Admin from './Components/Admin';
import { firebaseApp } from './base';
import './App.css';

export default function App(props) {

  const [questionSet, setQuestionSet] = useState({});
  const [questionSetNames, setQuestionSetNames] = useState([]);
  const [questionSets, setQuestionSets] = useState({});
  const [contestant, setContestant] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function initialize() {
      return firebaseApp.database().ref('questionSets').once('value').then(function(snapshot) {
        let boardData = (snapshot.val());
        setQuestionSet(Object.values(boardData)[0]);
        setQuestionSetNames(Object.keys(boardData));
        setQuestionSets(boardData);
      });
    }
    initialize();
  }, []);

  const updateScore = (points) => {
    setScore(score + points);
  };

  const addQuestionSet = (setName, questionSet) => {
    firebaseApp.database().ref(`questionSets/${setName}`).set(questionSet);
  }

  const updateQuestionSet = (set) => {
    setQuestionSet(questionSets[set]);
  }

  return (
    <main>
      <Switch>
        <Route exact path="/" 
          render={() => (
            <>
              <Board data={questionSet} updateScore={updateScore} />
              <Score history={props.history} questionSetNames={questionSetNames} updateQuestionSet={updateQuestionSet} contestant={contestant} setContestant={setContestant} score={score} />
            </>
          )}
        />
        <Route path="/admin" 
          render={() => (
            <>
              <Admin history={props.history} questionSetNames={questionSetNames} questionSets={questionSets} addQuestionSet={addQuestionSet} ></Admin>
            </>
          )}
        />
      </Switch>
    </main>
  );
}

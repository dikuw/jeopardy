import React, { useRef }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const StyledScoreboardDiv = styled.div `
  font-family: 'Swiss 911';
  display: flex;
  justify-content: space-between;
  background: white;
  margin: 0.5vw;
  padding: 1vw;
  border-radius: 4px;
`;

const StyledFormDiv = styled.div `
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const StyledSameLineDiv = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1vh;
  label {
    min-width: 4vw;
    margin: 4px;
  }
  select, input {
    width: 100%;
  }
`;

const StyledScoreDiv = styled.div `
  width: 100%;
  font-size: 9vh;
  text-align: center;
  align-self: center;
`;

const StyledAdminDiv = styled.div `
  text-align: right;
  width: 20%;
`;

export default function Score(props) {

  const questionSetRef= useRef(null);
  const nameRef = useRef(null);

  const handleChange = async (e) => {
    if (e.currentTarget.name === "contestant") {
      props.setContestant(e.currentTarget.value)
    }
    if (e.currentTarget.name === "questionSet") {
      props.updateQuestionSet(e.currentTarget.value)
    }
  }

  const newGameClick = () => {
    window.location.reload();
  };

  const cogClick = () => {
    props.history.push("/admin");
  };

  return (
    <StyledScoreboardDiv className="scoreboard">
      <StyledFormDiv>
        <StyledSameLineDiv>
          <label htmlFor="questionSet">Question Set:</label>
          <select name="questionSet" ref={questionSetRef}  onChange={handleChange} value={props.questionSet} >
            {props.questionSetNames.map((item, i) => (
              <option key={i} value={item}>{item}</option>
            ))}
          </select>
        </StyledSameLineDiv>
        <StyledSameLineDiv>
          <label htmlFor="contestant">Contestant:</label>
          <input name="contestant" type="text" ref={nameRef} onChange={handleChange} value={props.contestant} />
        </StyledSameLineDiv>
        <button onClick={() => newGameClick()}>New Game</button>
      </StyledFormDiv>
      <StyledScoreDiv>Score: <span className="dollar-sign">$</span>{props.score}</StyledScoreDiv>
      <StyledAdminDiv onClick={() => cogClick()}><FontAwesomeIcon icon={faCog} /></StyledAdminDiv>
    </StyledScoreboardDiv>
  );
}

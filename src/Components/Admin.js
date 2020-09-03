import React  from 'react';
import styled from 'styled-components';

const StyledWrapperDiv = styled.div `
  display: flex;
  flex-direction: column;
  margin: 4vh auto;
  padding: 1vw;
  width: 60%;
  height: 220vh;
  display: flex;
  background: white;
  border-radius: 4px;
  font-family: 'Swiss 911';
`;

const StyledHeaderDiv = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 1vh;
  border-bottom: 1px solid black;
  width: 100%;
  height: 4vh;
  label {
    min-width: 4vw;
    margin: 4px;
    margin-bottom: 1vh;
    align-self: center;
    flex-basis: 6%;
  }
  select, input {
    margin-right: 1vw;
    margin-bottom: 1vh;
    width: 20%;
  }
`;

const StyledSaveButton = styled.button `
  font-size: 0.8rem;
  background: black;
  color: white;
  height: 20px;
  border-radius: 3px;
  border: none;
`;

const StyledBodyDiv = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 4vh;
  label {
    min-width: 4vw;
    margin: 4px;
    margin-bottom: 1vh;
    align-self: center;
    flex-basis: 6%;
  }
  select, input {
    margin-right: 1vw;
    width: 20%;
  }
 `;

 const StyledSameLineDiv = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 1vh;
  label {
    min-width: 4vw;
    margin: 4px;
  }
  select, input {
    width: 20%;
    margin-right: 4px;
  }
  textarea {
    width: 100%;
    margin-right: 4px;
  }
`;

const StyledButton = styled.button`
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 400;
  font-style: normal;
  background: var(--rosaVieja);
  border-color: var(--rosaVieja);
  border-radius: 2px;
  border: 0;
  color: #ffffff;
  display: inline-block;
  height: 45px;
  letter-spacing: 1px;
  line-height: 45px;
  margin: 0.25rem;
  padding: 0 25px;
  transition: background-color 300ms ease-out;
  width: auto;
`;

export default function Admin(props) {

  const goBack = () => {
    props.history.push("/");
  };

  const saveSet = () => {
    console.log('saveSet');
  };

  return (
    <>
      <StyledButton onClick={() => goBack()}>Back to Game</StyledButton>
      <StyledWrapperDiv>
        <StyledHeaderDiv>
          <label htmlFor="questionSet">Question Set:</label>
          <select name="questionSet" >
            <option value="set1">Set 1</option>
            <option value="set2">Set 2</option>
            <option value="set3">Set 2</option>
          </select>
          <input name="questionSetName" type="text" placeholder="question set name" />
          <StyledSaveButton onClick={() => saveSet()}>Save</StyledSaveButton>
        </StyledHeaderDiv>
        <StyledBodyDiv>
          <StyledSameLineDiv>
            <label htmlFor="category1">Category 1:</label>
            <input name="category1" type="text" placeholder="category name" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q1q">Question 1:</label>
            <textarea name="cat1q1q" placeholder="question and..." />
            <textarea name="cat1q1a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q2q">Question 2:</label>
            <textarea name="cat1q2q" placeholder="question and..." />
            <textarea name="cat1q2a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q3q">Question 3:</label>
            <textarea name="cat1q3q" placeholder="question and..." />
            <textarea name="cat1q3a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q4q">Question 4:</label>
            <textarea name="cat1q4q" placeholder="question and..." />
            <textarea name="cat1q4a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q5q">Question 5:</label>
            <textarea name="cat1q5q" placeholder="question and..." />
            <textarea name="cat1q5a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="category2">Category 2:</label>
            <input name="category2" type="text" placeholder="category name" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat2q1q">Question 1:</label>
            <textarea name="cat2q1q" placeholder="question and..." />
            <textarea name="cat2q1a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat2q2q">Question 2:</label>
            <textarea name="cat2q2q" placeholder="question and..." />
            <textarea name="cat2q2a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat2q3q">Question 3:</label>
            <textarea name="cat2q3q" placeholder="question and..." />
            <textarea name="cat2q3a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat2q4q">Question 4:</label>
            <textarea name="cat2q4q" placeholder="question and..." />
            <textarea name="cat2q4a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat2q5q">Question 5:</label>
            <textarea name="cat2q5q" placeholder="question and..." />
            <textarea name="cat2q5a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="category1">Category 1:</label>
            <input name="category1" type="text" placeholder="category name" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q1q">Question 1:</label>
            <textarea name="cat1q1q" placeholder="question and..." />
            <textarea name="cat1q1a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q2q">Question 2:</label>
            <textarea name="cat1q2q" placeholder="question and..." />
            <textarea name="cat1q2a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q3q">Question 3:</label>
            <textarea name="cat1q3q" placeholder="question and..." />
            <textarea name="cat1q3a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q4q">Question 4:</label>
            <textarea name="cat1q4q" placeholder="question and..." />
            <textarea name="cat1q4a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q5q">Question 5:</label>
            <textarea name="cat1q5q" placeholder="question and..." />
            <textarea name="cat1q5a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="category1">Category 1:</label>
            <input name="category1" type="text" placeholder="category name" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q1q">Question 1:</label>
            <textarea name="cat1q1q" placeholder="question and..." />
            <textarea name="cat1q1a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q2q">Question 2:</label>
            <textarea name="cat1q2q" placeholder="question and..." />
            <textarea name="cat1q2a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q3q">Question 3:</label>
            <textarea name="cat1q3q" placeholder="question and..." />
            <textarea name="cat1q3a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q4q">Question 4:</label>
            <textarea name="cat1q4q" placeholder="question and..." />
            <textarea name="cat1q4a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q5q">Question 5:</label>
            <textarea name="cat1q5q" placeholder="question and..." />
            <textarea name="cat1q5a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="category1">Category 1:</label>
            <input name="category1" type="text" placeholder="category name" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q1q">Question 1:</label>
            <textarea name="cat1q1q" placeholder="question and..." />
            <textarea name="cat1q1a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q2q">Question 2:</label>
            <textarea name="cat1q2q" placeholder="question and..." />
            <textarea name="cat1q2a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q3q">Question 3:</label>
            <textarea name="cat1q3q" placeholder="question and..." />
            <textarea name="cat1q3a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q4q">Question 4:</label>
            <textarea name="cat1q4q" placeholder="question and..." />
            <textarea name="cat1q4a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q5q">Question 5:</label>
            <textarea name="cat1q5q" placeholder="question and..." />
            <textarea name="cat1q5a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="category1">Category 1:</label>
            <input name="category1" type="text" placeholder="category name" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q1q">Question 1:</label>
            <textarea name="cat1q1q" placeholder="question and..." />
            <textarea name="cat1q1a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q2q">Question 2:</label>
            <textarea name="cat1q2q" placeholder="question and..." />
            <textarea name="cat1q2a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q3q">Question 3:</label>
            <textarea name="cat1q3q" placeholder="question and..." />
            <textarea name="cat1q3a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q4q">Question 4:</label>
            <textarea name="cat1q4q" placeholder="question and..." />
            <textarea name="cat1q4a" placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q5q">Question 5:</label>
            <textarea name="cat1q5q" placeholder="question and..." />
            <textarea name="cat1q5a" placeholder="answer" />
          </StyledSameLineDiv>
        </StyledBodyDiv>
      </StyledWrapperDiv>
    </>
  );
}

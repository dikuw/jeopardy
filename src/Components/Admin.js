import React, { useState, useRef }  from 'react';
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
  height: 27px;
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

  const [localQSet, setLocalQSet] = useState({});

  const setNameRef = useRef(null);
  const category1NameRef = useRef(null);
  const cat1q1qRef = useRef(null);
  const cat1q1aRef = useRef(null);
  const cat1q2qRef = useRef(null);
  const cat1q2aRef = useRef(null);
  const cat1q3qRef = useRef(null);
  const cat1q3aRef = useRef(null);
  const cat1q4qRef = useRef(null);
  const cat1q4aRef = useRef(null);
  const cat1q5qRef = useRef(null);
  const cat1q5aRef = useRef(null);
  const category2NameRef = useRef(null);
  const cat2q1qRef = useRef(null);
  const cat2q1aRef = useRef(null);
  const cat2q2qRef = useRef(null);
  const cat2q2aRef = useRef(null);
  const cat2q3qRef = useRef(null);
  const cat2q3aRef = useRef(null);
  const cat2q4qRef = useRef(null);
  const cat2q4aRef = useRef(null);
  const cat2q5qRef = useRef(null);
  const cat2q5aRef = useRef(null);
  const category3NameRef = useRef(null);
  const cat3q1qRef = useRef(null);
  const cat3q1aRef = useRef(null);
  const cat3q2qRef = useRef(null);
  const cat3q2aRef = useRef(null);
  const cat3q3qRef = useRef(null);
  const cat3q3aRef = useRef(null);
  const cat3q4qRef = useRef(null);
  const cat3q4aRef = useRef(null);
  const cat3q5qRef = useRef(null);
  const cat3q5aRef = useRef(null);
  const category4NameRef = useRef(null);
  const cat4q1qRef = useRef(null);
  const cat4q1aRef = useRef(null);
  const cat4q2qRef = useRef(null);
  const cat4q2aRef = useRef(null);
  const cat4q3qRef = useRef(null);
  const cat4q3aRef = useRef(null);
  const cat4q4qRef = useRef(null);
  const cat4q4aRef = useRef(null);
  const cat4q5qRef = useRef(null);
  const cat4q5aRef = useRef(null);
  const category5NameRef = useRef(null);
  const cat5q1qRef = useRef(null);
  const cat5q1aRef = useRef(null);
  const cat5q2qRef = useRef(null);
  const cat5q2aRef = useRef(null);
  const cat5q3qRef = useRef(null);
  const cat5q3aRef = useRef(null);
  const cat5q4qRef = useRef(null);
  const cat5q4aRef = useRef(null);
  const cat5q5qRef = useRef(null);
  const cat5q5aRef = useRef(null);
  const category6NameRef = useRef(null);
  const cat6q1qRef = useRef(null);
  const cat6q1aRef = useRef(null);
  const cat6q2qRef = useRef(null);
  const cat6q2aRef = useRef(null);
  const cat6q3qRef = useRef(null);
  const cat6q3aRef = useRef(null);
  const cat6q4qRef = useRef(null);
  const cat6q4aRef = useRef(null);
  const cat6q5qRef = useRef(null);
  const cat6q5aRef = useRef(null);

  const goBack = () => {
    props.history.push("/");
  };

  const saveSet = () => {
    let setName = setNameRef.current.value;
    
    let questionSet = {
      [category1NameRef.current.value || "cat1"] : [
        {
          value: "200",
          clue: cat1q1qRef.current.value,
          answer: cat1q1aRef.current.value,
        },
        {
          value: "400",
          clue: cat1q2qRef.current.value,
          answer: cat1q2aRef.current.value,
        },
        {
          value: "600",
          clue: cat1q3qRef.current.value,
          answer: cat1q3aRef.current.value,
        },
        {
          value: "800",
          clue: cat1q4qRef.current.value,
          answer: cat1q4aRef.current.value,
        },
        {
          value: "1000",
          clue: cat1q5qRef.current.value,
          answer: cat1q5aRef.current.value,
        },
      ],
      [category2NameRef.current.value || "cat2"] : [
        {
          value: "200",
          clue: cat2q1qRef.current.value,
          answer: cat2q1aRef.current.value,
        },
        {
          value: "400",
          clue: cat2q2qRef.current.value,
          answer: cat2q2aRef.current.value,
        },
        {
          value: "600",
          clue: cat2q3qRef.current.value,
          answer: cat2q3aRef.current.value,
        },
        {
          value: "800",
          clue: cat2q4qRef.current.value,
          answer: cat2q4aRef.current.value,
        },
        {
          value: "1000",
          clue: cat2q5qRef.current.value,
          answer: cat2q5aRef.current.value,
        },
      ],
      [category3NameRef.current.value || "cat3"] : [
        {
          value: "200",
          clue: cat3q1qRef.current.value,
          answer: cat3q1aRef.current.value,
        },
        {
          value: "400",
          clue: cat3q2qRef.current.value,
          answer: cat3q2aRef.current.value,
        },
        {
          value: "600",
          clue: cat3q3qRef.current.value,
          answer: cat3q3aRef.current.value,
        },
        {
          value: "800",
          clue: cat3q4qRef.current.value,
          answer: cat3q4aRef.current.value,
        },
        {
          value: "1000",
          clue: cat3q5qRef.current.value,
          answer: cat3q5aRef.current.value,
        },
      ],
      [category4NameRef.current.value || "cat4"] : [
        {
          value: "200",
          clue: cat4q1qRef.current.value,
          answer: cat4q1aRef.current.value,
        },
        {
          value: "400",
          clue: cat4q2qRef.current.value,
          answer: cat4q2aRef.current.value,
        },
        {
          value: "600",
          clue: cat4q3qRef.current.value,
          answer: cat4q3aRef.current.value,
        },
        {
          value: "800",
          clue: cat4q4qRef.current.value,
          answer: cat4q4aRef.current.value,
        },
        {
          value: "1000",
          clue: cat4q5qRef.current.value,
          answer: cat4q5aRef.current.value,
        },
      ],
      [category5NameRef.current.value || "cat5"] : [
        {
          value: "200",
          clue: cat5q1qRef.current.value,
          answer: cat5q1aRef.current.value,
        },
        {
          value: "400",
          clue: cat5q2qRef.current.value,
          answer: cat5q2aRef.current.value,
        },
        {
          value: "600",
          clue: cat5q3qRef.current.value,
          answer: cat5q3aRef.current.value,
        },
        {
          value: "800",
          clue: cat5q4qRef.current.value,
          answer: cat5q4aRef.current.value,
        },
        {
          value: "1000",
          clue: cat5q5qRef.current.value,
          answer: cat5q5aRef.current.value,
        },
      ],
      [category6NameRef.current.value || "cat6"] : [
        {
          value: "200",
          clue: cat6q1qRef.current.value,
          answer: cat6q1aRef.current.value,
        },
        {
          value: "400",
          clue: cat6q2qRef.current.value,
          answer: cat6q2aRef.current.value,
        },
        {
          value: "600",
          clue: cat6q3qRef.current.value,
          answer: cat6q3aRef.current.value,
        },
        {
          value: "800",
          clue: cat6q4qRef.current.value,
          answer: cat6q4aRef.current.value,
        },
        {
          value: "1000",
          clue: cat6q5qRef.current.value,
          answer: cat6q5aRef.current.value,
        },
      ],
    }

    props.addQuestionSet(setName, questionSet);
  };

  const handleChange = (e) => {
    let updatedValue = e.currentTarget.value;
    let propName = e.currentTarget.name;
    
    const updatedQSet = {
      ...localQSet,	
      [propName]: updatedValue
    };

    setLocalQSet(updatedQSet);
  }

  return (
    <>
      <StyledButton onClick={() => goBack()}>Back to Game</StyledButton>
      <StyledWrapperDiv>
        <StyledHeaderDiv>
          <label htmlFor="questionSet">Question Set:</label>
          <select name="questionSet" onChange={handleChange}>
            <option value="none">Select to edit or add new...</option>
            {props.questionSetNames.map((item, i) => (
              <option key={i} value={item}>{item}</option>
            ))}
          </select>
          <input name="questionSetName" ref={setNameRef} type="text" placeholder="question set name" />
          <StyledSaveButton onClick={() => saveSet()}>Save</StyledSaveButton>
        </StyledHeaderDiv>
        <StyledBodyDiv>
          <StyledSameLineDiv>
            <label htmlFor="category1">Category 1:</label>
            <input name="category1" ref={category1NameRef} type="text" placeholder="category name" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q1q">Question 1:</label>
            <textarea name="cat1q1q" ref={cat1q1qRef} placeholder="question and..." />
            <textarea name="cat1q1a" ref={cat1q1aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q2q">Question 2:</label>
            <textarea name="cat1q2q" ref={cat1q2qRef} placeholder="question and..." />
            <textarea name="cat1q2a" ref={cat1q2aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q3q">Question 3:</label>
            <textarea name="cat1q3q" ref={cat1q3qRef} placeholder="question and..." />
            <textarea name="cat1q3a" ref={cat1q3aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q4q">Question 4:</label>
            <textarea name="cat1q4q" ref={cat1q4qRef} placeholder="question and..." />
            <textarea name="cat1q4a" ref={cat1q4aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q5q">Question 5:</label>
            <textarea name="cat1q5q" ref={cat1q5qRef} placeholder="question and..." />
            <textarea name="cat1q5a" ref={cat1q5aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="category2">Category 2:</label>
            <input name="category2" ref={category2NameRef} type="text" placeholder="category name" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat2q1q">Question 1:</label>
            <textarea name="cat2q1q" ref={cat2q1qRef} placeholder="question and..." />
            <textarea name="cat2q1a" ref={cat2q1aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat2q2q">Question 2:</label>
            <textarea name="cat2q2q" ref={cat2q2qRef} placeholder="question and..." />
            <textarea name="cat2q2a" ref={cat2q2aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat2q3q">Question 3:</label>
            <textarea name="cat2q3q" ref={cat2q3qRef} placeholder="question and..." />
            <textarea name="cat2q3a" ref={cat2q3aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat2q4q">Question 4:</label>
            <textarea name="cat2q4q" ref={cat2q4qRef} placeholder="question and..." />
            <textarea name="cat2q4a" ref={cat2q4aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat2q5q">Question 5:</label>
            <textarea name="cat2q5q" ref={cat2q5qRef} placeholder="question and..." />
            <textarea name="cat2q5a" ref={cat2q5aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="category3">Category 3:</label>
            <input name="category3" ref={category3NameRef} type="text" placeholder="category name" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q1q">Question 1:</label>
            <textarea name="cat1q1q" ref={cat3q1qRef} placeholder="question and..." />
            <textarea name="cat1q1a" ref={cat3q1aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q2q">Question 2:</label>
            <textarea name="cat1q2q" ref={cat3q2qRef} placeholder="question and..." />
            <textarea name="cat1q2a" ref={cat3q2aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q3q">Question 3:</label>
            <textarea name="cat1q3q" ref={cat3q3qRef} placeholder="question and..." />
            <textarea name="cat1q3a" ref={cat3q3aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q4q">Question 4:</label>
            <textarea name="cat1q4q" ref={cat3q4qRef} placeholder="question and..." />
            <textarea name="cat1q4a" ref={cat3q4aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q5q">Question 5:</label>
            <textarea name="cat1q5q" ref={cat3q5qRef} placeholder="question and..." />
            <textarea name="cat1q5a" ref={cat3q5aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="category4">Category 4:</label>
            <input name="category4" ref={category4NameRef} type="text" placeholder="category name" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q1q">Question 1:</label>
            <textarea name="cat1q1q" ref={cat4q1qRef} placeholder="question and..." />
            <textarea name="cat1q1a" ref={cat4q1aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q2q">Question 2:</label>
            <textarea name="cat1q2q" ref={cat4q2qRef} placeholder="question and..." />
            <textarea name="cat1q2a" ref={cat4q2aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q3q">Question 3:</label>
            <textarea name="cat1q3q" ref={cat4q3qRef} placeholder="question and..." />
            <textarea name="cat1q3a" ref={cat4q3aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q4q">Question 4:</label>
            <textarea name="cat1q4q" ref={cat4q4qRef} placeholder="question and..." />
            <textarea name="cat1q4a" ref={cat4q4aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q5q">Question 5:</label>
            <textarea name="cat1q5q" ref={cat4q5qRef} placeholder="question and..." />
            <textarea name="cat1q5a" ref={cat4q5aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="category5">Category 5:</label>
            <input name="category5" ref={category5NameRef} type="text" placeholder="category name" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q1q">Question 1:</label>
            <textarea name="cat1q1q" ref={cat5q1qRef} placeholder="question and..." />
            <textarea name="cat1q1a" ref={cat5q1aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q2q">Question 2:</label>
            <textarea name="cat1q2q" ref={cat5q2qRef} placeholder="question and..." />
            <textarea name="cat1q2a" ref={cat5q2aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q3q">Question 3:</label>
            <textarea name="cat1q3q" ref={cat5q3qRef} placeholder="question and..." />
            <textarea name="cat1q3a" ref={cat5q3aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q4q">Question 4:</label>
            <textarea name="cat1q4q" ref={cat5q4qRef} placeholder="question and..." />
            <textarea name="cat1q4a" ref={cat5q4aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q5q">Question 5:</label>
            <textarea name="cat1q5q" ref={cat5q5qRef} placeholder="question and..." />
            <textarea name="cat1q5a" ref={cat5q5aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="category6">Category 6:</label>
            <input name="category6" ref={category6NameRef} type="text" placeholder="category name" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q1q">Question 1:</label>
            <textarea name="cat1q1q" ref={cat6q1qRef} placeholder="question and..." />
            <textarea name="cat1q1a" ref={cat6q1aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q2q">Question 2:</label>
            <textarea name="cat1q2q" ref={cat6q2qRef} placeholder="question and..." />
            <textarea name="cat1q2a" ref={cat6q2aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q3q">Question 3:</label>
            <textarea name="cat1q3q" ref={cat6q3qRef} placeholder="question and..." />
            <textarea name="cat1q3a" ref={cat6q3aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q4q">Question 4:</label>
            <textarea name="cat1q4q" ref={cat6q4qRef} placeholder="question and..." />
            <textarea name="cat1q4a" ref={cat6q4aRef} placeholder="answer" />
          </StyledSameLineDiv>
          <StyledSameLineDiv>
            <label htmlFor="cat1q5q">Question 5:</label>
            <textarea name="cat1q5q" ref={cat6q5qRef} placeholder="question and..." />
            <textarea name="cat1q5a" ref={cat6q5aRef} placeholder="answer" />
          </StyledSameLineDiv>
        </StyledBodyDiv>
      </StyledWrapperDiv>
    </>
  );
}

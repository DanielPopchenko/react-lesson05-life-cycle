import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;

  & li + li {
    margin-left: 12px;
  }
`;

const Button = styled.button`
  background-color: grey;
  border-radius: 4px;
  border: none;
  color: #fff;
  padding: 5px 15px;
  cursor: pointer;
  & + & {
    margin-left: 12px;
  }
`;

export default function FeedbackList({ onBtnClick }) {
  // const checkBtn = (event) =>
  //   getStarted(true);
  //   onIncreaseValue(event.target.name);
  // };
  return (
    <>
      <List>
        <li>
          <button onClick={onBtnClick} name="good">
            Good
          </button>
        </li>
        <li>
          <button onClick={onBtnClick} name="neutral">
            Neutral
          </button>
        </li>
        <li>
          <button onClick={onBtnClick} name="bad">
            Bad
          </button>
        </li>
      </List>
    </>
  );
}

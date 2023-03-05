import React from 'react';
import styled from 'styled-components';
import { getStarted } from './Statistics';

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

export default function FeedbackList({ feedbacks, onIncreaseValue }) {
  const checkBtn = (event) => {
    getStarted(true);
    onIncreaseValue(event.target.name);
  };

  return (
    <>
      <List>
        {Object.keys(feedbacks).map((value) => (
          <Button key={value} name={value} onClick={checkBtn}>
            {value}
          </Button>
        ))}
      </List>
    </>
  );
}

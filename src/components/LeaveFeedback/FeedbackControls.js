import React from 'react';
import styled from 'styled-components';

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

export default function FeedbacControls({ onIncreaseValue, feedbacks }) {
  //   console.log(feedbacks);

  return (
    <>
      <Button onClick={() => onIncreaseValue(feedbacks, 'good')}>Good</Button>
      <Button onClick={() => onIncreaseValue(feedbacks, 'neutral')}>Neutral</Button>
      <Button onClick={() => onIncreaseValue(feedbacks, 'bad')}>Bad</Button>
    </>
  );
}

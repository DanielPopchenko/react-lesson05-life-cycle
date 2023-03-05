import React from 'react';
import styled from 'styled-components';
import StatisticsItems from './StatisticsItems';

let status = false;

const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const getStarted = (flag) => {
  return (status = flag);
};

export default function Statistics({ ...props }) {
  return (
    <>
      <Title>Statistics</Title>

      {status ? <StatisticsItems {...props} /> : <h2>Leave Feedback</h2>}
    </>
  );
}

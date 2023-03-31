import React from 'react';

export default function Statistics({ good, neutral, bad, total, positiveFeedbacks }) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedbacks: {total}</p>
      {total > 0 && <p>Positive feedbacks: {positiveFeedbacks}</p>}
    </>
  );
}

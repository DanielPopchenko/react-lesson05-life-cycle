import React from 'react';

export default function StatisticsItems({ good, neutral, bad, totalFeedbacks, positiveFeedbacks }) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedbacks}</p>
      <p>Positive feedbacks: {positiveFeedbacks}</p>
    </>
  );
}

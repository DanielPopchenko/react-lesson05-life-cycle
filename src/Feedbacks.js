import React, { useEffect, useState } from 'react';

import FeedbackList from './components/LeaveFeedback/FeedbackList';
import Statistics from './components/LeaveFeedback/Statistics';

export default function Feedbacks() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);
  const [total, setTotal] = useState(0);

  const handleBtnClick = (e) => {
    const name = e.target.name;

    switch (name) {
      case 'good':
        setGoodFeedback((goodFeedback) => (goodFeedback += 1));
        break;
      case 'neutral':
        setNeutralFeedback((neutralFeedback) => (neutralFeedback += 1));
        break;
      case 'bad':
        setBadFeedback((badFeedback) => (badFeedback += 1));
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    function countTotalFeedbacks() {
      return goodFeedback + neutralFeedback + badFeedback;
    }

    setTotal(countTotalFeedbacks());
  }, [goodFeedback, neutralFeedback, badFeedback, total]);

  const countPositiveFeedbacks = () => {
    return Math.floor((goodFeedback * 100) / total) + '%';
  };

  const positiveFeedbacks = countPositiveFeedbacks();
  return (
    <div>
      <FeedbackList onBtnClick={handleBtnClick} />
      <Statistics
        good={goodFeedback}
        neutral={neutralFeedback}
        bad={badFeedback}
        total={total}
        positiveFeedbacks={positiveFeedbacks}
      />
    </div>
  );
}

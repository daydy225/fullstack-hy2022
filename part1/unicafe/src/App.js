import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Title = ({ title }) => <h2>{title}</h2>;

const Statistics = ({ text, number }) => (
  <p>
    {text} {number}
  </p>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let all = 0;
  const arr = [good, neutral, bad];
  arr.forEach((num) => (all += num));

  const score = {
    good: 1,
    neutral: 0,
    bad: -1,
  };

  let average =
    (good * score.good + neutral * score.neutral + bad * score.bad) / all;

  let positive = (good / all) * 100;

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <Title title="give feedback" />
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <Title title="statistics" />
      <Statistics text="good" number={good} />
      <Statistics text="Neutral" number={neutral} />
      <Statistics text="bad" number={bad} />
      <Statistics text="all" number={all} />
      <Statistics text="average" number={average} />
      <Statistics text="positive" number={`${positive} %`} />
    </div>
  );
};

export default App;

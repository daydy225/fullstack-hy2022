import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Title = ({ title }) => <h2>{title}</h2>;

const Statistic = ({ text, number }) => (
  <p>
    {text} {number}
  </p>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
      <Statistic text="good" number={good} />
      <Statistic text="Neutral" number={neutral} />
      <Statistic text="bad" number={bad} />
    </div>
  );
};

export default App;

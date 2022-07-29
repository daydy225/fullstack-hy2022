import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Title = ({ title }) => <h2>{title}</h2>;

const Statistics = (props) => {
  if (props.feedbacks.length === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <StatisticLine text={props.good} value={props.numberOfGood} />
      <StatisticLine text={props.neutral} value={props.numberOfNeutral} />
      <StatisticLine text={props.bad} value={props.numberOfBad} />
      <StatisticLine text={props.all} value={props.sum} />
      <StatisticLine text={props.average} value={props.avg} />
      <StatisticLine text={props.positive} value={props.positivePercentage} />
    </>
  );
};

const StatisticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedbacks, setAllFeedBacks] = useState([]);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAllFeedBacks(feedbacks.concat("G"));
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAllFeedBacks(feedbacks.concat("B"));
  };
  const handleBadClick = () => {
    setBad(bad + 1);
    setAllFeedBacks(feedbacks.concat("N"));
  };

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

  let positive = `${(good / all) * 100} %`;

  return (
    <div>
      <Title title="give feedback" />
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <Title title="statistics" />
      <Statistics
        good="good"
        neutral="neutral"
        bad="bad"
        all="all"
        average="average"
        positive="positive"
        numberOfGood={good}
        numberOfNeutral={neutral}
        numberOfBad={bad}
        sum={all}
        avg={average}
        positivePercentage={positive}
        feedbacks={feedbacks}
      />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
  <div>{props.text} {props.value} {props.endMarker}</div>
  )
}

const Statistics = (props) => {

  if (props.counterAll > 0) {
    return (
      <div>
        <StatisticLine text="good" value={props.counterGood} />
        <StatisticLine text="neutral" value={props.counterNeutral} />
        <StatisticLine text="bad" value={props.counterBad} />
        <StatisticLine text="average" value={(props.counterGood * 1 + props.counterBad * -1) / props.counterAll} />
        <StatisticLine text="positive" value={props.counterGood / props.counterAll * 100} endMarker="%" />  
      </div >

    )
  } else {
    return (
      <div>No feedback given</div>
    )
  }
}



const App = () => {
  const [counterGood, setCounterGood] = useState(0)
  const [counterNeutral, setCounterNeutral] = useState(0)
  const [counterBad, setCounterBad] = useState(0)
  const [counterAll, setCounterAll] = useState(0)

  const increaseGoodByOne = () => {
    setCounterGood(counterGood + 1)
    setCounterAll(counterAll + 1)
  }

  const increaseNeutralByOne = () => {
    setCounterNeutral(counterNeutral + 1)
    setCounterAll(counterAll + 1)

  }
  const increaseBadByOne = () => {
    setCounterBad(counterBad + 1)
    setCounterAll(counterAll + 1)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={increaseGoodByOne}
        text="Good"
      />
      <Button handleClick={increaseNeutralByOne}
        text="Neutral"
      />
      <Button handleClick={increaseBadByOne}
        text="Bad"
      />
      <h2>Statistics</h2>
      <Statistics counterGood={counterGood} counterNeutral={counterNeutral}
        counterBad={counterBad} counterAll={counterAll}></Statistics>
    </div >
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

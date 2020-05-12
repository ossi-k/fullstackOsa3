import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Statistics = (props) => {

  const Average = () => {
    return (props.counterGood * 1 + props.counterBad * -1) / props.counterAll
  }

  const Positive = () => {
    return props.counterGood / props.counterAll * 100
  }

  return (
    <div>
      <a>
        <b>Good</b>  {props.counterGood}
      </a>
      <br></br>
      <a>
        <b>Neutral</b>  {props.counterNeutral}
      </a>
      <br></br>
      <a>
        <b>Bad</b>  {props.counterBad}
      </a>
      <br></br>
      <a>
        <b>All</b> {props.counterAll}
      </a>
      <br></br>
      <a>
        <b>Average</b> <Average></Average>
      </a>
      <br></br>
      <a>
        <b>Positive</b> <Positive></Positive> %
      </a>
    </div >
  )
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
      <button onClick={increaseGoodByOne}>
        Good
      </button>
      <button onClick={increaseNeutralByOne}>
        Neutral
      </button>
      <button onClick={increaseBadByOne}>
        Bad
      </button>
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

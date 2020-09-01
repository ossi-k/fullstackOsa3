import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const NumberOfPoints = (props) => {
  return (
    <div>has {props.votes} votes</div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setVoteAmount] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0))

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * 6))
  }

   //const points = Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0)
   //const copy = [...points]

  const vote = () => {
    setVoteAmount(points[selected] + 1)
    //console.log(copy[selected])
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <br></br>
      <NumberOfPoints votes = {points[selected]}/>
      <p>
        <Button handleClick={vote}
          text="vote"
        />
        <Button handleClick={randomAnecdote}
          text="next anecdote"
        />
      </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const mitavittua = ["jebajee", "paskaa"]
  //const points = Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 1)
  //const copy = [...points]
  //const points = [0, 0, 0, 0, 0, 0]
  //const copy = [...points]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)

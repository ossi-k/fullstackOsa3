import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} excercises = {props.excercises1}/>
      <Part part = {props.part2} excercises = {props.excercises2}/>
      <Part part = {props.part3} excercises = {props.excercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of excercises {props.total}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
      <div>
        {props.part} {props.excercises}
      </div>
  )
}


const App = () => {
  const course = "Half Stack Application development"
  const part1 = "Fundamentals of React"
  const excercises1 = 10
  const part2 = "Using props to pass data"
  const excercises2 = 7
  const part3 = "State of a component"
  const excercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} excercises1 = {excercises1}
                part2 = {part2} excercises2 = {excercises2} 
                part3 = {part3} excercises3 = {excercises3}/>
      <Total total={excercises1 + excercises2 + excercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  console.log(props)
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
  const part1 = {
    name: "Fundamentals of React",
    excercises: 10
  }
  const part2 = {
    name: "Using props to pass data",
    excercises: 7
  }
  const part3 = {
    name: "State of a component",
    excercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} excercises1 = {part1.excercises}
                part2 = {part2.name} excercises2 = {part2.excercises} 
                part3 = {part3.name} excercises3 = {part3.excercises}/>
      <Total total={part1.excercises + part2.excercises + part3.excercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

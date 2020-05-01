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
  const parts = [
    {
      name: "Fundamentals of React",
      excercises: 10
    },
    {
      name: "Using props to pass data",
      excercises: 7
    },
    {
      name: "State of a component",
      excercises: 14
    }
  ]
  

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0].name} excercises1 = {parts[0].excercises}
                part2 = {parts[1].name} excercises2 = {parts[1].excercises} 
                part3 = {parts[2].name} excercises3 = {parts[2].excercises}/>
      <Total total={parts[0].excercises + parts[1].excercises + parts[2].excercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

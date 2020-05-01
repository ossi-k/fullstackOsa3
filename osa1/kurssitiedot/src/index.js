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
      <p>
        {props.parts[0].name} {props.parts[0].excercises}
      </p>
      <p>
        {props.parts[1].name} {props.parts[1].excercises}
      </p>
      <p>
        {props.parts[2].name} {props.parts[2].excercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of excercises {props.total[0].excercises + props.total[1].excercises + props.total[2].excercises}
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
  const course = {
    name: "Half Stack Application development",
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div >
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

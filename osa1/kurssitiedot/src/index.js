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
      <p>
        {props.content}
      </p>
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
      <Content content={part1 + " " + excercises1} />
      <Content content={part2 + " " + excercises2} />
      <Content content={part3 + " " + excercises3} />
      <Total total={excercises1 + excercises2 + excercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

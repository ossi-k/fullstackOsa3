import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  const { courses } = props
  console.log(courses)
  return (
    <div>
      {courses.map(course =>
        <p key={course.id}>
          {course.name} {course.exercises}
        </p>
      )}
    </div>
  )
}

const Total = (props) => {
  const { courses } = props
  let sum = 0
  {
    courses.map(course =>
      sum = sum + course.exercises)
  }
  return (
    <div>
      <b>
        Total of {sum} exercises
      </b>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content courses={course.parts} />
      <Total courses={course.parts} />
    </div>

  )
}

const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
]

const App = ({ courses }) => {
  return (
    <div>
      {courses.map(course =>
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}

ReactDOM.render(
  <App courses={courses} />,
  document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'

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
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  },
  {
    name: 'Tiraterapia',
    id: 3,
    parts: [
      {
        name: 'Algoritmia päähän',
        exercises: 30,
        id: 1
      },
      {
        name: 'Päätä algoritmiin',
        exercises: 1,
        id: 2
      },
      {
        name: 'Dijkstran algoritmi',
        exercises: 10,
        id: 3
      }
    ]
  },
  {
    name: 'Vielä yksi kurssi',
    id: 4,
    parts: [
      {
        name: 'Päätä algoritmiin',
        exercises: 1,
        id: 2
      },
      {
        name: 'Dijkstran algoritmi',
        exercises: 10,
        id: 3
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

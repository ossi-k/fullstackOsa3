import React from 'react'

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
    const numberOfExercises = []
    {
      courses.map(course =>
        numberOfExercises.push(course.exercises)
      )
    }
    const reducer = (sum, currentValue) => sum + currentValue
    return (
      numberOfExercises.reduce(reducer)
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

  export default Course
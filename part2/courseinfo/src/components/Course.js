import React from 'react';

const Total = ({ parts }) => {
  //console.log({parts})
  const total = parts.reduce((sum, curr) => {
    return sum + curr.exercises
  }, 0)
  return(
    <p>Total of {total} exercises</p>
  ) 
}

const Header = ({course}) => {
  //console.log({course})
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({course}) => {
  return (
    <div>
      {course.parts.map(part =>
        <Part key={part.id} part={part}/>)}
    </div>
  )
}

const Part = ({part}) => {
  return (
  <p>{part.name} {part.exercises}</p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course
import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
    <h1>
      {props.course}
    </h1>
    </div>
  )
}

const Part = ({part, exercises}) => {
  return (
    <div>
      <p>{part} {exercises}</p>
    </div>
  )
}

const Content = ({parts}) => {
  const [first, second, third] = parts
  return (
    <div>
      <p><Part part={first.name} exercises={first.exercises}/></p>
      <p><Part part={second.name} exercises={second.exercises}/></p>
      <p><Part part={third.name} exercises={third.exercises}/></p>
    </div>
  )
}


const Total = ({parts}) => {
  const total = parts.reduce((a, b) => a+b.exercises, 0)
  return (
      <p>Number of exercises {total}</p>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({onClick, text}) => (
	<button onClick={onClick}>
		{text}
	</button>
)

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <Statistic text="good" value ={props.good} />
      <Statistic text="neutral" value ={props.neutral} />
      <Statistic text="bad" value ={props.bad} />
      <Statistic text="all" value ={props.all} />
      <Statistic text="average" value ={props.average} />
      <Statistic text="positive" value ={props.positive} />
    </div>
    )
}

const Statistic = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
    setAll(all+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }
  const handleBadClick = () => {
    setBad(bad+1)
    setAll(all+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={(good-bad)/all} positive={good/all*100 + "%"} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
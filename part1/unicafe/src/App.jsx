import { useState } from 'react'

const Button = ({text, handleClick, state}) => {
  // console.log('before',text,state)
  const render = () => {handleClick(state + 1)}
  // console.log('now',text,state)
  return (
    // Do not use: onClick = {render()}, because this will render immediately.
    <button onClick = {render}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const average = (good - bad) / (bad + neutral + good)
  const positive = good / (bad + neutral + good) * 100 + '%'
  
  // return bad + neutral + good === 0 ? (<div>No feedback given.</div>) : (
  //   <>
      
  //     <p>good {good}</p>
  //     <p>neutral {neutral}</p>
  //     <p>bad {bad}</p>
  //     <p>all {bad + neutral + good}</p>
  //     <p>average {average}</p>
  //     <p>positive {positive}</p>
  //   </>
  // )
  return bad + neutral + good === 0 ? (<div>No feedback given.</div>) : (
    <div>
      <table>
        <tbody>
          <StatisticLine text = 'good' value = {good}/>
          <StatisticLine text = 'neutral' value = {neutral}/>
          <StatisticLine text = 'bad' value = {bad}/>
          <StatisticLine text = 'all' value = {good + neutral + bad}/>
          <StatisticLine text = 'average' value = {average}/>
          <StatisticLine text = 'positive' value = {positive}/>
        </tbody>
        
      </table>

    </div>
  )
}

const StatisticLine = ({text,value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>

  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <h1>give feedback</h1>
      <Button state = {good} handleClick = {setGood} text = 'good'/>
      <Button state = {neutral} handleClick = {setNeutral} text = 'neutral' />
      <Button state = {bad} handleClick = {setBad} text = 'bad' />
      <h2>statistics</h2>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App

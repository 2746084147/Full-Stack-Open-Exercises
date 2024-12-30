import { useState } from 'react'
// Note: How to get random number? 
// function getRandom(N, M) {
//   return Math.floor(Math.random() * (M - N + 1)) + N
// }
const Button = (props) => {
  const getRandom = () => {
    const num = Math.floor(Math.random() * props.content.length)
    props.handleClick(num)
  }
  return <button onClick = {getRandom}>next anecdote</button>
}

const Vote = (props) => {
  const plus = () => {
    // Create a new array to avoid changing the original array
    let newVote = [...props.content]
    newVote[props.index] += 1
    props.handleClick(newVote)
  }
  return (<button onClick = {plus}>vote</button>)
}

const Max = (props) => {
  // Do not need hook to render because when click vote, the page will re-render and the Max component will also re-render, so it can update automatically.
  // indexOf(value): find the value's index. 
  const index = props.vote.indexOf(Math.max(...props.vote))
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>
        {props.content[index]}
      </p>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  // The hook compares the states, if states change, the hook will re-render the page, so we should create a new arr in this way to make sure the hook can detect the change happening on the arr.
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <p>
        has {vote[selected]} votes
      </p>
      <Vote content = {vote} index = {selected} handleClick = {setVote} />
      <Button content = {anecdotes} handleClick = {setSelected} />
      <Max vote = {vote} content = {anecdotes}/>
    </div>
    
  )
}

export default App
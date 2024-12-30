const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

// 1.1 Course Information, step 1
// const Content = (props) => {
//   return (
//     <p>
//       {props.part} {props.exercises}
//     </p>
//   )
// }

// 1.2 Course Information, step 2
// const Part = (props) => {
//   return (
//     <p>
//       {props.part} {props.exercises}
//     </p>
//   )
// }

// const Content = () => {
//   const part1 = 'Fundamentals of React'
//   const part2 = 'Using props to pass data'
//   const part3 = 'State of a component'
//   const exercises1 = 10
//   const exercises2 = 7
//   const exercises3 = 14
//   return (
//     <div>
//       <Part part = {part1} exercises = {exercises1} />
//       <Part part = {part2} exercises = {exercises2} />
//       <Part part = {part3} exercises = {exercises3} />
//     </div>
//   )
    
// }

// 1.3 Course Information step 3
// const Content = props => {
//   // console.log(props)
//   return (
//     <p>
//       {props.part.name} {props.part.exercises}
//     </p>
//   )
// }

// 1.4 Course Information step 4
// const Content = props => {
//   // console.log(props);
//   return (
//     <>
//       <p>
//         {props.part[0].name} {props.part[0].exercises}
//       </p>
//       <p>
//         {props.part[1].name} {props.part[1].exercises}
//       </p>
//       <p>
//         {props.part[2].name} {props.part[2].exercises}
//       </p>
//     </>
    
//   )
// }

// 1.5 Course Information step 5
const Content = props => {
  // console.log(props)
  return (
    <>
      <p>
        {props.part.parts[0].name} {props.part.parts[0].exercises}
      </p>
      <p>
        {props.part.parts[1].name} {props.part.parts[1].exercises}
      </p>
      <p>
        {props.part.parts[2].name} {props.part.parts[2].exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
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
      <Header course = {course} />
      <Content part = {course} />
      <Total total = {course} />
    </div>
  )
}

export default App


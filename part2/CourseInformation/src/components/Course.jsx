import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {
  // console.log(props.course);
  
  const content = props.course.map((element) => {
    return (
      // If add key to the 3 components below, a warning will occur, saying that 2 children have the same key, so we should add the key to a parent element, we can create a new element div.
      <div key = {element.id}>
        <Header course = {element}/>
        <Content parts = {element.parts} />
        <Total sum = {element.parts}/>
      </div>
    )
  })
  return content
}

export default Course

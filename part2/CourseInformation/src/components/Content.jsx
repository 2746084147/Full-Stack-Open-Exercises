import Part from './Part'

const Content = ({ parts }) => {
  // console.log('this is parts',parts)
  const content = parts.map((element) => <Part key = {element.id} part = {element} />)
  return <>
    {content}    
  </>
  
}
  
  

export default Content
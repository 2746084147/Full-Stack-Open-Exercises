const Part = ({ part }) => {
  // console.log('this is part',part);
  
  return <p>
    {part.name} {part.exercises}
  </p>
}
  

export default Part
const Total = ({ sum }) => {
  // console.log(sum)
  const total = sum.reduce((prev, curr) => {
    // console.log(prev)
    // In reduce, if you give the second parameter, then "prev" points to this param (in this case, prev points to 0). If you do not give the second param, then it points to the first element in the array.
    return prev + curr.exercises
  }, 0)
  // console.log(total);
  
  return <p key = {sum.id}><strong>Total of {total} exercises</strong></p>
}

export default Total

const Items = ({flag, arr, filter,handleDelete}) => {

  const getShow = (flag, arr, filter) => {
    if(flag) {
      return arr
    } else {
      // Filter needed names.
      const newArr = arr.filter(element => {
        return element.name.toUpperCase().indexOf(filter.toUpperCase()) > -1
      })
      return newArr
    }
  }
  const output = getShow(flag, arr, filter)
  // console.log(Array.isArray(output));
  
  return output.map((element)=>{
    return <div key={element.id}>
      <span>{element.name} {element.number}</span>
        <button onClick = {() => handleDelete(element)}>delete</button>
    </div>
  })
}

export default Items
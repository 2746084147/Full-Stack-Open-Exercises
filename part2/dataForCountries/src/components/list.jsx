import {useState} from 'react'
const List = ({filter, arr}) => {
  const [newArr, setNewArr] = useState(arr)
  const filterArr = newArr.filter(element => {
    return element.name.common.toUpperCase().indexOf(filter.toUpperCase()) > -1
  })

  const getLanguage = (element) => {
    let lis = []
    for (let i in element){
      // console.log(i);

      lis.push(element[i])
    }
    return lis
  }


  const handleClick = (element) => {
    setNewArr([element])
  }

  if(filterArr.length >= 10) {
    return <div><span>Too many matches, specify another filter</span></div>
  } else if (filterArr.length >= 2) {
    return (
      filterArr.map((element) => {
        return <div key = {element.fifa+element.ccn3}>
                  <span>{element.name.common}</span>
                  <button onClick = {()=>handleClick(element)}>show</button>
                </div>
      })
    )
  } 
  return filterArr.map((element) => {
    return <div key = {element.fifa+element.ccn3}>
              <h2>{element.name.common}</h2>
              <div>
                <span>capital {element.capital}</span>
                <br></br>
                <span>area {element.area}</span>
              </div>
              <strong>languages:</strong>
              <ul>
                {getLanguage(element.languages).map((e,index)=>{
                  return (
                    <li key = {index}>{e}</li>
                  )
                })}
              </ul>
              <div><img src={element.flags.png} alt="" /></div>
            </div>
  })
  
  
}

export default List
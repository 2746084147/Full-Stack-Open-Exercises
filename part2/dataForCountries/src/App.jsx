import { useState,useEffect } from 'react'
import countryService from './services/countries'

import Input from './components/input'
import List from './components/list'


function App() {
  const [country, setCountry] = useState(null)
  const [filter, setFilter] = useState('')
  useEffect(()=>{
    countryService
      .getAll()
      .then(response=>setCountry(response.data))
  }, [])

  if(!country){
    return null
  }

  const handleFilterChange = e => {
    console.log(e.target.value)
    setFilter(e.target.value)
  }

  return (
    <div>
      <Input value = {filter} onChange = {handleFilterChange}/>
      <List filter = {filter} arr = {country}  />
    </div>
  )
}

export default App

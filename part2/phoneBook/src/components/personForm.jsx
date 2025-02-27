
const PersonForm = ({newName, newNumber, handleNameChange, handleNumberChange, addItem}) => {


  return (      
  <form onSubmit = {addItem}>
    <div>
      name: <input value = {newName} onChange = {handleNameChange}/>
    </div>
    <br></br>
    <div>
      number: <input value = {newNumber} onChange = {handleNumberChange}/>
    </div>
    <br></br>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

export default PersonForm
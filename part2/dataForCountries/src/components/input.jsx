const Input = ({value, onChange}) => {
  
  return (<div>
    <span>find countries</span>
    <input value = {value} onChange = {onChange}/>
  </div>)
}

export default Input
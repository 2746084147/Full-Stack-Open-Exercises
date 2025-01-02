const Notification = ({message}) => {
  if ( message === '') {
    return null
  } else if( message.includes('Information')) {
    return <div className = 'error'>{message}</div>
  }
  return (
    <div className = 'fulfilled'>{message}</div>
  )
}

export default Notification
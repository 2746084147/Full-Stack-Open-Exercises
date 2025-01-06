const Notification = ({message}) => {
  if ( message === '') {
    return null
  } else if( message.includes('Added') || message.includes('Deleted') || message.includes('Changed')) {
    return <div className = 'fulfilled'>{message}</div>
  }
  return (
    <div className = 'error'>{message}</div>
  )
}

export default Notification
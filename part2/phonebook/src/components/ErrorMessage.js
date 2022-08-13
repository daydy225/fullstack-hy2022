const ErrorMessage = ({ message }) => {
  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  if (message === null || message === '') {
    return null
  }

  return <div style={errorStyle}>{message}</div>
}

export default ErrorMessage

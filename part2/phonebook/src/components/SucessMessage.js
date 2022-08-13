const SucessMessage = ({ message }) => {
  const sucessStyle = {
    color: 'green',
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

  return <div style={sucessStyle}>{message}</div>
}

export default SucessMessage

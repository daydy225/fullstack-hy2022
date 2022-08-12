import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAllNumbers = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addNewNumber = newPersonObj => {
  const request = axios.post(baseUrl, newPersonObj)
  return request.then(response => response.data)
}

const deleteNumber = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request
}

const phonebookService = {
  getAllNumbers,
  addNewNumber,
  deleteNumber,
}

export default phonebookService

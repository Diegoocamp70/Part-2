import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = Person => {
  return axios.post(baseUrl, Person)
}

const update = (id,addPerson ) => {
  return axios.put(`${baseUrl}/${id}`,addPerson )
}
const Delete = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
    }

export default {create, getAll, update, Delete};
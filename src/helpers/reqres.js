import axios from 'axios'

const http = axios.create({
  baseURL: 'https://reqres.in/api'
})

async function login({ email, username, password }) {
  const { data } = await http.post('/login', { email, username, password })
  return data
}

export default {
  login
}

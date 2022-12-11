import axios from 'axios'

const http = axios.create({
  baseURL: 'https://reqres.in/api'
})

async function listUsers(params = {}) {
  const { data } = await http.get('/users', { params })
  return data
}

async function getUser(userId) {
  const { data } = await http.get(`/users/${userId}`)
  return data
}

async function login({ email, username, password }) {
  const { data } = await http.post('/login', { email, username, password })
  return data
}

export default {
  listUsers,
  getUser,
  login
}

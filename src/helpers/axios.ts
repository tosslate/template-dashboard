import axios from 'axios'

export default axios.create({
  baseURL: import.meta.env['VITE_TOSSLATE_URL'] || 'https://tosslate.vercel.app'
})

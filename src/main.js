import { QueryClient } from 'react-query'
import { hiddenSpin } from './utils/spin'
import { createApp } from './utils/app'
import routes from './routes/all'
import store from './store'
import './styles'
import App from './app'

const client = new QueryClient()
const app = createApp(App, {
  client,
  routes,
  store
})

app.mount('app')
hiddenSpin('app-spin')

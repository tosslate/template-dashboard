import { QueryClient } from 'react-query'
import { hiddenSpin } from './utils/spin'
import { createApp } from './utils/app'
// import './styles/tailwind.css'
// import './styles/override.css'
import routes from './routes/all'
import store from './store'
import theme from './theme'
import App from './app'

const client = new QueryClient()
const app = createApp(App, {
  client,
  routes,
  store,
  theme
})

app.mount('app')
hiddenSpin('app-spin')

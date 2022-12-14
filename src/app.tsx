import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { QueryClientProvider as Query } from 'react-query'
import { StoreContext } from 'storeon/react'

export default function App({ client, routes, store }) {
  return (
    <StoreContext.Provider value={store}>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 3,
            colorPrimary: '#2563eb',
            colorTextHeading: '#334155',
            colorTextDescription: '#94a3b8'
          }
        }}
      >
        <Query client={client}>
          <Router>
            <Switch>
              {routes.map(({ path, component, redirect }, index: number) => {
                // prettier-ignore
                return !component && redirect
                  ? <Redirect exact key={index} from={path} to={redirect} />
                  : <Route exact key={index} path={path} component={component} />
              })}
            </Switch>
          </Router>
        </Query>
      </ConfigProvider>
    </StoreContext.Provider>
  )
}

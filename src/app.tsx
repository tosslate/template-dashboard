import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'
import { QueryClientProvider as Query } from 'react-query'
import { StoreContext } from 'storeon/react'
import { ConfigProvider } from 'antd'

export default function App({ client, routes, store }) {
  return (
    <StoreContext.Provider value={store}>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 3,
            colorPrimary: '#292524',
            colorTextHeading: '#292524',
            colorTextDescription: '#78716c',
            colorLinkActive: '#d6d3d1',
            colorLinkHover: '#a8a29e'
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

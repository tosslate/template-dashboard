import { createElement } from 'react'
import { render } from 'react-dom'

export function createApp(app, props) {
  const component = createElement(app, props, null)

  function mount(identifier) {
    const appId = identifier.replace(/#/, '')
    const appEl = document.getElementById(appId)

    render(component, appEl)
    return component
  }

  return {
    component,
    mount
  }
}

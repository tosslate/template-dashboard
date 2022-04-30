function init() {
  return {
    notifications: []
  }
}

function fetch(_, notifications) {
  return {
    notifications
  }
}

function clear() {
  return {
    notifications: []
  }
}

export default (store) => {
  store.on('@init', init)
  store.on('notifications/fetch', fetch)
  store.on('notifications/clear', clear)
}

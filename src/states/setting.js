function init() {
  return {
    settings: {}
  }
}

function fetch(_, settings) {
  return {
    settings
  }
}

export default (store) => {
  store.on('@init', init)
  store.on('settings/fetch', fetch)
}

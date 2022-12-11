function init() {
  return {
    token: {
      access_token: null,
      refresh_token: null
    }
  }
}

function fetch(_, { access_token, refresh_token }) {
  return {
    token: {
      access_token,
      refresh_token
    }
  }
}

export default (store) => {
  store.on('@init', init)
  store.on('tokens/fetch', fetch)
  store.on('tokens/reset', init)
}

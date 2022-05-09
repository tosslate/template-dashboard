function init() {
  return {
    me: null,
    users: []
  }
}

function me(_, me) {
  return {
    me
  }
}

function fetch(_, users) {
  return {
    users
  }
}

export default (store) => {
  store.on('@init', init)
  store.on('users/me', me)
  store.on('users/fetch', fetch)
}

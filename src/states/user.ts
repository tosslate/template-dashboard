import type { StoreonStore } from 'storeon'

function init() {
  return {
    me: null,
    users: []
  }
}

function me(_: unknown, me: Record<string, any>) {
  return {
    me
  }
}

function fetch(_: unknown, users: any[]) {
  return {
    users
  }
}

export default (store: StoreonStore) => {
  store.on('@init', init)
  store.on('users/me', me)
  store.on('users/fetch', fetch)
}

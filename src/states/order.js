function init() {
  return {
    orders: []
  }
}

function fetch(_, orders) {
  return {
    orders
  }
}

export default (store) => {
  store.on('@init', init)
  store.on('orders/fetch', fetch)
}

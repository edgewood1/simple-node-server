function getItemList (store) {
  return store.getState().items.all
}

exports.getItemList = getItemList
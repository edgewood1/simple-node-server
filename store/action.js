
const store = require('./store.js');

const editConfig = (newName) => {
  store.dispatch({
    type: "EDIT_CONFIG", 
    payload: newName
  })
}


const api = async () => {
  const res = await  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        store.dispatch({
          type: 'ALL_DATA', 
          payload: json
        })
      })
}
 
exports = { editConfig, api }
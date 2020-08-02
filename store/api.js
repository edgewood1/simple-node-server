const axios = require('axios');

//using async means it returns a promise
async function getUserData(x) {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${x}`)
}

exports.getUserData = getUserData;
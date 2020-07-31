
const api = require('./server/api.js')
 
var fs = require('fs')
var http = require("http");
const StringDecoder = require('string_decoder').StringDecoder;
var httpServer = http.createServer(handleRequest);
var { compose, createStore, combineReducers, applyMiddleWare } = require("redux");
 
// reducer function
function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }
  switch(action.type) {
    case 'INCREMENT': 
      return state = state + 1
    case 'DECREMENT': 
      return state = state - 1
    case 'ODD': 
      return state = state + 1
    case 'ASYNC': 
      return state = state + 1
    default: 
      return state
}
}

var store = createStore(counter);
//any changes occur? call function that is in argument
store.subscribe(render)

function render() {
  console.log(store.getState().toString())
}

 
function main() {
  httpServer.listen(8080);
  console.log('lsistening on 8080')
}

main()

async function handleRequest(req, res) {
  if (req.url === '/') {
    const x = await pageLoad('./static/index.html', res);
    res.end(x)
    // add js
  } else if (req.url === '/index.js') {
    const x = await pageLoad('./index.js', res);
    res.end(x)
  } else if (req.url === '/react.js') {
    // add react
    const x = await pageLoad('./react/index.js', res);
    res.end(x)
  } else if (req.url === '/layout') {
    res.end(await pageLoad('./static/one.html'))
  } else if (req.url === '/input-comp.js') {
    res.end(await pageLoad('./input-comp.js'))
  }else if (req.url === '/send') {
    const x = await handleApi(req)
    // server response has go to be a string
    res.end(JSON.stringify(x))
  }
}

async function handleApi(request, done) {
  // handleApi doesn't auto return a promise like fetch or axios
  // so do it manually
  return new Promise(function(res, rej) {
  const decoder = new StringDecoder('utf-8');
  let payload = '';

  request.on('data', (data) => {
    payload += decoder.write(data);
  });

  request.on('end', async () => {
    payload += decoder.end();
    payload = JSON.parse(payload);
    const resp = await api.getUserData(payload) 
    store.dispatch({type: 'INCREMENT'})
    const increment = store.getState().toString()
    const hello = {
      resp: resp.data,
      inc: increment
    }
    // res(resp.data);
    res(hello)
  })
})
}

function pageLoad(filepath, res){
  return fs.readFileSync(filepath,function(error,contents){
    return contents
  });
}

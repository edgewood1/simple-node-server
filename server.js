
const api = require('./store/api.js')
var fs = require('fs')
var http = require("http");
const StringDecoder = require('string_decoder').StringDecoder;
var httpServer = http.createServer(handleRequest);
var { store } = require('./store/reducer.js');

function main() {
  httpServer.listen(8080);
  console.log('lsistening on 8080')
}

main()

 

async function handleRequest(req, res) {
  switch (req.url) {
    case '/':
      res.end(await pageLoad('./index.html', res))
    case '/router.js':
      res.end(await pageLoad('./react/router.js', res))
    case '/layout.js':
        res.end(await pageLoad('./components/layout-comp.js', res))
    case '/index.js':
      res.end(await pageLoad('./index.js', res));
    case '/react.js': 
      res.end(await pageLoad('./react/index.js', res));
    
    case '/input-comp.js':
      res.end(await pageLoad('./components/input-comp.js'))
    case '/send': 
      const data = await handleApi(req).catch((err) => console.log('error', err))
      const ret = JSON.stringify(data)
      res.end(ret);
    default: 
      res.end('sorry')
    // server response has go to be a string
    // res.end(JSON.stringify(x))
  }
}

async function handleApi(request, done) {
  // handleApi doesn't auto return a promise like fetch or axios
  // so do it manually
  // console.log(request)
  return new Promise(function(res, rej) {
  const decoder = new StringDecoder('utf-8');
  let payload = '';
  // get data from frontend
  request.on('data', (data) => {
    payload += decoder.write(data);
  })
  request.on('end', async () => {
    // consolidate data from front end.
    payload += decoder.end();
    console.log('============', payload)
    if (payload) payload = JSON.parse(payload);
    
    const resp = await api.getUserData(payload).catch((err) => console.log('err', err))
    // make changes to store
    store.dispatch({type: 'INCREMENT'})
    // get new state
    const increment = store.getState().toString()
    // return data from state
    const hello = {
      resp: resp.data,
      inc: increment
    }
    res(hello)
  })
})
}

function pageLoad(filepath, res){
  return fs.readFileSync(filepath,function(error,contents){
    return contents
  });
}


let value;
 
const comp = document.querySelector('my-button').shadowRoot;

async function hello(x){
  console.log("hello!!")
  const value = comp.querySelector('[type="text"]').value;
  // const value = document.querySelector('[type="text"]').value;
  fetch('/send', {
    method:'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
  },
    body: JSON.stringify(value)
  })
  .then((resp) => {
    return resp.json();
  }).then((resp) => {
    // console.log(resp)
    addToOutput(resp)
  }).catch((err) => {
    console.log('fetch error', err)
  })
  //or
  
  // let response = await fetch(targetUrl); // first then on fetch
  // let data = await response.json();  // second then on resp.json.
}
 
const addToOutput = (title) => {
  console.log(title)
  const titleSpot = comp.querySelector('#title');
  const increment = comp.querySelector('#increment');
  titleSpot.textContent = ''
  increment.textContent = ''
  const input = comp.querySelector('input[type=text]');
  console.log('this', input)
  input.value = '';
  const text1 = document.createTextNode(`Increment: ${title.inc}`)
  const text2 = document.createTextNode(`Title: ${title.resp.title}`)
  increment.appendChild(text1);
  titleSpot.appendChild(text2);
}

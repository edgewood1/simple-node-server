
let value;


async function hello(x){
  const value = document.querySelector('[type="text"]').value;
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
  const titleSpot = document.getElementById('title');
  const increment = document.getElementById('increment');
  const text1 = document.createTextNode(title.inc)
  const text2 = document.createTextNode(title.resp.title)
  // x.innerHTML = title.title;
  increment.appendChild(text1);
  titleSpot.appendChild(text2);

}

 

const template = document.createElement('template');
 
template.innerHTML = `
  <style>
 #border {
   border: 1px solid black;
 }
 #wrapper {
   display: flex;
    height: 30px;
    display: flex;
    justify-content: center;
    box-shadow: 2px 2px 2px gray;
    align-items: center;
    border-radius: 3%;
 }
 svg {
   height: 30px;
   width: 30px;
 }

  </style>
 <div id = "wrapper">

  <input type="submit" onclick="hello(event)">
  <input type="text" ></input>
  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg> 
  </svg>
</div>
 

 
`;
// <input type="submit" onclick="hello(event)">
// <p> Enter a number 1-100 </p>
// <div id='border'>
// <div> Results
// <div id="title">Title: </div>
// <div id="increment">Increment: </div>
// </div>

class Button extends HTMLElement {
  constructor() {
    super();
 
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$button = this._shadowRoot.querySelector('button');
  }
 
  static get observedAttributes() {
    return ['label'];
  }
 
  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
 
    this.render();
  }
 
  render() {
    this.$button.innerHTML = this.label;
  }

}
 
window.customElements.define('my-button', Button);





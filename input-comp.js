 

const template = document.createElement('template');
 
template.innerHTML = `
  <style>
 
  </style>
 
<p> Enter a number 1-100 </p>
<input type="text" ></input>
<input type="submit" onclick="hello(event)">
<p>-</p>
<div id="title">Title: </div>
 <div id="increment">Increment: </div>

`;

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





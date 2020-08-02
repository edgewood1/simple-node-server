 
    
const template2 = document.createElement('template');
 
template2.innerHTML = `
    <style>
 
    .container {
      display: grid;
      grid-template-columns: 10vw 90vw;
      grid-template-rows: 5vh 85vh 10vh;
 
    }
    .header {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      grid-column: 1 / 2;
      z-index: 88;
      width: 100vw;
      align-items: center;
    }
    .sidebar {
      grid-column: 1
    }

    .content {
      overflow-y: scroll;
    }

    .footer {
      width: 100vw;
      grid-column: 1/2;
    }



    div {
      border: 1px solid black;
    }



    </style>
 


      <div class="container">
        <div class = "header">
          <slot name="header"></slot>
        </div>
          <div class="sidebar">.sidebar</div>
          <div class="content">
            <p>
            Lorem ipsum dolor sit amet... repeat
            enough of these to overflow your browser's viewport.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium numquam sunt ea temporibus quasi. Laborum dolorem voluptate laboriosam quae ad provident animi aliquid cupiditate accusantium, facilis ex quidem ipsum ratione vitae odit iste incidunt fugit culpa, veniam reprehenderit similique quas fugiat rerum. Laborum vero sint animi, illum voluptatum harum fugit excepturi debitis neque facilis voluptates voluptatibus cupiditate laudantium commodi eius suscipit possimus et molestiae quaerat tempore nulla? Tempore alias nostrum exercitationem deserunt libero ea eligendi modi esse, dignissimos quibusdam dolorem quasi quas doloribu 
            lorem 500            Lorem ipsum dolor sit amet... repeat
            enough of these to overflow your browser's viewport.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium numquam sunt ea temporibus quasi. Laborum dolorem voluptate laboriosam quae ad provident animi aliquid cupiditate accusantium, facilis ex quidem ipsum ratione vitae odit iste incidunt fugit culpa, veniam reprehenderit similique quas fugiat rerum. Laborum vero sint animi, illum voluptatum harum fugit excepturi debitis neque facilis voluptates voluptatibus cupiditate laudantium commodi eius suscipit possimus et molestiae quaerat tempore nulla? Tempore alias nostrum exercitationem deserunt libero ea eligendi modi esse, dignissimos quibusdam dolorem quasi quas doloribu 
            lorem 500            Lorem ipsum dolor sit amet... repeat
            enough of these to overflow your browser's viewport.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium numquam sunt ea temporibus quasi. Laborum dolorem voluptate laboriosam quae ad provident animi aliquid cupiditate accusantium, facilis ex quidem ipsum ratione vitae odit iste incidunt fugit culpa, veniam reprehenderit similique quas fugiat rerum. Laborum vero sint animi, illum voluptatum harum fugit excepturi debitis neque facilis voluptates voluptatibus cupiditate laudantium commodi eius suscipit possimus et molestiae quaerat tempore nulla? Tempore alias nostrum exercitationem deserunt libero ea eligendi modi esse, dignissimos quibusdam dolorem quasi quas doloribu 
            lorem 500            Lorem ipsum dolor sit amet... repeat
            enough of these to overflow your browser's viewport.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium numquam sunt ea temporibus quasi. Laborum dolorem voluptate laboriosam quae ad provident animi aliquid cupiditate accusantium, facilis ex quidem ipsum ratione vitae odit iste incidunt fugit culpa, veniam reprehenderit similique quas fugiat rerum. Laborum vero sint animi, illum voluptatum harum fugit excepturi debitis neque facilis voluptates voluptatibus cupiditate laudantium commodi eius suscipit possimus et molestiae quaerat tempore nulla? Tempore alias nostrum exercitationem deserunt libero ea eligendi modi esse, dignissimos quibusdam dolorem quasi quas doloribu 
            lorem 500            Lorem ipsum dolor sit amet... repeat
            enough of these to overflow your browser's viewport.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium numquam sunt ea temporibus quasi. Laborum dolorem voluptate laboriosam quae ad provident animi aliquid cupiditate accusantium, facilis ex quidem ipsum ratione vitae odit iste incidunt fugit culpa, veniam reprehenderit similique quas fugiat rerum. Laborum vero sint animi, illum voluptatum harum fugit excepturi debitis neque facilis voluptates voluptatibus cupiditate laudantium commodi eius suscipit possimus et molestiae quaerat tempore nulla? Tempore alias nostrum exercitationem deserunt libero ea eligendi modi esse, dignissimos quibusdam dolorem quasi quas doloribu 
            lorem 500            Lorem ipsum dolor sit amet... repeat
            enough of these to overflow your browser's viewport.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium numquam sunt ea temporibus quasi. Laborum dolorem voluptate laboriosam quae ad provident animi aliquid cupiditate accusantium, facilis ex quidem ipsum ratione vitae odit iste incidunt fugit culpa, veniam reprehenderit similique quas fugiat rerum. Laborum vero sint animi, illum voluptatum harum fugit excepturi debitis neque facilis voluptates voluptatibus cupiditate laudantium commodi eius suscipit possimus et molestiae quaerat tempore nulla? Tempore alias nostrum exercitationem deserunt libero ea eligendi modi esse, dignissimos quibusdam dolorem quasi quas doloribu 
            lorem 500            Lorem ipsum dolor sit amet... repeat
            enough of these to overflow your browser's viewport.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium numquam sunt ea temporibus quasi. Laborum dolorem voluptate laboriosam quae ad provident animi aliquid cupiditate accusantium, facilis ex quidem ipsum ratione vitae odit iste incidunt fugit culpa, veniam reprehenderit similique quas fugiat rerum. Laborum vero sint animi, illum voluptatum harum fugit excepturi debitis neque facilis voluptates voluptatibus cupiditate laudantium commodi eius suscipit possimus et molestiae quaerat tempore nulla? Tempore alias nostrum exercitationem deserunt libero ea eligendi modi esse, dignissimos quibusdam dolorem quasi quas doloribu 
            lorem 500            Lorem ipsum dolor sit amet... repeat
            enough of these to overflow your browser's viewport.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium numquam sunt ea temporibus quasi. Laborum dolorem voluptate laboriosam quae ad provident animi aliquid cupiditate accusantium, facilis ex quidem ipsum ratione vitae odit iste incidunt fugit culpa, veniam reprehenderit similique quas fugiat rerum. Laborum vero sint animi, illum voluptatum harum fugit excepturi debitis neque facilis voluptates voluptatibus cupiditate laudantium commodi eius suscipit possimus et molestiae quaerat tempore nulla? Tempore alias nostrum exercitationem deserunt libero ea eligendi modi esse, dignissimos quibusdam dolorem quasi quas doloribu 
            lorem 500            Lorem ipsum dolor sit amet... repeat
            enough of these to overflow your browser's viewport.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium numquam sunt ea temporibus quasi. Laborum dolorem voluptate laboriosam quae ad provident animi aliquid cupiditate accusantium, facilis ex quidem ipsum ratione vitae odit iste incidunt fugit culpa, veniam reprehenderit similique quas fugiat rerum. Laborum vero sint animi, illum voluptatum harum fugit excepturi debitis neque facilis voluptates voluptatibus cupiditate laudantium commodi eius suscipit possimus et molestiae quaerat tempore nulla? Tempore alias nostrum exercitationem deserunt libero ea eligendi modi esse, dignissimos quibusdam dolorem quasi quas doloribu 
            lorem 500            Lorem ipsum dolor sit amet... repeat
            enough of these to overflow your browser's viewport.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium numquam sunt ea temporibus quasi. Laborum dolorem voluptate laboriosam quae ad provident animi aliquid cupiditate accusantium, facilis ex quidem ipsum ratione vitae odit iste incidunt fugit culpa, veniam reprehenderit similique quas fugiat rerum. Laborum vero sint animi, illum voluptatum harum fugit excepturi debitis neque facilis voluptates voluptatibus cupiditate laudantium commodi eius suscipit possimus et molestiae quaerat tempore nulla? Tempore alias nostrum exercitationem deserunt libero ea eligendi modi esse, dignissimos quibusdam dolorem quasi quas doloribu 
            lorem 500            Lorem ipsum dolor sit amet... repeat
            enough of these to overflow your browser's viewport.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium numquam sunt ea temporibus quasi. Laborum dolorem voluptate laboriosam quae ad provident animi aliquid cupiditate accusantium, facilis ex quidem ipsum ratione vitae odit iste incidunt fugit culpa, veniam reprehenderit similique quas fugiat rerum. Laborum vero sint animi, illum voluptatum harum fugit excepturi debitis neque facilis voluptates voluptatibus cupiditate laudantium commodi eius suscipit possimus et molestiae quaerat tempore nulla? Tempore alias nostrum exercitationem deserunt libero ea eligendi modi esse, dignissimos quibusdam dolorem quasi quas doloribu 
            lorem 500            Lorem ipsum dolor sit amet... repeat
            enough of these to overflow your browser's viewport.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium numquam sunt ea temporibus quasi. Laborum dolorem voluptate laboriosam quae ad provident animi aliquid cupiditate accusantium, facilis ex quidem ipsum ratione vitae odit iste incidunt fugit culpa, veniam reprehenderit similique quas fugiat rerum. Laborum vero sint animi, illum voluptatum harum fugit excepturi debitis neque facilis voluptates voluptatibus cupiditate laudantium commodi eius suscipit possimus et molestiae quaerat tempore nulla? Tempore alias nostrum exercitationem deserunt libero ea eligendi modi esse, dignissimos quibusdam dolorem quasi quas doloribu 
            lorem 500
            <p>
          </div>
   
        <div class="footer">.footer</div>
      </div>
 
    `;
    class Layout extends HTMLElement {
      constructor() {
        super();
     
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template2.content.cloneNode(true));
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
     
    window.customElements.define('layout-comp', Layout);
    
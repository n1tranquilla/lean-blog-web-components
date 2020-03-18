class HelloWorld extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // creating a container for the editable-list component
        const helloWorld = document.createElement('div');

        // get attribute values from getters
        const name = this.name;

        // adding a class to our container for the sake of clarity
        helloWorld.classList.add('root');

        // creating the inner HTML of the editable list element
        helloWorld.innerHTML = `
        <style>
          #name {
              color: blue;
          }
        </style>
        <span>Hello <span id="name">${name}</span>!</span>
      `;

        // appending the container to the shadow DOM
        shadow.appendChild(helloWorld);
    }

    get name(){
        return this.getAttribute('name') || '';
    }
}

customElements.define('bdl-hello-world', HelloWorld);
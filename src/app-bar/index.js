class AppBar extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // creating a container for the editable-list component
        const appBar = document.createElement('div');

        // adding a class to our container for the sake of clarity
        appBar.classList.add('root');

        // creating the inner HTML of the editable list element
        appBar.innerHTML = `
        <style>
           nav {
               width: 100%;
               margin-top: calc(var(--bdl-spacing-unit) * 1rem);

               display: flex;
               justify-content: center;
               align-items: center;

               background-color: grey;
           } 
        </style>
        <nav><slot></slot></nav>
      `;

        // appending the container to the shadow DOM
        shadow.appendChild(appBar);
    }
}

customElements.define('bdl-app-bar', AppBar);
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
               height: 2rem;
               font-family: var(--bdl-primary-font-family);
               margin-top: calc(var(--bdl-spacing-unit) * 1rem);
               margin-bottom: calc(var(--bdl-spacing-unit) * 2rem);
               padding: calc(var(--bdl-spacing-unit) * 1rem);

               display: flex;
               justify-content: center;
               align-items: center;

               background-color: var(--bdl-primary-color-light);
               color: var(--bdl-text-color);
           } 
        </style>
        <nav><slot></slot></nav>
      `;

        // appending the container to the shadow DOM
        shadow.appendChild(appBar);
    }
}

customElements.get('bdl-app-bar') || customElements.define('bdl-app-bar', AppBar);
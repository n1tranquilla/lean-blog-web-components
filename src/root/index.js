class Root extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // creating a container for the editable-list component
        const root = document.createElement('div');

        // adding a class to our container for the sake of clarity
        root.classList.add('root');

        // creating the inner HTML of the editable list element
        root.innerHTML = `
        <style>
            div {
               background-color: var(--bdl-primary-color-main);

               width: 100vw;
               height: 100vh;
               display: flex;
               flex-direction: column;
               align-items: stretch;
           } 
        </style>
        <div><slot></slot></div>
      `;

        // appending the container to the shadow DOM
        shadow.appendChild(root);
    }
}

customElements.get('bdl-root') || customElements.define('bdl-root', Root);
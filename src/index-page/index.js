(function() {

    class IndexPage extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: 'open' });

            // creating a container for the editable-list component
            const indexPage = document.createElement('ul');

            // adding a class to our container for the sake of clarity
            indexPage.classList.add('root');

            const title = this.getAttribute('title') || ''

            // creating the inner HTML of the editable list element
            indexPage.innerHTML = `
                <style>
                    h1 {
                        font-size: 1.5rem;
                        font-family: var(--lbwc-title-font-family);
                    }
                    ul {
                        list-style-type: none;
                        padding-left: 0;
                    }
                </style>
                <h1>${title}</h1>
                <slot></slot>
            `;

            // appending the container to the shadow DOM
            this.shadowRoot.appendChild(indexPage);

            this.titleEl = this.shadowRoot.querySelector('h1');
        }

        get title() {
            return this.getAttribute('title') || ''
        }

        set title(value) {
            this.setAttribute('title',value)
        }

        static get observedAttributes() {
            return ['title'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'title': {
                    this.titleEl.innerHTML = newValue;
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }

    customElements.get('lbwc-index-page') || customElements.define('lbwc-index-page', IndexPage);

})();
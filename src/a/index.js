(function () {

    class Link extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: 'open' });

            // creating a container for the editable-list component
            const a = document.createElement('a');

            // adding a class to our container for the sake of clarity
            a.classList.add('root');

            const href = this.getAttribute("href") || '';

            // creating the inner HTML of the editable list element
            a.innerHTML = `
                <style>
                    a {
                        border-bottom: 2px solid transparent;
                        position: relative;
                    }
                    a:active,a:hover {
                        background-color: var(--lbwc-accent-color);
                        text-decoration: none;
                        border-bottom-color: black;
                        color: black;
                    }
                    a:visited::after {
                        content: 'test';
                        font-size: 1.5rem;
                        position: absolute;
                        right: 1rem;
                    }
                </style>
                <a id="link" href="${href}"><slot></slot></a>
            `;

            // appending the container to the shadow DOM
            this.shadowRoot.appendChild(a);

            this.linkEl = this.shadowRoot.getElementById("link")
        }

        get href() {
            return this.getAttribute('href') || ''
        }

        set href(value) {
            this.setAttribute('href',value);
        }

        static get observedAttributes() {
            return ['href']
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch(name) {
                case "href": {
                    this.linkEl.setAttribute("href",newValue)
                }
                default: {
                    break;
                }
            }
        }
    }

    customElements.get('lbwc-a') || customElements.define('lbwc-a', Link);

})();
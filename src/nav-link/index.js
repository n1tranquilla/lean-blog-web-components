(function () {

    class NavLink extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: 'open' });

            // creating a container for the editable-list component
            const a = document.createElement('div');

            // adding a class to our container for the sake of clarity
            a.classList.add('root');

            const href = this.getAttribute("href") || '';

            // creating the inner HTML of the editable list element
            a.innerHTML = `
                <style>
                    a {
                        font-family: var(--lbwc-nav-font-family);
                        font-size: 0.85rem;
                        margin: calc(var(--lbwc-spacing-unit)*0.25rem);
                        padding: calc(var(--lbwc-spacing-unit)*0.5rem) 0;
                        margin-right: calc(var(--lbwc-spacing-unit)*1rem);
                        color: var(--lbwc-text-color);
                        text-decoration: none;
                        text-transform: capitalize;
                        border-bottom: 2px solid transparent;
                        position: relative;
                    }
                    a:hover {
                        border-bottom: 2px solid var(--lbwc-accent-color);
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

        get fontSize() {
            return this.getAttribute('font-size') || '0.85rem';
        }

        set fontSize(value){
            this.setAttribute('font-size',value);
        }

        static get observedAttributes() {
            return ['href', 'font-size']
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch(name) {
                case "href": {
                    this.linkEl.setAttribute("href",newValue);
                    break;
                }
                case "font-size": {
                    this.linkEl.style["font-size"] = newValue;
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }

    customElements.get('lbwc-nav-link') || customElements.define('lbwc-nav-link', NavLink);

})();
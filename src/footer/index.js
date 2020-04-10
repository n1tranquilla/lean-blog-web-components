(function () {

    class Footer extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: 'open' });

            // creating a container for the editable-list component
            const footer = document.createElement('div');

            // adding a class to our container for the sake of clarity
            footer.classList.add('root');

            const attribution = this.getAttribute("attribution") || '';

            // creating the inner HTML of the editable list element
            footer.innerHTML = `
                <style>
                    footer {
                        width: calc(100% - var(--lbwc-spacing-unit)*2rem);
                        padding: calc(var(--lbwc-spacing-unit)*1rem);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: calc(var(--lbwc-spacing-unit)*3rem);
                        background-color: var(--lbwc-background-accent);
                    }
                    #attribution {
                        font-family: var(--lbwc-body-font-family);
                        font-size: 0.8rem;
                    }
                </style>
                <footer>
                    <span id="attribution">${attribution}</span>
                </footer>
            `;

            // appending the container to the shadow DOM
            this.shadowRoot.appendChild(footer);

            this.attributionEl = this.shadowRoot.getElementById("attribution")
        }

        get attribution() {
            return this.getAttribute('attribution') || ''
        }

        set attribution(value) {
            this.setAttribute('attribution',value);
        }

        static get observedAttributes() {
            return ['attribution']
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch(name) {
                case "attribution": {
                    this.attributionEl.textContent = newValue;
                }
                default: {
                    break;
                }
            }
        }
    }

    customElements.get('lbwc-footer') || customElements.define('lbwc-footer', Footer);

})();
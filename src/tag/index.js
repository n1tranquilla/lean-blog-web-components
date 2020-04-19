(function () {

    class Tag extends HTMLElement {
        
        constructor() {
            super();

            this.attachShadow({ mode: 'open' });

            // creating a container for the editable-list component
            const tag = document.createElement('div');

            // adding a class to our container for the sake of clarity
            tag.classList.add('root');

            const href = this.getAttribute('href') || '';
            const name = this.getAttribute('name') || '';

            // creating the inner HTML of the editable list element
            tag.innerHTML = `
                <style>
                    a {
                        font-size: 0.7rem;
                        padding: 3px 10px;
                        background-color: #f5f5f5;
                        border-radius: 3px;
                        margin-right: 0.5rem;
                        flex-shrink: 0;
                        white-space: nowrap;
                    }
                    a:hover,a:active {
                        background-color: black;
                        color:var(--lbwc-accent-color);
                    }
                </style>
                <a id="tag" href="${href}">${name}</a>
            `;

            // appending the container to the shadow DOM
            this.shadowRoot.appendChild(tag);

            this.tagEl = this.shadowRoot.getElementById("tag");

        }

        get href() {
            return this.getAttribute('href') || '';
        }

        set href(value) {
            this.setAttribute('href', value)
        }

        get name() {
            return this.getAttribute('name') || [];
        }

        set name(value) {
            this.setAttribute('name', value);
        }

        static get observedAttributes() {
            return ['href', 'name'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'href': {
                    this.tagEl.href = newValue;
                    break;
                }
                case 'name': {
                    this.tagEl.innerHTML = newValue;
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }

    customElements.get('lbwc-tag') || customElements.define('lbwc-tag', Tag);

})()
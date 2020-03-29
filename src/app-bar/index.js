(function () {

    const convertNavString = str => {
        return str.split(';')
            .map(pair => pair.split(':'))
            .map(([name,href]) => `<a href="${href}">${name}</a>`)
    }

    class AppBar extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: 'open' });

            // creating a container for the editable-list component
            const appBar = document.createElement('div');

            // adding a class to our container for the sake of clarity
            appBar.classList.add('root');

            const mult = this.getAttribute('mult') || 4;
            const navLinks = this.getAttribute('nav-links') || '';
            const aTags = convertNavString(navLinks);

            this.setNavLinks = this.setNavLinks.bind(this);
            this.updateFromMult = this.updateFromMult.bind(this);

            // creating the inner HTML of the editable list element
            appBar.innerHTML = `
                <style>
                    header {
                        font-family: var(--lbwc-nav-font-family);
                        padding: 0;

                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;

                        background-color: var(--lbwc-primary-color);
                    }
                    nav {
                        height: 100%;
                        display: flex;
                        justify-content: space-between;
                        flex-grow: 1;
                        max-width: ${mult * aTags.length}rem;
                    }
                    #spacer {
                        width: ${mult / 2}rem;
                    }
                    #logo-link {
                        border-bottom: none;
                    }
                    a {
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
                <header>
                    <a id="logo-link" href="/"><slot></slot></a>
                    <div id="spacer"></div>
                    <nav>${aTags.join("")}</nav>
                </header>
            `;

            // appending the container to the shadow DOM
            this.shadowRoot.appendChild(appBar);

            this.nav = this.shadowRoot.querySelector('nav');
            this.logoLink = this.shadowRoot.getElementById('logo-link');
            this.spacer = this.shadowRoot.getElementById('spacer');
        }

        get navLinks() {
            return this.getAttribute('nav-links') || ''
        }

        set navLinks(value) {
            this.setAttribute('nav-links',value);
        }

        get mult() {
            return this.getAttribute('mult') || 5;
        }

        set mult(value) {
            this.setAttribute('mult',value)
        }

        static get observedAttributes() {
            return ['nav-links']
        }

        setNavLinks(str) {
            const navLinks = convertNavString(str);
            this.nav.innerHTML = navLinks.join("");
        }

        updateFromMult() {
            const navLinks = convertNavString(this.navLinks);
            this.nav.setAttribute('style',`max-width: ${this.mult*navLinks.length}rem`);
            this.spacer.setAttribute('style',`width: ${this.mult / 2}rem`);
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'nav-links': {
                    this.setNavLinks(newValue);
                    this.updateFromMult();
                    break;
                }
                case 'mult': {
                    this.updateFromMult();
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }

    customElements.get('lbwc-app-bar') || customElements.define('lbwc-app-bar', AppBar);

})();
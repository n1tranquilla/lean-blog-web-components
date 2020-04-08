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

            const navLinks = this.getAttribute('nav-links') || '';
            const mobile = this.hasAttribute('mobile') || false
            const aTags = convertNavString(navLinks);

            this.setNavLinks = this.setNavLinks.bind(this);

            // creating the inner HTML of the editable list element
            appBar.innerHTML = `
                <style>
                    header {
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
                    }
                    #logo-link {
                        border-bottom: none;
                    }
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
                    .left,.right {
                        flex: 1;
                        flex-basis: 50%;
                        display: flex;
                    }
                    .left {
                        justify-content: ${mobile ? 'center' : 'flex-start'};
                    }
                    .right {
                        justify-content: ${mobile ? 'space-between' : 'flex-end'};
                    }
                </style>
                <header>
                    <div class="left">
                        <a id="logo-link" href="/"><slot></slot></a>
                    </div>
                    <nav class="right">${aTags.join("")}</nav>
                </header>
            `;

            // appending the container to the shadow DOM
            this.shadowRoot.appendChild(appBar);

            this.nav = this.shadowRoot.querySelector('nav');
            this.logoLink = this.shadowRoot.getElementById('logo-link');
            this.leftEl = this.shadowRoot.querySelector('.left');
            this.rightEl = this.shadowRoot.querySelector('.right');
        }

        get navLinks() {
            return this.getAttribute('nav-links') || ''
        }

        set navLinks(value) {
            this.setAttribute('nav-links',value);
        }

        get mobile() {
            return this.hasAttribute('mobile') || false
        }

        set mobile(isMobile) {
            if (isMobile) {
                this.setAttribute('mobile','')
            } else {
                this.removeAttribute('mobile')
            }
        }

        static get observedAttributes() {
            return ['nav-links', 'mobile']
        }

        setNavLinks(str) {
            const navLinks = convertNavString(str);
            this.nav.innerHTML = navLinks.join("");
        }

        setMobile(isMobile) {
            this.mobile(isMobile);
            if (isMobile) {
                this.leftEl.setAttribute('style','justify-content: center');
                this.rightEl.setAttribute('style','justify-content: space-between');
            } else {
                this.leftEl.setAttribute('style','justify-content: flex-start');
                this.rightEl.setAttribute('style','justify-content: flex-end');
            }
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'nav-links': {
                    this.setNavLinks(newValue);
                    break;
                }
                case 'mobile': {
                    this.setMobile(this.hasAttribute('mobile'))
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
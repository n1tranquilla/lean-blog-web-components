(function () {

    class AppBar extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: 'open' });

            // creating a container for the editable-list component
            const appBar = document.createElement('div');

            // adding a class to our container for the sake of clarity
            appBar.classList.add('root');

            const mobile = this.hasAttribute('mobile') || false;

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
                    .left,.right {
                        flex: 1;
                        flex-basis: 50%;
                        display: flex;
                        min-height: calc(var(--lbwc-spacing-unit)*3rem);
                        align-items: center;
                    }
                    .left {
                        justify-content: ${mobile ? 'center' : 'flex-start'};
                    }
                    .right {
                        justify-content: ${mobile ? 'space-around' : 'flex-end'};
                    }
                </style>
                <header>
                    <div class="left">
                        <a id="logo-link" href="/"><slot name="logo"></slot></a>
                    </div>
                    <nav class="right"><slot name="nav-links"></slot></nav>
                </header>
            `;

            // appending the container to the shadow DOM
            this.shadowRoot.appendChild(appBar);

            this.logoLink = this.shadowRoot.getElementById('logo-link');
            this.leftEl = this.shadowRoot.querySelector('.left');
            this.rightEl = this.shadowRoot.querySelector('.right');
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
            return ['mobile']
        }

        setMobile(isMobile) {
            if (isMobile) {
                this.leftEl.setAttribute('style','justify-content: center');
                this.rightEl.setAttribute('style','justify-content: space-around');
            } else {
                this.leftEl.setAttribute('style','justify-content: flex-start');
                this.rightEl.setAttribute('style','justify-content: flex-end');
            }
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
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
class NavLink extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // creating a container for the editable-list component
        const navLink = document.createElement('div');

        // adding a class to our container for the sake of clarity
        navLink.classList.add('root');

        const active = this.hasAttribute('active')

        // creating the inner HTML of the editable list element
        navLink.innerHTML = `
        <style>
            #nav-link {
                color: var(--bdl-text-color);
            }
            #link {
               text-decoration: underline;
               margin-right: calc(var(--bdl-spacing-unit) * 1rem);
            }
        </style>
        <div id="nav-link" class="${active ? "active" : ""}">
            <span id="decoration">#</span><span id="link"><slot></slot></span>
        <div>
      `;

        // appending the container to the shadow DOM
        shadow.appendChild(navLink);
    }

    get active(){
        return this.hasAttribute('active') || false
    }

    static get observedAttributes() {
        return ['active']
    }

    attributeChangedCallback(name) {
        switch(name){
            case 'active': {
                this.hasAttribute(name)
                    ? this.shadowRoot.getElementById("nav-link").classList.add("active")
                    : this.shadowRoot.getElementById("nav-link").classList.remove("active")
                break;
            }
            default:
                break;
        }
    }
}

customElements.get('bdl-nav-link') || customElements.define('bdl-nav-link', NavLink);
class Article extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        // creating a container for the editable-list component
        const article = document.createElement('div');

        // adding a class to our container for the sake of clarity
        article.classList.add('root');

        const title = this.getAttribute('title') || '';
        const date = this.getAttribute('date') || ''

        // creating the inner HTML of the editable list element
        article.innerHTML = `
        <style>
            article {
                color: var(--lbwc-text-color);
            }
            #article-header {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                flex-wrap: wrap;
            }
            h1 {
                font-family: var(--lbwc-title-font-family);
            }
            span {
                opacity: 0.75;
                font-size: 0.7rem;
            }
        </style>
        <article>
            <div id="article-header">
                <h1>${title}</h1>
                <span>${date}</span>
            </div>
            <slot></slot>
        </article>
      `;

        // appending the container to the shadow DOM
        this.shadowRoot.appendChild(article);

        this.titleEl = this.shadowRoot.getElementById("article-header").children[0];
        this.dateEl = this.shadowRoot.getElementById("article-header").children[1];
    }

    get title(){
        return this.getAttribute('title') || '';
    }

    set title(value) {
        this.setAttribute('title',value)
    }

    get date() {
        return this.getAttribute('date') || ''
    }

    set date(value) {
        this.setAttribute('date',value)
    }

    static get observedAttributes() {
        return ['title', 'date'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'title': {
                this.titleEl.innerHTML = newValue;
                break;
            }
            case 'date': {
                this.dateEl.innerHTML = newValue;
                break;
            }
            default: {
                break;
            }
        }
    }
}

customElements.get('lbwc-article') || customElements.define('lbwc-article', Article);
class Article extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

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
                max-width: 600px;
                color: var(--bdl-text-color);
            }
            #article-header {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                flex-wrap: wrap;
            }
            h1 {
                font-family: var(--bdl-title-font-family);
            }
            span {
                opacity: 0.5;
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
        shadow.appendChild(article);
    }
}

customElements.get('bdl-article') || customElements.define('bdl-article', Article);
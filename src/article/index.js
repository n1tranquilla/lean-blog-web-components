(function () {

    const convertTags = str =>str.split(';;')
        .filter(s=>s.trim().length>0)
        .map(row => {
            const entries = row.split(';')
            return entries.reduce((agg,entry)=>{
                const [key,value] = entry.split(':')
                agg[key] = value;
                return agg;
            },{})
        })        

    const createTagsHtml = t=>`<a class="tag" href="${t.href}">${t.name}</a>`

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
            const tags = convertTags(this.getAttribute('tags') || '');

            // creating the inner HTML of the editable list element
            article.innerHTML = `
                <style>
                    article {
                        color: var(--lbwc-text-color);
                    }
                    #article-header {
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: baseline;
                        flex-wrap: wrap;
                    }
                    #article-subheader {
                        width: 100%;
                        display:flex;
                        justify-content: space-between;
                        align-items: baseline;
                    }
                    h1 {
                        font-family: var(--lbwc-title-font-family);
                    }
                    #date {
                        color: #B5B5B5;
                        font-size: 0.7rem;
                    }
                    a {
                        font-size: 0.7rem;
                        padding: 3px 10px;
                        background-color: #f5f5f5;
                        border-radius: 3px;
                        margin: 0 0.25rem;
                    }
                    a:hover,a:active {
                        background-color: black;
                        color:var(--lbwc-accent-color);
                    }
                </style>
                <article>
                    <div id="article-header">
                        <h1>${title}</h1>
                    </div>
                    <div id="article-subheader">
                        <span id="date">${date}</span>
                        <span>${tags.map(createTagsHtml).join('')}</span>
                    </div>
                    <slot></slot>
                </article>
                `;

            // appending the container to the shadow DOM
            this.shadowRoot.appendChild(article);

            this.titleEl = this.shadowRoot.getElementById("article-header").children[0];
            this.dateEl = this.shadowRoot.getElementById("article-subheader").children[0];
            this.tagsEl = this.shadowRoot.getElementById("article-subheader").children[1];

        }

        get title() {
            return this.getAttribute('title') || '';
        }

        set title(value) {
            this.setAttribute('title', value)
        }

        get tags() {
            return this.getAttribute('tags') || [];
        }

        set tags(value) {
            this.setAttribute('tags', value);
        }

        get date() {
            return this.getAttribute('date') || ''
        }

        set date(value) {
            this.setAttribute('date', value)
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
                case 'tags': {
                    const tags = convertTags(newValue);
                    this.tagsEl.innerHTML = tags.map(createTagsHtml);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }

    customElements.get('lbwc-article') || customElements.define('lbwc-article', Article);

})()
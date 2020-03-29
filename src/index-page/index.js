(function() {

    const convertPosts = (str) => {
        return str.split(';;')
            .filter(str=>str.length>0)
            .reduce((agg,postStr)=>{
                const post={}
                const entries = postStr.split(';');
                entries.forEach(entry => {
                    const [key,value] = entry.split(':');
                    post[key] = value
                })
                agg.push(post)
                return agg;
            },[])
    }

    const createLiHtml = meta => {
        return `<li>
            <a href="${meta.href}">${meta.title}</a>
            <div class="meta">
                <span class="date">${meta.date}</span>
                ${meta.teaser ? `<i class="description">${meta.teaser}</i>` : ""}
            </div>
        </li>`
    
    }

    class IndexPage extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: 'open' });

            // creating a container for the editable-list component
            const indexPage = document.createElement('div');

            // adding a class to our container for the sake of clarity
            indexPage.classList.add('root');

            const title = this.getAttribute('title') || ''
            const postsAttr = this.getAttribute('posts') || ''
            const posts = convertPosts(postsAttr);

            // creating the inner HTML of the editable list element
            indexPage.innerHTML = `
                <style>
                    h1 {
                        font-size: 1.5rem;
                        font-family: var(--lbwc-title-font-family);
                    }
                    ul {
                        list-style-type: none;
                        padding-left: 0;
                    }
                    li {
                        margin: calc(var(--lbwc-spacing-unit)*0.5rem) 0;
                    }
                    a {
                        font-family: var(--lbwc-title-font-family);
                        text-decoration: none;
                    }
                    a:hover{
                        text-decoration: underline;
                    }
                    .meta {
                        opacity: 0.75;
                        font-size: 0.7rem;
                    }
                    .description {
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        width: 100%;
                        max-width: 400px;
                        display: block;
                        overflow: hidden;
                    }
                </style>
                <h1>${title}</h1>
                <ul>
                    ${posts.map(createLiHtml).join('')}
                <ul>
            `;

            // appending the container to the shadow DOM
            this.shadowRoot.appendChild(indexPage);

            this.appendPosts = this.appendPosts.bind(this);
            this.ulEl = this.shadowRoot.querySelector('ul');
            this.titleEl = this.shadowRoot.querySelector('h1');
        }

        get posts() {
            return this.getAttribute('posts') || [];
        }

        set posts(value) {
            this.setAttribute('posts',value)
        }

        get title() {
            return this.getAttribute('title') || ''
        }

        set title(value) {
            this.setAttribute('title',value)
        }

        static get observedAttributes() {
            return ['title','posts'];
        }

        appendPosts(str) {
            const posts = convertPosts(str);
            this.ulEl.innerHTML = posts.map(createLiHtml).join('')
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'title': {
                    this.titleEl.innerHTML = newValue;
                    break;
                }
                case 'posts': {
                    this.appendPosts(newValue);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }

    customElements.get('lbwc-index-page') || customElements.define('lbwc-index-page', IndexPage);

})();
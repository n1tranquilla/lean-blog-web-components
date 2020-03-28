class IndexPage extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // creating a container for the editable-list component
        const indexPage = document.createElement('div');

        // adding a class to our container for the sake of clarity
        indexPage.classList.add('root');

        const title = this.getAttribute('title') || ''
        const postsAttr = this.getAttribute('posts') || ''
        const postsStrArr = postsAttr.split(';;').filter(str=>str.length>0) || []
        const posts = postsStrArr.reduce((agg,postStr)=>{
            const post={}
            const entries = postStr.split(';');
            entries.forEach(entry => {
                const [key,value] = entry.split(':');
                post[key] = value
            })
            agg.push(post)
            return agg;
        },[])

        // creating the inner HTML of the editable list element
        indexPage.innerHTML = `
        <style>
            h1 {
                font-family: var(--lbwc-title-font-family);
            }
            ul {
                list-style-type: circle;
            }
            li {
                margin: 0.5rem;
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
                padding-left: 0.75rem;
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
            ${posts.map(function(meta){
                return `<li>
                    <a href="${meta.href}">${meta.title}</a>
                    <div class="meta">
                        <span class="date">${meta.date}</span>
                        ${meta.teaser ? `<i class="description">${meta.teaser}</i>` : ""}
                    </div>
                </li>`
            }).join('')}
        <ul>
      `;

        // appending the container to the shadow DOM
        shadow.appendChild(indexPage);
    }

    get posts() {
        return this.getAttribute('posts') || [];
    }
}

customElements.get('lbwc-index-page') || customElements.define('lbwc-index-page', IndexPage);
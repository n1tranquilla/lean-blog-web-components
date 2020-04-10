(function() {

    class ListEntry extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: 'open' });

            // creating a container for the editable-list component
            const listEntry = document.createElement('li');

            // adding a class to our container for the sake of clarity
            listEntry.classList.add('root');

            const title = this.getAttribute('title') || '';
            const href = this.getAttribute('href') || '';
            const date = this.getAttribute('date') || '';
            const teaser = this.getAttribute('teaser');

            // creating the inner HTML of the editable list element
            listEntry.innerHTML = `
                <style>
                    li {
                        margin: calc(var(--lbwc-spacing-unit)*0.5rem) 0;
                        padding: 0.25rem;
                        margin: 0.25rem 0;
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
                    #tags{
                        display: flex;
                    }
                    #tags > * {
                        margin-right: 1rem;
                    }
                </style>
                <lbwc-a id="link" href="${href}">${title}</lbwc-a>
                <div id="date" class="meta">${date}</div>
                <div id="teaser" class="meta">${teaser}</div>
                <div id="tags"><slot></slot></div>
                </div>
            `;

            // appending the container to the shadow DOM
            this.shadowRoot.appendChild(listEntry);

            this.linkEl = this.shadowRoot.getElementById("link");
            this.dateEl = this.shadowRoot.getElementById("date");
            this.teaserEl = this.shadowRoot.getElementById("teaser");
        }

        get title() {
            return this.getAttribute('title') || '';
        }

        set title(value) {
            this.setAttribute('title',value)
        }

        get href() {
            return this.getAttribute('href') || '';
        }

        set href(value) {
            this.setAttribute('href',value)
        }

        get date() {
            return this.getAttribute('date') || '';
        }

        set date(value) {
            this.setAttribute('date',value)
        }

        get teaser() {
            return this.getAttribute('teaser') || '';
        }

        set teaser(value) {
            this.setAttribute('teaser',value)
        }

        static get observedAttributes() {
            return ['href','date','title','teaser'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'title': {
                    this.linkEl.innerHTML = newValue;
                    break;
                }
                case 'href': {
                    this.linkEl.href = newValue;
                    break;
                }
                case 'date': {
                    this.dateEl.innerHTML = newValue
                    break;
                }
                case 'teaser': {
                    this.teaserEl.innerHTML = newValue==='undefined' ? '' : newValue
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }

    customElements.get('lbwc-list-entry') || customElements.define('lbwc-list-entry', ListEntry);

})();
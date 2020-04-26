(function () {

    class ImgBlock extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: 'open' });

            // creating a container for the editable-list component
            const div = document.createElement('div');

            // adding a class to our container for the sake of clarity
            div.classList.add('root');

            const src = this.getAttribute("src") || '';
            const height = this.getAttribute('height') || 0;
            const width = this.getAttribute('width') || 0;

            // creating the inner HTML of the editable list element
            div.innerHTML = `
                <style>
                    #container {
                        display: flex; 
                        flex-direction: column;
                        justify-content: center; 
                        align-items: center;
                        width: 100%; 
                        padding: 1rem 0; 
                        background-color: var(--lbwc-background-accent-color,#f5f5f5); 
                        margin: 1rem 0;
                    }
                    #caption {
                        margin: 0.5rem 0;
                        font-size: 0.75rem;
                        font-family: var(--lbwc-caption-font-family);
                        max-width: ${width}px;
                    }
                </style>
                <div id="container">
                    <img id="img" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                        data-src="${src}" height="${height}" width="${width}">
                    <span id="caption"><slot></slot><span>
                </div>
            `;

            // appending the container to the shadow DOM
            this.shadowRoot.appendChild(div);

            this.imgEl = this.shadowRoot.getElementById("img")
            this.captionEl = this.shadowRoot.getElementById("caption")
        }

        get src() {
            return this.getAttribute('data-src') || ''
        }

        set src(value) {
            this.setAttribute('data-src', value);
        }

        get height() {
            return this.getAttribute('height') || ''
        }

        set height(value) {
            this.setAttribute('height', value);
        }

        get width() {
            return this.getAttribute('width') || ''
        }

        set width(value) {
            this.setAttribute('width', value);
        }

        static get observedAttributes() {
            return ['src','height','width']
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case "src": {
                    this.imgEl.setAttribute("data-src", newValue)
                }
                case "height": {
                    this.imgEl.setAttribute("height", newValue)
                }
                case "width": {
                    this.imgEl.setAttribute("width", newValue)
                    this.captionEl.setAttribute("style",`max-width: ${newValue}px`);
                }
                default: {
                    break;
                }
            }
        }

        connectedCallback() {
            if (IntersectionObserver){
                this.imageObserver = new IntersectionObserver((entries, imgObserver) => {
                    entries.forEach((entry) => {
                        if(entry.isIntersecting) {
                            const lazyImage = entry.target
                            lazyImage.src = lazyImage.dataset.src
                        }
                    })
                });
                this.imageObserver.observe(this.imgEl);
            } else {
                this.imgEl.setAttribute("src",this.imgEl.getAttribute("data-src"))
            } 
        }

        disconnectedCallback(){
            if(this.imageObserver){
                this.imageObserver.disconnect();
            }
        }
    }

    customElements.get('lbwc-img-block') || customElements.define('lbwc-img-block', ImgBlock);

})();
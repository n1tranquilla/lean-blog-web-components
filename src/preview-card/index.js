class PreviewCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // creating a container for the editable-list component
        const previewCard = document.createElement('div');

        // adding a class to our container for the sake of clarity
        previewCard.classList.add('root');

        const title = this.getAttribute('title');
        const text = this.getAttribute('text');
        const timestamp = this.getAttribute('timestamp')

        // creating the inner HTML of the editable list element
        previewCard.innerHTML = `
        <style>
            #preview-card-container {
                padding: 0 calc(var(--bdl-spacing-unit) * 4rem);
                display: flex;
                flex-direction: column;
                align-items: stretch;
                overflow-y:hidden;
                color: var(--bdl-text-color);
            }
            #preview-card {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items:stretch;
            }
            #row1 {
                margin-bottom: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: baseline;
            }
            #title {
                font-family: var(--bdl-primary-font-family);
                font-size: 125%;
            }
            #timestamp {
                font-family: var(--bdl-teriary-font-family);
                color: var(--bdl-primary-color-light);
            }
            #row2 {
                font-family: var(--bdl-secondary-font-family);
            }
            #preview-card:before {
                content: '# # # # # # # # # # # # # # # # # #';
                white-space: pre;
                position: absolute;
                top: -1rem;
                left: -2rem;
                transform: rotate(90deg);
                transform-origin: bottom left;
                color: var(--bdl-text-color);
            }
        </style>
        <div id="preview-card-container">
            <div id="preview-card">
                <div id="row1">
                    <span id="title">${title}</span>
                    <span id="timestamp">${timestamp}</span>
                </div>
                <div id="row2">${text}</div>
            </div>
        <div>
      `;

        // appending the container to the shadow DOM
        shadow.appendChild(previewCard);
    }

    get title(){
        this.getAttribute('title') || '';
    }

    get text(){
        this.getAttribute('text') || '';
    }

    get timestamp(){
        this.getAttribute('timestamp') || '';
    }

    static get observedAttributes() {
        return ['text','title','timestamp']
    }
}

customElements.get('bdl-preview-card') || customElements.define('bdl-preview-card', PreviewCard);
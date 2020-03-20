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

        // creating the inner HTML of the editable list element
        previewCard.innerHTML = `
        <style>
            #preview-card-container {
                margin: 0 calc(var(--bdl-spacing-unit) * 2rem);
                padding: 0 calc(var(--bdl-spacing-unit) * 2rem);
                display: flex;
                flex-direction: column;
                align-items: stretch;
                overflow-y:hidden;
                position:relative;
                color: var(--bdl-text-color);
            }
            #preview-card {
                display: flex;
                flex-direction: column;
                align-items:stretch;
            }
            #preview-card span {
                font-size: 125%;
                margin-bottom: 1rem;
            }
            #preview-card:before {
                content: '#####################################';
                position: absolute;
                top: -50%;
                left: 0;
                transform: rotate(90deg);
                transform-origin: bottom left;
                color: var(--bdl-text-color);
            }
            #preview-card-container:hover #preview-card:before {
                color: var(--bdl-accent-color-main);
            }
        </style>
        <div id="preview-card-container">
            <div id="preview-card">
                <span>${title}</span>
                <div>${text}</div>
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

    static get observedAttributes() {
        return ['text','title']
    }
}

customElements.get('bdl-preview-card') || customElements.define('bdl-preview-card', PreviewCard);
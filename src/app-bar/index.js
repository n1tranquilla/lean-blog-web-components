class AppBar extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // creating a container for the editable-list component
        const appBar = document.createElement('div');

        // adding a class to our container for the sake of clarity
        appBar.classList.add('root');

        const navLinks = this.getAttribute('nav-links') || '';
        const mult = this.getAttribute('mult') || 5

        const linkStrings = navLinks.split(';') || [];

        const linkPairs = linkStrings.map(function(str){ return str.split(':'); })
        
        const aTags = linkPairs.map(function(pair){
            return `<a href="${pair[1]}">${pair[0]}</a>`
        })

        // creating the inner HTML of the editable list element
        appBar.innerHTML = `
        <style>
           nav {
               font-family: var(--bdl-primary-font-family);
               padding: calc(var(--bdl-spacing-unit) * 1rem);

               display: flex;
               justify-content: space-between;
               align-items: center;
               flex-wrap: wrap;

               background-color: var(--bdl-primary-color);
           }
           #links {
               height: 100%;
               display: flex;
               justify-content: space-between;
               flex-grow: 1;
               max-width: ${mult*linkPairs.length}rem;
            }
            #spacer {
                width: ${mult/2}rem;
            }
            #logo-link {
                border-bottom: none;
            }
            a {
               margin: 0.25rem;
               padding: 0.25rem;
               padding-left: 0.75rem;
               color: var(--bdl-text-color);
               text-decoration: none;
               text-transform: capitalize;
               border-bottom: 2px solid transparent;
               position: relative;
            }
            a:hover {
                border-bottom: 2px solid var(--bdl-accent-color);
            }
            a:active:before {
                content: "〉";
                color: var(--bdl-accent-color);
                position: absolute;
                left: -0.5rem;
                top:0;
                font-weigh: bold;
            } 
        </style>
        <nav>
           <a id="logo-link" href="${linkPairs[0][1]}"><slot></slot></a>
           <div id="spacer"></div>
           <div id="links">${aTags.join('')}</div>
        </nav>
      `;

        // appending the container to the shadow DOM
        shadow.appendChild(appBar);
    }
}

customElements.get('bdl-app-bar') || customElements.define('bdl-app-bar', AppBar);
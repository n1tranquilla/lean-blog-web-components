# lean-blog-web-components

Contains all components needed to build a blog with a sufficiently simple (lean) design implemenation.

## Get Started
- install `npm install`
- view components demo: `npm run storybook`

## Core concepts

### Web Components
Components are developed and exported as [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components). Components can be used in any modern framework so long as javascript is enabled in the browser.

### Convention
Web Components are named using the `lbwc-` prefix to avoid possible naming collision in the browser. 

## Development
Components are added to the [src](https://github.com/n1tranquilla/lean-blog-web-components/tree/master/src) folder.
Components are added to [stories](https://github.com/n1tranquilla/lean-blog-web-components/blob/master/stories/index.stories.js) file for demoing.

## Use
Components need only be imported to be used.

### Weback:
```javascript
import 'lean-blog-web-components/src/app-bar'
```
and in the browser
```html
<lbwc-app-bar ...></lbwc-app-bar>
```

## API
For detailed instructions on how to use the components, see component [API](https://github.com/n1tranquilla/lean-blog-web-components/blob/master/src/API.md)

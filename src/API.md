# API

## nav-link
### props

- **font-size**: _(string, optional)_ Pixel, rem, em, anything you want. _eg: font-size="1rem"_
- **href**: _(string, required)_ link href. _eg: href="/home"_
- **slot**: _(string, required)_ must equal "nav-links" when used with _<lbwc-app-bar/>_. 

### example
```html
<lbwc-nav-link slot="nav-links" font-size="1rem" href="/home">Home</lbwc-nav-link>
```

### integration
```html
<lbwc-app-bar ...>
   ...
   <lbwc-nav-link slot="nav-links" href="/home">Home</lbwc-nav-link>
   <lbwc-nav-link slot="nav-links" href="/about">About</lbwc-nav-link>
</lbwc-app-bar>
```

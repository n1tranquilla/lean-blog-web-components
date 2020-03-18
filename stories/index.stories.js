import '../src/blog-dl.css'
import '../src/hello-world'
import '../src/app-bar'

export default {
  title: 'Components',
};

export const HelloWorld = () => {
  return `<bdl-hello-world name="Nathan"></bdl-hello-world>`
}

export const AppBar = () => {
  return `<bdl-app-bar>Test</bdl-app-bar>`
}

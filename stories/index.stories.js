import '../src/blog-dl.css'
import '../src/hello-world'
import '../src/app-bar'
import '../src/root'
import '../src/nav-link'

export default {
  title: 'Components',
};

const root = content => `<bdl-root>${content}</bdl-root>`
const navLink = text => `<bdl-nav-link>${text}</bdl-nav-link>`

// export const HelloWorld = () => {
//   return `<bdl-hello-world name="Nathan"></bdl-hello-world>`
// }

export const AppBar = () => {
  return `<bdl-root>
    <bdl-app-bar>
      ${navLink('Home')}
      ${navLink('Reviews')}
      ${navLink('Blog')}
      <bdl-nav-link active>Other</bdl-nav-link>
    </bdl-app-bar>
  </bdl-root>`
}

export const NavLink = () => {
  return root(`
    <bdl-nav-link>Test</bdl-nav-link>
    <bdl-nav-link active>Test</bdl-nav-link>
  `)
}

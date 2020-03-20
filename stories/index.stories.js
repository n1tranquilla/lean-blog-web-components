import '../src/blog-dl.css'
import '../src/hello-world'
import '../src/app-bar'
import '../src/root'
import '../src/nav-link'
import '../src/preview-card'

export default {
  title: 'Components',
};

const root = content => `<bdl-root><div style="margin-top: 12px">${content}<div></bdl-root>`
const navLink = text => `<bdl-nav-link>${text}</bdl-nav-link>`

// export const HelloWorld = () => {
//   return `<bdl-hello-world name="Nathan"></bdl-hello-world>`
// }
const text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const title="Lorem Ipsum is simply dummy"

export const AppBar = () => {
  return `<bdl-root>
    <bdl-app-bar>
      ${navLink('Home')}
      ${navLink('Reviews')}
      ${navLink('Blog')}
    </bdl-app-bar>
    <bdl-preview-card title="${title}" text="${text}"></bdl-preview-card>
  </bdl-root>`
}

export const NavLink = () => {
  return root(`
    <bdl-nav-link>Test</bdl-nav-link>
    <bdl-nav-link active>Test</bdl-nav-link>
  `)
}

export const PreviewCard = () => {
  return root(`<bdl-preview-card title="${title}" text="${text}"></bdl-preview-card>`)
}

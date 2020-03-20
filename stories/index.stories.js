import '../src/blog-dl.css'
import '../src/hello-world'
import '../src/app-bar'
import '../src/root'
import '../src/nav-link'
import '../src/preview-card'

export default {
  title: 'Components',
};

const root = content => `<bdl-root>${content}</bdl-root>`
const appBar = (...links) => {
  return `<bdl-app-bar>${links}</bdl-app-bar>`
}
const navLink = text => `<bdl-nav-link>${text}</bdl-nav-link>`
const previewCard = (title,text,timestamp) => `<bdl-preview-card title="${title}" text="${text}" timestamp="${timestamp}"></bdl-preview-card>`

const text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const title="Lorem Ipsum is simply dummy"

export const IndexPage = () => {
  const navLinks = navLink('Home')+navLink('Blog')+navLink('Other')
  const content = appBar(navLinks)+previewCard(title,text,"2019-01-01")
  return root(content)
}

export const AppBar = () => {
  return appBar();
}

export const NavLink = () => {
  return root(`
    <bdl-nav-link>Test</bdl-nav-link>
    <bdl-nav-link active>Test</bdl-nav-link>
  `)
}

export const PreviewCard = () => {
  return root(`<bdl-preview-card title="${title}" text="${text}" timestamp="2019-01-01"></bdl-preview-card>`)
}

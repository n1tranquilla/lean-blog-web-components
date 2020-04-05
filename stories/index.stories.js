import '../src/lean-blog-web-components.css'
import '../src/app-bar'
import '../src/article'
import '../src/index-page'
import '../src/footer'
import logo from '../assets/logo2.png'

export default {
  title: 'Components',
};

export const NavBar = () => {
  return `<lbwc-app-bar 
    mult=4
    nav-links="home:/index.html;about:/about.html;review:/review.html;contact:/contact.html">
    <img src="${logo}" height="22" width="210" style="padding-top: 2.5px"/>
  </lbwc-app-bar>`
}

export const Article = () => {
  return `<lbwc-article title="Lorem ipsum mel et ifpum monseret" date="2019-01-01">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit mauris sit amet pulvinar volutpat. Ut sit amet felis orci. Nam euismod, libero at ultrices maximus, nunc urna luctus urna, ut interdum neque lorem ac sapien. Donec maximus, leo sit amet ultricies porta, ante justo vestibulum nulla, vel fermentum arcu lorem in elit. Nam ut ultricies sem. Pellentesque facilisis commodo vestibulum. Sed varius, eros non eleifend rhoncus, lacus arcu tristique neque, id ultricies urna tortor ac est. Ut purus est, ultrices vitae efficitur a, consequat dictum arcu. Suspendisse a nunc arcu. Donec non libero placerat, placerat odio sit amet, consequat metus. Quisque rhoncus est diam, tempus commodo dui tincidunt a. Sed aliquet dictum enim non pretium. Maecenas gravida orci vel lacus laoreet, non aliquam est venenatis. Cras pharetra lacinia orci, a vehicula justo elementum nec.
    </p>
    <p>
    Integer suscipit, ligula id porttitor molestie, libero felis efficitur justo, eu egestas velit mi sed nunc. Donec turpis nisi, pulvinar in lobortis at, varius ut erat. Nunc bibendum ipsum id est viverra lacinia. Pellentesque maximus facilisis ipsum, at porta tellus porta vitae. Aliquam volutpat elit at ante pulvinar posuere. Nunc tristique fermentum felis, quis accumsan felis. Cras dapibus mollis tortor a imperdiet. Aenean lobortis accumsan est et ultricies. Vivamus rhoncus quis enim at tempus. Proin lobortis ipsum id felis tempor, id tincidunt nisi efficitur. Aenean tincidunt nulla non ligula cursus aliquet.
    </p>
    <p>
    Ut non enim in nisl fermentum scelerisque. Suspendisse consectetur semper arcu, eu rhoncus ipsum tincidunt consectetur. Quisque et metus at massa tristique commodo sed non odio. Nunc ut arcu a mauris pretium imperdiet sit amet ac ipsum. Pellentesque id eleifend lectus, non cursus eros. Sed et dui sodales, venenatis felis eleifend, semper metus. Mauris elementum libero quis fermentum fermentum. Praesent ut malesuada mi. Integer facilisis aliquet ante, dictum placerat purus dapibus non. Vestibulum et mattis magna. Fusce sagittis imperdiet dolor, eget ornare velit tempor a. Morbi dui tellus, ultrices ut eleifend in, ultrices lacinia magna. Nullam eleifend hendrerit tincidunt.
    </p>
  </lbwc-article>`
}


const basePage = (content) => {
  return `<div 
    style="padding: 1rem; width: 100%; display: flex; justify-content: center; flex-direction: column; align-items: stretch;">
    ${content}
  </div>`
}

const posts = [
  {title: 'This is a test title', href: '/this-is-my-article.html', date: '2020-01-01', teaser: 'This is a little story about a boy who cried wolf. One day he found himself' },
  {title: 'This is another test', href: '/this-is-my-article.html', date: '2019-11-01' },
  {title: 'This is a test title', href: '/this-is-my-article.html', date: '2019-11-01' },
  {title: 'This is another test', href: '/this-is-my-article.html', date: '2019-09-01' },
  {title: 'This is a test title', href: '/this-is-my-article.html', date: '2019-08-01' },
  {title: 'This is another test', href: '/this-is-my-article.html', date: '2019-07-01' },
  {title: 'This is a test title', href: '/this-is-my-article.html', date: '2019-08-01' },
  {title: 'This is another test', href: '/this-is-my-article.html', date: '2019-05-01' }
]
const postsAttr = posts.reduce((agg,post) => {
  const keys = Object.keys(post)
  keys.forEach(key => {
    agg += `${key}: ${post[key]};`
  })
  agg += ";"
  return agg
},'')

export const IndexPage = () => {
  return `<lbwc-index-page title="Posts" group-by="year" posts="${postsAttr}"></lbwc-index-page>`
}

export const Footer = () => {
  return `<lbwc-footer attribution="nathantranquilla.me © 2020"></lbwc-footer>`
}

export const DemoArticlePage = () => {
  return basePage(NavBar() + Article() + Footer());
}

export const DemoIndexPage = () => {
  return basePage(NavBar() + IndexPage());
}



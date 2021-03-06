import '../src/lean-blog-web-components.css'
import '../src/app-bar'
import '../src/article'
import '../src/index-page'
import '../src/index-page/list-entry'
import '../src/footer'
import '../src/a'
import '../src/img-block'
import '../src/tag'
import '../src/nav-link'

import logo from '../assets/logo2.png'
import img from './img_4.jpeg'

export default {
  title: 'Components',
};

export const Tag = () => {
  return `<lbwc-tag href="/test/test/test" name="blog-tag"></lbwc-tag>`
}

export const NavBar = (mobile=false) => {
  return `<lbwc-app-bar ${mobile===true ? 'mobile' : ''}>
    <img slot="logo" src="${logo}" height="22" width="210" style="padding-top: 2.5px"/>
    <lbwc-nav-link slot="nav-links" href="/home">Home</lbwc-nav-link>
    <lbwc-nav-link slot="nav-links" href="/posts">Posts</lbwc-nav-link>
    <lbwc-nav-link slot="nav-links" href="/reviews">Reviews</lbwc-nav-link>
    <lbwc-nav-link slot="nav-links" href="/about">About</lbwc-nav-link>
  </lbwc-app-bar>`
}

export const Article = () => {
  return `<lbwc-article title="Lorem ipsum mel et ifpum monseret" date="2019-01-01" tags="name:test;href:/test/test/test;;name:test2;href:/test2/test2/test2;;name:religion;href:/test;;name:book reviews:/test;;name:religion;href:/test;;name:book reviews:/test;;name:religion;href:/test;;name:book reviews:/test;;">
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
  {title: 'This is a test title', href: '/this-is-my-article.html', date: '2020-01-01', tags: [`<lbwc-tag href="/test/test/test" name="blog-tag"></lbwc-tag>`,`<lbwc-tag href="/test/test/test" name="reviews"></lbwc-tag>`,`<lbwc-tag href="/test/test/test" name="covid-19"></lbwc-tag>`], teaser: 'This is a little story about a boy who cried wolf. One day he found himself' },
  {title: 'This is another test', href: '/this-is-my-article.html', date: '2019-11-01', tags: [`<lbwc-tag href="/test/test/test" name="blog-tag"></lbwc-tag>`] },
  {title: 'This is a test title', href: '/this-is-my-article.html', date: '2019-11-01', tags:[] },
  {title: 'This is another test', href: '/this-is-my-article.html', date: '2019-09-01', tags:[] },
  {title: 'This is a test title', href: '/this-is-my-article.html', date: '2019-08-01', tags:[] },
  {title: 'This is another test', href: '/this-is-my-article.html', date: '2019-07-01', tags:[] },
  {title: 'This is a test title', href: '/this-is-my-article.html', date: '2019-08-01', tags:[] },
  {title: 'This is another test', href: '/this-is-my-article.html', date: '2019-05-01', tags:[] }
]


export const IndexPage = () => {
  return `<lbwc-index-page 
    title="Posts">
    ${posts.map(p=>`<lbwc-list-entry href="${p.href}" title="${p.title}" date="${p.date}" teaser="${p.teaser}">${p.tags.join('')}</lbwc-list-entry>`).join('')}
  </lbwc-index-page>`
}

export const Footer = () => {
  return `<lbwc-footer attribution="nathantranquilla.me © 2020"></lbwc-footer>`
}

export const Link = () => {
  return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. <lbwc-a href="http://localhost:6006/?path=/story/components--link">Quisque turpis</lbwc-a> nunc, efficitur non tempor ac, eleifend et metus. Praesent at.`
}

export const ImgBlock = () => {
  return `scroll to lazy load image...<div style="padding-top: 100vh;">
  <lbwc-img-block src="${img}" height="500" width="350"></lbwc-img-block>
  <lbwc-img-block src="${img}" height="500" width="350">This is pic of us with masks on!! Making this caption even longer to see what happens</lbwc-img-block>
  </div>`
}

export const DemoArticlePage = () => {
  return basePage(NavBar() + Article() + Footer());
}

export const DemoIndexPage = () => {
  return basePage(NavBar() + IndexPage());
}

export const MobileNavBar = () => {
  return NavBar(true)
}



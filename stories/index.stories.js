import '../src/blog-dl.css'
import '../src/app-bar'
import '../src/article'
import logo from '../assets/logo2.png'

export default {
  title: 'Components',
};

export const NavBar = () => {
  return `<bdl-app-bar 
    mult=5
    nav-links="home:/index.html;about:/about.html;review:/review.html;contact:/contact.html">
    <img src="${logo}" height="22" width="210" style="padding-top: 2.5px"/>
  </bdl-app-bar>`
}

export const Article = () => {
  return `<bdl-article title="Lorem ipsum mel et ifpum monseret" date="2019-01-01">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit mauris sit amet pulvinar volutpat. Ut sit amet felis orci. Nam euismod, libero at ultrices maximus, nunc urna luctus urna, ut interdum neque lorem ac sapien. Donec maximus, leo sit amet ultricies porta, ante justo vestibulum nulla, vel fermentum arcu lorem in elit. Nam ut ultricies sem. Pellentesque facilisis commodo vestibulum. Sed varius, eros non eleifend rhoncus, lacus arcu tristique neque, id ultricies urna tortor ac est. Ut purus est, ultrices vitae efficitur a, consequat dictum arcu. Suspendisse a nunc arcu. Donec non libero placerat, placerat odio sit amet, consequat metus. Quisque rhoncus est diam, tempus commodo dui tincidunt a. Sed aliquet dictum enim non pretium. Maecenas gravida orci vel lacus laoreet, non aliquam est venenatis. Cras pharetra lacinia orci, a vehicula justo elementum nec.
    </p>
    <p>
    Integer suscipit, ligula id porttitor molestie, libero felis efficitur justo, eu egestas velit mi sed nunc. Donec turpis nisi, pulvinar in lobortis at, varius ut erat. Nunc bibendum ipsum id est viverra lacinia. Pellentesque maximus facilisis ipsum, at porta tellus porta vitae. Aliquam volutpat elit at ante pulvinar posuere. Nunc tristique fermentum felis, quis accumsan felis. Cras dapibus mollis tortor a imperdiet. Aenean lobortis accumsan est et ultricies. Vivamus rhoncus quis enim at tempus. Proin lobortis ipsum id felis tempor, id tincidunt nisi efficitur. Aenean tincidunt nulla non ligula cursus aliquet.
    </p>
    <p>
    Ut non enim in nisl fermentum scelerisque. Suspendisse consectetur semper arcu, eu rhoncus ipsum tincidunt consectetur. Quisque et metus at massa tristique commodo sed non odio. Nunc ut arcu a mauris pretium imperdiet sit amet ac ipsum. Pellentesque id eleifend lectus, non cursus eros. Sed et dui sodales, venenatis felis eleifend, semper metus. Mauris elementum libero quis fermentum fermentum. Praesent ut malesuada mi. Integer facilisis aliquet ante, dictum placerat purus dapibus non. Vestibulum et mattis magna. Fusce sagittis imperdiet dolor, eget ornare velit tempor a. Morbi dui tellus, ultrices ut eleifend in, ultrices lacinia magna. Nullam eleifend hendrerit tincidunt.
    </p>
  </bdl-article>`
}

export const DemoPage = () => {
  return NavBar() + 
  `<div style="width: 100vw; display: flex; justify-content: center; flex-direction: column; align-items: stretch;">${Article()}</div>`
}



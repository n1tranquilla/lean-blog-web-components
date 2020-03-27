import '../src/blog-dl.css'
import '../src/app-bar'
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



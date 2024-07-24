
import React,{useState,  useRef} from 'react'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'
import './Footer.css'
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Footer = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    document.body.classList.add('no-scroll');
  }
  
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    document.body.classList.remove('no-scroll');
  }
  return (
    <div className='footer'>
    <hr/>
      <h1>Ranjithkumar Kulanthaivelusamy</h1>
      <div className='footer-top'>
      <ul ref={menuRef} className='footer-menu'>
        <li onClick={() => setMenu("home")}>
          <AnchorLink className='footer-anchor-link' href='#home'>
            <p>Home</p>
          </AnchorLink>
          {menu === "home" }
        </li>
        <li onClick={() => setMenu("about")}>
          <AnchorLink className='footer-anchor-link' offset={50} href='#about'>
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" }
        </li>
        <li onClick={() => setMenu("services")}>
          <AnchorLink className='footer-anchor-link' offset={50} href='#services'>
            <p>Services</p>
          </AnchorLink>
          {menu === "services" }
        </li>
        <li onClick={() => setMenu("work")}>
          <AnchorLink className='footer-anchor-link' offset={50} href='#work'>
            <p>Work</p>
          </AnchorLink>
          {menu === "work" }
        </li>
        <li onClick={() => setMenu("contact")}>
          <AnchorLink className='footer-anchor-link' offset={50} href='#contact'>
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" }
        </li>
      </ul>
      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom-left'>
          <p>© 2024 Ranjithkumar K. All rights reserved.</p>
        </div>
        <div className='footer-bottom-right'>
          <a href="https://github.com/RK1188" target="_blank" rel="noopener noreferrer">
            <FaGithub className='social-icon' />
          </a>
          <a href="https://www.linkedin.com/in/ranjithkumar1188/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='social-icon' />
          </a>
          <a href="https://leetcode.com/u/ranjithrk1188/" target="_blank" rel="noopener noreferrer">
            <FaCode className='social-icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer


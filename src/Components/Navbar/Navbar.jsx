// import React, { useState, useRef } from 'react';
// import './Navbar.css';
// import logo from '../../assets/logo.svg';
// import underline from '../../assets/nav_underline.svg';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import menu_open from '../../assets/menu_open.svg';
// import menu_close from '../../assets/menu_close.svg';

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");
//   const menuRef = useRef();
  
//   const openMenu = () => {
//     menuRef.current.style.right = "0";
//     document.body.classList.add('no-scroll');
//   }
  
//   const closeMenu = () => {
//     menuRef.current.style.right = "-350px";
//     document.body.classList.remove('no-scroll');
//   }

//   return (
//     <div className='navbar'>
//       <img src={logo} alt="Logo" />
//       <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open'/>
//       <ul ref={menuRef} className='nav-menu'>
//         <img src={menu_close} onClick={closeMenu} className="nav-mob-close" alt="Close Menu" />
//         <li onClick={() => setMenu("home")}>
//           <AnchorLink className='anchor-link' href='#home'>
//             <p>Home</p>
//           </AnchorLink>
//           {menu === "home" && <img src={underline} alt='' />}
//         </li>
//         <li onClick={() => setMenu("about")}>
//           <AnchorLink className='anchor-link' offset={50} href='#about'>
//             <p>About Me</p>
//           </AnchorLink>
//           {menu === "about" && <img src={underline} alt='' />}
//         </li>
//         <li onClick={() => setMenu("services")}>
//           <AnchorLink className='anchor-link' offset={50} href='#services'>
//             <p>Services</p>
//           </AnchorLink>
//           {menu === "services" && <img src={underline} alt='' />}
//         </li>
//         <li onClick={() => setMenu("work")}>
//           <AnchorLink className='anchor-link' offset={50} href='#work'>
//             <p>Work</p>
//           </AnchorLink>
//           {menu === "work" && <img src={underline} alt='' />}
//         </li>
//         <li onClick={() => setMenu("contact")}>
//           <AnchorLink className='anchor-link' offset={50} href='#contact'>
//             <p>Contact</p>
//           </AnchorLink>
//           {menu === "contact" && <img src={underline} alt='' />}
//         </li>
//         <div className='nav-connect'>
//         <li onClick={() => setMenu("github")}></li>
//         <a href="https://github.com/RK1188" target="_blank" rel="noopener noreferrer" className='nav-git'>
//         Github Profile
//         </a>
//         {menu === "github"}
//         </div>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
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

  const handleMenuClick = (section) => {
    setMenu(section);
    closeMenu();
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} className="nav-mob-close" alt="Close Menu" />
        <li onClick={() => handleMenuClick("home")}>
          <AnchorLink className='anchor-link' href='#home'>
            <p>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt='' />}
        </li>
        <li onClick={() => handleMenuClick("about")}>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt='' />}
        </li>
        <li onClick={() => handleMenuClick("services")}>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt='' />}
        </li>
        <li onClick={() => handleMenuClick("work")}>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p>Work</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt='' />}
        </li>
        <li onClick={() => handleMenuClick("education")}>
          <AnchorLink className='anchor-link' offset={50} href='#education'>
            <p>Education</p>
          </AnchorLink>
          {menu === "education" && <img src={underline} alt='' />}
        </li>
        <li onClick={() => handleMenuClick("contact")}>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt='' />}
        </li>
        <div className='nav-connect'>
        <li onClick={() => handleMenuClick("github")}></li>
        <a href="https://github.com/RK1188" target="_blank" rel="noopener noreferrer" className='nav-git'>
        Github Profile
        </a>
        {menu === "github"}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;

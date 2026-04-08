import { NavLink } from "react-router-dom"; // react-router-dom er den extension, som gør at man kan referere mellem siderne
import logoimage from '../assets/logo/resurge.svg';
import headerstyles from './header.module.css';

import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleBurgerMenu = () => {
    setIsActive(!isActive);
  };


  return (
    <header style={{backgroundColor: "#383727"}}>
      <nav>
        <div className=
          {`${headerstyles.responsivetopnav} ${
              isActive ? headerstyles.aktiv : ""
            }`}
          >
          <NavLink className={headerstyles.linktext} to="/"><img src={logoimage} alt="Resurge logo" width="100"/></NavLink>
          <button id="btn_burger" onClick={toggleBurgerMenu} className={headerstyles.btn_burger}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <menu>
          {/* <li><NavLink className={headerstyles.linktext} to="/">Forside<span class="header-NavLink-hover-effekt"></span></NavLink></li> */}
          <li>
            <NavLink className={({ isActive }) =>  isActive ? `${headerstyles.linktext} ${headerstyles.aktivfane}` : headerstyles.linktext} to="/">Forside<span className={headerstyles.navhovereffekt}></span></NavLink>
          </li>

          <li>
            <NavLink className={({ isActive }) =>  isActive ? `${headerstyles.linktext} ${headerstyles.aktivfane}` : headerstyles.linktext} to="/ydelser">Ydelser<span className={headerstyles.navhovereffekt}></span></NavLink>
          </li>

          <li>
            <NavLink className={({ isActive }) =>  isActive ? `${headerstyles.linktext} ${headerstyles.aktivfane}` : headerstyles.linktext} to="/blog">Blog<span className={headerstyles.navhovereffekt}></span></NavLink>
          </li>

          <li>
            <NavLink className={({ isActive }) =>  isActive ? `${headerstyles.linktext} ${headerstyles.aktivfane}` : headerstyles.linktext} to="/om-os">Om os<span className={headerstyles.navhovereffekt}></span></NavLink>
          </li>

          <li>
            <NavLink className={({ isActive }) =>  isActive ? `${headerstyles.linktext} ${headerstyles.aktivfane}` : headerstyles.linktext} to="/kontakt">Kontakt<span className={headerstyles.navhovereffekt}></span></NavLink>
          </li>
        </menu>
      </nav>
    </header>
  )
}

//dette er en komponent
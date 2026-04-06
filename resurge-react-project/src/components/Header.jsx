import { Link } from "react-router-dom"; // react-router-dom er den extension, som gør at man kan referere mellem siderne
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
          <Link className={headerstyles.linktext} to="/"><img src={logoimage} alt="Resurge logo" width="100"/></Link>
          <button id="btn_burger" onClick={toggleBurgerMenu} className={headerstyles.btn_burger}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <menu>
          <li><Link className={headerstyles.linktext} to="/">Forside<span class="header-link-hover-effekt"></span></Link></li>
          <li><Link className={headerstyles.linktext} to="/ydelser">Ydelser<span class="header-link-hover-effekt"></span></Link></li>
          <li><Link className={headerstyles.linktext} to="/cases">Cases<span class="header-link-hover-effekt"></span></Link></li>
          <li><Link className={headerstyles.linktext} to="/blog">Blog<span class="header-link-hover-effekt"></span></Link></li>
          <li><Link className={headerstyles.linktext} to="/om-os">Om os<span class="header-link-hover-effekt"></span></Link></li>
          <li><Link className={headerstyles.linktext} to="/kontakt">Kontakt<span class="header-link-hover-effekt"></span></Link></li>
        </menu>
      </nav>
    </header>
  )
}

//dette er en komponent
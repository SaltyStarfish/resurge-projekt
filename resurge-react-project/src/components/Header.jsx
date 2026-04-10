import { NavLink, useLocation } from "react-router-dom"; // react-router-dom er den extension, som gør at man kan referere mellem siderne
import { useState, useEffect } from "react";
import logoimage from '../assets/logo/resurge.svg';
import headerstyles from './header.module.css';


export default function Header() {
  const [isActive, setIsActive] = useState(false); //sætter isActive state til false, så den menuen er lukket fra start

  const toggleBurgerMenu = () => {
    setIsActive(!isActive);
  }; //funktionen, der sætter isActive til true eller false, når den aktiveres af burger-knappen

  const { pathname } = useLocation();

    useEffect(() => {
    setIsActive(false);
  }, [pathname]); //sætter isActive til false, når man skifter side, aka "stien" ændrer sig, hvilken lukker burgermenuen

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
          <li>
            <NavLink className={({ isActive }) =>  isActive ? `${headerstyles.linktext} ${headerstyles.aktivfane}` : headerstyles.linktext} to="/">Forside<span className={headerstyles.navhovereffekt}></span></NavLink>
          </li>

          <li>
            <NavLink className={({ isActive }) =>  isActive ? `${headerstyles.linktext} ${headerstyles.aktivfane}` : headerstyles.linktext} to="/ydelser">Ydelser<span className={headerstyles.navhovereffekt}></span></NavLink>
          </li>

          <li>
            <NavLink className={({ isActive }) =>  isActive ? `${headerstyles.linktext} ${headerstyles.aktivfane}` : headerstyles.linktext} to="/cases">Cases<span className={headerstyles.navhovereffekt}></span></NavLink>
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
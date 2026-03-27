import { Link } from "react-router-dom"; // react-router-dom er den extension, som gør at man kan referere mellem siderne

export default function Header() {

  return (
    <header>
      <nav className="mb-2 bg-gray-200 p-4 rounded">
        <p>
          <Link className="linktext" to="/">Forside</Link> 
          &nbsp; | &nbsp;
          <Link className="linktext" to="/ydelser">Ydelser</Link>
          &nbsp; | &nbsp;
          <Link className="linktext" to="/cases">Cases</Link>
          &nbsp; | &nbsp;
          <Link className="linktext" to="/blog">Blog</Link>
          &nbsp; | &nbsp;
          <Link className="linktext" to="/om-os">Om os</Link>
          &nbsp; | &nbsp;
          <Link className="linktext" to="/kontakt">Kontakt</Link>
        </p>
      </nav>
    </header>
  )
}

//dette er en komponent
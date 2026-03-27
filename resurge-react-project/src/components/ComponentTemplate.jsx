import { Link } from "react-router-dom";

//dette er en komponent
export default function ComponentTemplate() {

  return (
    <div className="m-2 w-100 border py-2 px-4 rounded">
      <p> Denne box er en skabelon, man kan bruge til at oprette components. Ellers kan man bare slette den.</p>

      {/* Tailwind styling */}
      <div className="m-2 w-80 bg-gray-200 py-2 px-4 rounded"> 
        <p> Eksempel på styling med Tailwind</p>
      </div>

      {/* Inline styling */}
      <div style={{margin: "8px", width: "320px", backgroundColor: "lightgray", padding: "8px 16px", borderRadius: "3px"}}> 
        <p> 
          Eksempel på inline-styling
        </p>
      </div>

      {/* Interne links*/}
      <div className="m-2 w-80 bg-gray-100 py-2 px-4 rounded text-blue-700"> 
        <Link to="/kontakt">Eksempel på et internt link (til Kontakt)</Link>
      </div>
    </div>
  )
}

/* 
NOTES:
- HUSK at importere Link øverst på siden, hvis du vil bruge interne links!
- Se hvilke paths, der kan linkes til i App.jsx-filen

- Tailwind cheat sheet:
https://nerdcave.com/tailwind-cheat-sheet
*/

// Husk at importere alle Links og Components, der referes til
import ComponentTemplate from "../components/ComponentTemplate"


function KontaktView() {

  return (
    <>
      {/* Opret sidens indhold herunder som "normal HTML" eller referer til components*/}
      <h1>Kontakt</h1>
      <div>
        </div>
        <form className="flex flex-col">
          <label htmlFor="navn">Navn:</label>
          <input type="text" id="navn" name="navn" required />

          <label htmlFor="telefon">Telefon:</label>
          <input type="text" id="telefon" name="telefon" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="besked">Besked:</label>
          <textarea id="besked" name="besked" rows="4" required></textarea>

          <button type="submit">Send</button>
        </form>
    </>
  )
}

export default KontaktView

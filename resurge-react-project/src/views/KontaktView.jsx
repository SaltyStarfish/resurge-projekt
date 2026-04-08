import { Link } from "react-router-dom";
import CtaKnap from "../components/CtaKnap"

function KontaktView() {

  return (
    <>
      {/* Opret sidens indhold herunder som "normal HTML" eller referer til components*/}
      <h1 className="font-h1 font-medium mb-4">Kontakt os</h1>
      <div className="flex justify-center w-full max-w-lg mx-auto">
        <form className="flex flex-col bg-[#CEBC98] shadow-lg rounded-lg p-8 w-full">
          <h2 className="font-h2 font-medium mb-4">Kontaktformular</h2>
          <label htmlFor="navn" className="text-[#2B2B2B]">Navn:</label>
          <input type="text" id="navn" name="navn" required placeholder="Skriv dit navn her" className="border-2 border-[#722E3C] rounded-md mb-4"
       />

          <label htmlFor="telefon" className="text-[#2B2B2B]">Telefon:</label>
          <input type="text" id="telefon" name="telefon" required placeholder="Hvilket nummer må vi kontakte dig på?" className="border-2 border-[#722E3C] rounded-md mb-4" />

          <label htmlFor="email" className="text-[#2B2B2B]">E-mail:</label>
          <input type="email" id="email" name="email" required placeholder="Skriv din e-mailadresse her" className="border-2 border-[#722E3C] rounded-md mb-4" />

          <label htmlFor="besked" className="text-[#2B2B2B]">Besked:</label>
          <textarea id="besked" name="besked" rows="4" required placeholder="Fortæl os gerne, hvilken ydelse du har brug for. Vi glæder os til at høre fra dig." className="border-2 border-[#722E3C] rounded-md mb-4" ></textarea>
          <div className="max-w-105 mx-auto">
          <CtaKnap>
            <button type="submit" className="py-1 px-6 flex justify-center">Send besked</button>
          </CtaKnap>
          </div>
        </form>
      </div>
    </>
  )
}

export default KontaktView

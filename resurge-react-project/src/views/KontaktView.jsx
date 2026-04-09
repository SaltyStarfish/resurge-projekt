import { useState } from "react";
import { Link } from "react-router-dom";
import CtaKnap from "../components/CtaKnap"

function KontaktView() {

  const [formData, setFormData] = useState({
    navn: "",
    telefon: "",
    email: "",
    besked: "",
  });

  {/* State til popup */ }
  const [popupVisible, setPopupVisible] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    { /* Dataen logges i Console */ }
    console.log("Data indsendt:", formData);

    { /* Funktion til at åbne popup */ }
    setPopupVisible(true);
  }

  return (
    <>
    <div className="w-full-2x mx-auto px-4">
      <h1 className="font-h1 font-medium mb-4">Kontakt os</h1>

      {/*/ infoboks */}
      <div className="bg-[#CEBC98] rounded-lg p-6 mb-6 shadow">
        <h3 className="font-h3 mb-2">Skal vi tage en snak?</h3>
        <p>+45 56 67 78 89</p>
        <p>kontakt@resurge.dk</p>
        <p>Åboulevarden 1, 8000 Aarhus</p>
      </div>

      



        {/*/ kontaktformular */}
        <div className="flex justify-center">
        <form onSubmit={handleSubmit}
         className="flex flex-col bg-[#CEBC98] shadow-lg rounded-lg p-8 w-full">

          <h2 className="font-h2 font-medium mb-4">Kontaktformular</h2>

          <label htmlFor="navn" className="text-[#2B2B2B]">Navn:</label>
          <input 
          type="text"
          name="navn"
          required
          value={formData.navn}
          onChange={handleChange}
          placeholder="Skriv dit navn her" 
          className="border-2 border-[#722E3C] rounded-md mb-4 p-2"
       />

          <label htmlFor="telefon" className="text-[#2B2B2B]">Telefon:</label>
          <input 
          type="text"
          name="telefon" 
          required
          value={formData.telefon}
          onChange={handleChange}
          placeholder="Hvilket nummer må vi kontakte dig på?" 
          className="border-2 border-[#722E3C] rounded-md mb-4 p-2" 
          />

          <label htmlFor="email" className="text-[#2B2B2B]">E-mail:</label>
          <input 
          type="email"
          name="email" 
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Skriv din e-mailadresse her" 
          className="border-2 border-[#722E3C] rounded-md mb-4 p-2" />

          <label htmlFor="besked" className="text-[#2B2B2B]">Besked:</label>
          <textarea 
          name="besked" 
          required 
          value={formData.besked}
          onChange={handleChange}
          placeholder={`Fortæl os gerne, hvilken ydelse du har brug for.\n\nVi glæder os til at høre fra dig`} className="border-2 border-[#722E3C] rounded-md mb-4"
          rows="5"
          />
          
          <div className="max-w-105 mx-auto">
          <CtaKnap>
            <button type="submit" className="py-1 px-6 flex justify-center">Send besked</button>
          </CtaKnap>
          </div> 

        </form>
        </div> 
      </div>


      { /* Popup */ }
      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 pb-20">
          <div className="bg-[#CEBC98] border-2 border-[#722E3C] rounded-xl shadow-lg p-12 relative w-[400px] text-center">

            <p className="font-body font-medium">Tak for din besked! Vi vender tilbage til dig snarest muligt.</p>
            
            <button onClick={() => setPopupVisible(false)} 
            className="absolute top-3 right-3 w-10 h-10 bg-[#383727]/20 border-2 border-[#722E3C] rounded-full text-[#722E3C] flex items-center justify-center text-3xl">
              X
            </button>   
          </div>
        </div>
      )}
    </>
  )
}

export default KontaktView

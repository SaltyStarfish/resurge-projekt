import FiftyFifty from "../components/FiftyFifty";
import Container from "../components/Container";
import placeHolder from "../assets/images/placeholder.png";


function CeraceraView() {
  const indhold = [
    {
    type: "tekst-tekst",
    titelVenstre: "Optimering",
    tekstVenstre: "Alle billeder, videoer og animationer blev komprimeret og tilpasset til web, uden at vi gik på kompromis med kvaliteten. Det gjorde, at siden blev markant hurtigere at loade. De lettere filstørrelser har desuden sikret et lavere dataforbrug og dermed et mere energieffektivt site.",
    titelHøjre: "Let og energieffektiv løsning",
    tekstHøjre: "Unødig kode, plugins og datatungt indhold blev fjernet. Med en simpel teknisk opsætning er det lykkedes os at reducere kompleksiteten, både på kunde- og forretningssiden. Samlet har vores performance-optimeringer reduceret loadtiden og givet højere Google-placeringer på flere af CeraCeras vigtigste søgeord.",
    },
    {
    type: "tekst-tekst",
    titelVenstre: "Brugeroplevelse",
    tekstVenstre: "Vores fokus lå på at skabe en så gnidningsfri kunderejse som muligt. Takket være vores forenklede struktur, kan kunder nu hurtigere finde kurser, produkter og kontaktinformation.",
    titelHøjre: "Forstærket visuel identitet:",
    tekstHøjre: "CeraCeras design og branding er blevet mere professionel og sammenhængende. Vi har skabt en rød tråd mellem den fysiske butiks æstetik og det online univers.",
    },
    {
    type: "billede-billede",
      billedeVenstre: {
        src: placeHolder,
        alt: "Før",
      },
      billedeHøjre: {
        src: placeHolder,
        alt: "Efter",
      },
    },
  ];

  const tekstFelter = indhold.slice(0, 2);
  const billeder = indhold[2];
  
  return (
   <Container>
      <div className="flex flex-col w-full max-w-[1102px] mx-auto px-4    sm:px-6 md:px-0 my-[105px]">
          <h1 className="font-h1 font-medium">CeraCera</h1>
            <p className="urbanist font-intro mt-[40px]">
              Ny webshop til keramikværksted med fokus på enkel booking, nem vedligeholdelse af siden og en effektiv brugeroplevelse.
            </p>

        {tekstFelter.map((block, i) => (
          <FiftyFifty key={i} type={block.type} indhold={block} />
        ))}
      </div>
  
      <div className="mt-24 space-y-10">
        <h2 className="font-h2 mb-7.5">
          Før og efter
        </h2>

        <FiftyFifty type={billeder.type} indhold={billeder} />
      </div>

    </Container>
  )
}

export default CeraceraView

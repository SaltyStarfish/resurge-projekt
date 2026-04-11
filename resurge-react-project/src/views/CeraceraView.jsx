import FiftyFifty from "../components/FiftyFifty";
import Container from "../components/Container";
import ceraCeraFoer from "../assets/images/ceracera-foerbillede.webp"
import ceraCera from "../assets/images/cera-cera-69d63e7cef9d6.webp"
import Infographic, { CeraCera } from "../components/Infographic";

function CeraceraView() {
  const indhold = [
    {
    type: "tekst-tekst",
    titelVenstre: "Optimeret performance",
    tekstVenstre: "Alle billeder, videoer og animationer blev komprimeret og tilpasset til web, uden at vi gik på kompromis med kvaliteten. Det gjorde, at siden blev markant hurtigere at loade. De lettere filstørrelser har desuden sikret et lavere dataforbrug og dermed et mere energieffektivt site.",
    titelHøjre: "Let og energieffektivt",
    tekstHøjre: "Unødig kode, plugins og datatungt indhold blev fjernet. Med en simpel teknisk opsætning er det lykkedes os at reducere kompleksiteten, både på kunde- og forretningssiden. Samlet har vores performance-optimeringer reduceret loadtiden og givet højere Google-placeringer på flere af CeraCeras vigtigste søgeord.",
    },
    {
    type: "billede-billede",
      billedeVenstre: {
        src: ceraCeraFoer,
        overskrift: "Før:",
        billedtekst: "CeraCeras tidligere hjemmeside med et rodet og uoverskueligt design",
        alt: "Førbillede af CeraCera.dk - et rodet og uoverskueligt design",
      },
      billedeHøjre: {
        src: ceraCera,
        overskrift: "Efter:",
        billedtekst:"CeraCera.dk efter Resurges rebranding med enkelt design og bookingflow i fokus",
        alt: "Efterbillede af CeraCeras nye hjemmeside, der demonsterer vores klare fokus på et enkelt design og nemt bookingflow",
      },
    },
        {
    type: "tekst-tekst",
    titelVenstre: "Forenklet brugeroplevelse",
    tekstVenstre: "Vores fokus lå på at skabe en så gnidningsfri kunderejse som muligt. Takket være vores forenklede struktur, kan kunder nu hurtigere finde kurser, produkter og kontaktinformation.",
    titelHøjre: "Forstærket visuel identitet",
    tekstHøjre: "CeraCeras design og branding er blevet mere professionel og sammenhængende. Vi har skabt en rød tråd mellem den fysiske butiks æstetik og det online univers.",
    },
  ];
  
  return (
   <Container>
      <div className="flex flex-col w-full max-w-[1102px] mx-auto px-4    sm:px-6 md:px-0 my-[105px]">
          <h1 className="font-h1 font-medium">CeraCera: Ny webshop og bookingløsning</h1>
            <p className="urbanist font-intro mt-[40px] mb-[105px]">
              CeraCera er et keramikværksted i Aarhus, der sælger egne kreationer og afholder keramikkurser. De ønskede en løsning, der i højere grad understøtter deres fysiske butik og gør det nemt for dem at håndtere både onlinesalg og bookinger.
            </p>

          <Infographic blocks={CeraCera} title="Resultater:" />
        <div className="flex flex-col gap-[80px] mt-[105px]">
          {indhold.map((block, i) => (
            <FiftyFifty key={i} type={block.type} indhold={block} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default CeraceraView

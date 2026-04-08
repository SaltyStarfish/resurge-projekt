// Husk at importere alle Links og Components, der referes til
import Værdier from "../components/Værdier"
import Sektion3 from "../components/Sektion3"
import smallPlaceholder from "../assets/images/SmallPlaceholder.png"
import placeholder from "../assets/images/placeholder.png"
import info2x2_1 from "../assets/images/info2x2.1.svg";
import info2x2_2 from "../assets/images/info2x2,2.svg";
import infoLine1 from "../assets/images/infoline.svg";
import infoLine2 from "../assets/images/infoline2.svg";
import stine from "../assets/images/stine-69d574236ff46.webp";
import sarah from "../assets/images/sarah-69d5742328640.webp";
import isabella from "../assets/images/isabella-69d5742319ce2.webp";


function OmosView() {
  // All three blocks for OmosView
  const blocks = [
    { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Skræddersyede løsninger", 
      text: "Alt for mange bureauer arbejder med tunge løsninger, som ikke er tilpasset den enkelte virksomhed. Som indsamler data, der aldrig bliver brugt, men kun fylder og bruger strøm. Eller udliciterer webproduktionen til andre lande, hvor du mister kontrollen og overblikket. Den tendens vil vi gøre op med\n Hos Resurge mener vi, at tingene skal gøres ordentligt, og til en overkommelig pris. Så du har kontrollen hele vejen igennem og får en webløsning, der er tilpasset dine behov, ikke bare en standardpakke. Websitet skal passe til din virksomhed her og nu og kan udvides, når din virksomhed vokser.",
      reverse: false },
    { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Performanceoptimering", 
      textBefore: "Når det overflødige skæres væk, bliver dit website automatisk lettere og performer bedre. Dertil kommer billed-, video- og typografi-optimering, som igen er med til at gøre dit website hurtigere - uden at gå på kompromis med kvaliteten. Vi holder os opdateret på den nyeste teknologi og de bedste værktøjer til at optimere både performance og energiforbrug. Vil du selv i gang? Læs vores, ", 
      linkText: "5 konkrete tips til bedre performance, ",
      linkTo: "/blog/fem-tips",
      textAfter: " hvor vi lister tiltag, du straks kan gå i gang med.",
      reverse: true },
    { imageSrc: placeholder, imageAlt: "placeholder", title: "Reduceret CO2-aftryk", 
      textBefore: "Klimabevidsthed fylder i arbejdstilgangen hos Resurge, og performance- og CO2-optimering går heldigvis hånd i hånd. Et website vil per definition aldrig blive bæredygtigt, og man siger, at det eneste bæredygtige website er et website, som ikke eksisterer. Med det i mente tror vi, at det mindst bæredygtige website er et website, som ikke opfylder dets formål. Derfor er det vores topprioritet at skabe effektive webløsninger, som skaber værdi for virksomheder og deres kunder. Samtidig arbejder vi aktivt med at gøre websites mindre datatunge for at opnå en bedre brugeroplevelse, højere performance og et mindre CO2-aftryk. Du finder konkrete råd i vores",
      linkText: "guides til bedre performance og lavere CO2-aftryk",
      linkTo: "/blog",
      textAfter: ", hvor vi deler praktisk viden og værktøjer.",
      reverse: false },
    
    { imageSrc: sarah, imageAlt: "UX designer, Sarah", title: "Sarah - UX/UI-designer", 
      text: "Sarah designer websites, der konverterer besøgende til kunder. Hun målretter designet til netop dine kunder og gør det flot at kigge på og nemt at finde rundt i. Og så tester hun selvfølgelig, at alt virker og fungerer som tiltænkt inden websitet bliver udgivet til rigtige kunder", 
      reverse: true },
    { imageSrc: isabella, imageAlt: "Grafiker, Isabella", title: "Isabella - Grafiker", 
      text: "Isabella skaber visuelt tiltalende designs, der fanger opmærksomheden og styrker brandets identitet. Hun arbejder tæt sammen med teamet for at sikre, at designet er både æstetisk og funktionelt, og at det understøtter virksomhedens mål og budskaber.", 
      reverse: false },
    { imageSrc: stine, imageAlt: "Developer, Stine", title: "Stine - Developer", 
      text: "Stine udvikler robuste og skalerbare løsninger, der sikrer, at dit website fungerer problemfrit. Hun arbejder tæt sammen med designteamet for at implementere funktionalitet, der understøtter virksomhedens mål og brugernes behov.", 
      reverse: true },
    
  ];

  const firstSektionBlocks = blocks.slice(0, 3);
  const teamSektionBlocks = [blocks[3], blocks[4], blocks[5]];

  const forsideVaerdiBlocks = [
    { title: "vores værdier", imageSrc: info2x2_2, mobileImageSrc: info2x2_1, imageAlt: "" },
  ];

  return (
    <div className="flex justify-start items-start w-full max-w-[1102px] mx-auto my-8 md:my-12 px-4 sm:px-6 md:px-0 flex-col gap-10 md:gap-[105px]">
      {/* Opret sidens indhold herunder som "normal HTML" eller referer til components*/}
      <h1 className="font-h1 font-medium mb-0">Om os</h1>
      <Værdier blocks={forsideVaerdiBlocks} />
      <h3 className="font-h3 font-medium">hej ref</h3>
      <Sektion3 blocks={firstSektionBlocks} />
      <h2 className="font-h2 font-medium mb-0">Mød vores seje hold</h2>
      <Sektion3 blocks={teamSektionBlocks} />
      
    </div>
  )
}

export default OmosView

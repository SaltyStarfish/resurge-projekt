import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sektion3 from "../components/Sektion3"
import skraeddersyet from "../assets/images/skrædersyet.svg"
import optimering from "../assets/images/optimering.svg"
import co2 from "../assets/images/Co2.svg"
import info2x2_1 from "../assets/images/info2x2.1.svg";
import info2x2_2 from "../assets/images/info2x2,2.svg";
import stine from "../assets/images/stine-69d574236ff46.webp";
import sarah from "../assets/images/sarah-69d5742328640.webp";
import isabella from "../assets/images/isabella-69d5742319ce2.webp";
import Container from "../components/Container"
import Infographic from "../components/Infographic";



  const blocks = [
    { imageSrc: skraeddersyet, imageAlt: "placeholder", title: "Skræddersyede løsninger", 
      text: "Alt for mange bureauer arbejder med tunge løsninger, som ikke er tilpasset den enkelte virksomhed. Som indsamler data, der aldrig bliver brugt, men kun fylder og bruger strøm. Eller udliciterer webproduktionen til andre lande, hvor du mister kontrollen og overblikket. Den tendens vil vi gøre op med.\n Hos Resurge mener vi, at tingene skal gøres ordentligt, og til en overkommelig pris. Så du har kontrollen hele vejen igennem og får en webløsning, der er tilpasset dine behov, ikke bare en standardpakke. Websitet skal passe til din virksomhed her og nu og kan udvides, når din virksomhed vokser.",
      reverse: false,
      sectionId: "skraeddersyede-losninger" },
    { imageSrc: optimering, imageAlt: "placeholder", title: "Performanceoptimering", 
      textBefore: "Når det overflødige skæres væk, bliver dit website automatisk lettere og performer bedre. Dertil kommer billed-, video- og typografi-optimering, som igen er med til at gøre dit website hurtigere - uden at gå på kompromis med kvaliteten. Vi holder os opdateret på den nyeste teknologi og de bedste værktøjer til at optimere både performance og energiforbrug. Vil du selv i gang? Læs vores ", 
      linkText: "5 konkrete tips til bedre performance",
      linkTo: "/blog/fem-tips",
      textAfter: ", hvor vi lister tiltag, du straks kan gå i gang med.",
      reverse: true,

      sectionId: "optimal-performance" },
    { imageSrc: co2, imageAlt: "placeholder", title: "Reduceret CO2-aftryk", 
      textBefore: "Klimabevidsthed fylder i arbejdstilgangen hos Resurge, og performance- og CO2-optimering går heldigvis hånd i hånd. Et website vil per definition aldrig blive bæredygtigt, og man siger, at det eneste bæredygtige website er et website, som ikke eksisterer. Med det i mente tror vi, at det mindst bæredygtige website er et website, som ikke opfylder dets formål. Derfor er det vores topprioritet at skabe effektive webløsninger, som skaber værdi for virksomheder og deres kunder. Samtidig arbejder vi aktivt med at gøre websites mindre datatunge for at opnå en bedre brugeroplevelse, højere performance og et mindre CO2-aftryk. Du finder konkrete råd i vores ",
      linkText: "guides til bedre performance og lavere CO2-aftryk",
      linkTo: "/blog",
      textAfter: ", hvor vi deler praktisk viden og værktøjer.",
      reverse: false,
      sectionId: "lavere-co2-aftryk" },
    
    { imageSrc: sarah, imageAlt: "UX designer, Sarah", title: "Sarah - UX/UI-designer", 
      text: "Sarah designer websites, der konverterer besøgende til kunder. Hun målretter designet til netop dine kunder og gør det flot at kigge på og nemt at finde rundt i. Og så tester hun selvfølgelig, at alt virker og fungerer som tiltænkt inden websitet bliver udgivet til rigtige kunder.", 
      reverse: true },
    { imageSrc: isabella, imageAlt: "Grafiker, Isabella", title: "Isabella - Grafiker", 
      text: "Visuel identitet, logoer, farver, illustrationer og animationer er Isabella’s spidskompetencer. Om du har et eksisterende brand, eller om vi skal starte from scratch, er opgaven i trygge hænder hos vores grafiker. Isabella er opdateret på de nyeste teknikker inden for billed- og videooptimering, så dine billeder fremstår i høj kvalitet, men fylder en brøkdel og indlæses hurtigere.", 
      reverse: false },
    { imageSrc: stine, imageAlt: "Webudvikler, Stine", title: "Stine - Webudvikler", 
      text: "Stine er ekspert i at programmere knivskarpe websites. Hun kan udvikle alt fra simple infosider til omfattende webshops og bookingsystemer. Med Stine ved programmeringsroret bliver ideer og designs til fungerende websites. Performance- og søgemaskineoptimeret, så din virksomhed bliver set, og dine kunder får en lynhurtig og gnidningsfri weboplevelse.", 
      reverse: true },
    
  ];
  export default function OmosView() {
    const location = useLocation();
    useEffect(() => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(id);
      
          console.log('Hash:', location.hash, 'ID:', id, 'Element:', el);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    }, [location]);

  const firstSektionBlocks = blocks.slice(0, 3);
  const teamSektionBlocks = blocks.slice(3, 6);

  const vaerdiBlocks = [
    { title: "Hos os får du:", imageSrc: info2x2_2, mobileImageSrc: info2x2_1, imageAlt: "", imageSpacing: "pt-[30px] pb-0" },
  ];

  return (
    <>
      <Container>
        <section className="mt-15 md:mt-[105px] mb-15 md:mb-[105px]">
          <h1 className="font-h1 font-medium">Hvem er vi?</h1>
              <p className="urbanist font-intro mt-[40px]"> Hos Resurge er vi passionerede omkring at udvikle hurtige, effektive webløsninger med fokus på performance og et lavere klimaaftryk. 
            </p>
        </section>
      </Container>
      <Container>
        <div className="flex justify-start items-start w-full max-w-[1102px] mx-auto my-12 md:my-12 px-4 sm:px-6 md:px-0 flex-col gap-[65px] md:gap-[105px]">
          <Infographic const={vaerdiBlocks}/>
        </div>
      </Container>
      <Container>
        <div className="flex justify-start items-start w-full max-w-[1102px] mx-auto my-12 md:my-12 px-4 sm:px-6 md:px-0 flex-col gap-[65px] md:gap-[105px]" >
          <Sektion3 blocks={firstSektionBlocks} />
        </div>
      </Container>
      <Container>
        <div className="flex justify-start items-start w-full max-w-[1102px] mx-auto my-12 md:my-12 px-4 sm:px-6 md:px-0 flex-col gap-[65px] md:gap-[105px]">
          <h2 className="font-h2 font-medium mb-0">Mød vores seje hold</h2>
          <Sektion3 blocks={teamSektionBlocks} />        
          </div>
      </Container>
      
    </>  
  )
}

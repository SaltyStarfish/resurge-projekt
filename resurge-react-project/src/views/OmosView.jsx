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
      text: "Hos Resurge arbejder vi ikke med standardløsninger, men tager højde for behovene i netop din virksomhed. Alt for mange bureauer arbejder med tunge løsninger, som ikke er tilpasset den enkelte virksomhed. Som indsamler data, der aldrig bliver brugt, men kun fylder og bruger strøm. Eller udliciterer webproduktionen til andre lande, hvor du mister kontrollen og overblikket. Den tendens vil vi gøre op med. Vi mener, at tingene skal gøres ordentligt - og til en overkommelig pris. Så du har kontrollen hele vejen igennem og får en webløsning, der er tilpasset dine behov. Løsningen skal passe til din virksomhed her og nu og kan udvides, når din virksomhed vokser.",
      reverse: false,
      sectionId: "skraeddersyede-losninger" },
    { imageSrc: optimering, imageAlt: "placeholder", title: "Performanceoptimering", 
      textBefore: "Performance er en grundsøjle i vores tilgang. Når vi skærer det overflødige væk, bliver dit website automatisk lettere og performer bedre. Vi arbejder bl.a. med billed-, video-, kode- og typografi-optimering. Det forbedrer loadtiden og funktionaliteten, uden at gå på kompromis med kvaliteten. Vi holder os opdaterede på den nyeste teknologi og de bedste værktøjer til at optimere både performance og energiforbrug. Vi tror på, at du som kunde skal have indsigt i det, vi laver. Derfor deler vi også " , 
      linkText: "konkrete tips til bedre performance",
      linkTo: "/blog/fem-tips",
      textAfter: ", som du straks kan gå i gang med.",
      reverse: true,

      sectionId: "optimal-performance" },
    { imageSrc: co2, imageAlt: "placeholder", title: "Reduceret CO2-aftryk", 
      textBefore: "Hos Resurge er klimabevidsthed en integreret del af vores arbejde. Performance- og CO2-optimering går hånd i hånd, og selvom websites bruger energi og ikke kan være fuldt ud bæredygtige, mener vi, at vi har et ansvar for at gøre dem så lette og effektive som muligt.  Netop derfor skaber vi webløsninger, der både performer godt og skaber reel værdi for virksomheder og deres kunder. For os hænger ansvarlighed og effektivitet tæt sammen: Når vi forbedrer din performance og samtidig reducerer ressourceforbruget, så er det en win-win. Som en del af den tilgang deler vi også praktisk viden og værktøjer, så du selv kan træffe bedre valg. Find konkrete råd i vores ",
      linkText: "guides til bedre performance og lavere CO2-aftryk",
      linkTo: "/blog",
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

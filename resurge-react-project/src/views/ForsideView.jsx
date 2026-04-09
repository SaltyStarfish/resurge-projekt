import smallPlaceholder from "../assets/images/SmallPlaceholder.png";
import Sektion3 from "../components/Sektion3";
import placeHolder from "../assets/images/placeholder.png";
import Container from "../components/Container";
import PriceCardSection from "../components/PriceCardSection";
import CaseCard from "../components/CaseCard";
import CtaLink from "../components/CtaLink";
import Værdier from "../components/Værdier";
import info4x4 from "../assets/images/info4x4.svg";



function ForsideView() {
    const blocks = [
    { imageSrc: smallPlaceholder, imageAlt: "placeholder", 
      text: "Et simpelt website er et hurtigt website. Holder du siden simpel, så brugeren undgår unødige klik og omveje, giver det både en bedre brugeroplevelse og en bedre performance på dit site.\n Jo færre trin der er til et køb eller at kontakte dig, desto mere sandsynligt er det, at brugeren faktisk gør det. Benyt derfor klare menuer og struktur samt tydelige call to actions, så det er klart for brugeren, hvor der skal klikkes.  ", 
      reverse: false, readMoreLink: "/ydelser" },
    ];

    const cases = [
      {
        title: "CeraCera",
        description: "Ny webshop til keramikværksted med fokus på enkel booking, nem vedligeholdelse af siden og en effektiv brugeroplevelse.",
        image: placeHolder,
        tags: ["Webshop", "UX", "Performance-optimering", "Shopify", "Optimeret bookingflow", "Visuel identitet", "SEO"],
        link: "/cases/cera-cera"
      },
  
      {
        title: "Repare",
        description: "WordPress-løsning og visuel identitet til nyopstartet B2B-virksomhed, hvor et enkelt design med et lavt klimaaftryk var i højsædet.",
        image: placeHolder,
        tags: ["WordPress", "Websitelancering", "Visuel identitet", "Digital strategi", "Lavt Co2-aftryk", "B2B", "SEO"],
        link: "#"
      },
  
      {
        title: "Kreuzbär",
        description: "Performance-optimering og ny visuel identitet til Aarhus-café, hvor vi særligt arbejdede med page speed, SEO samt billed- og videooptimering.",
        image: placeHolder,
        tags: ["WordPress", "Digital strategi", "UX", "Visuel identitet", "Frontend", "Performance-optimering", "SEO"],
        link: "#"
      },
    ]

    const forsideVaerdiBlocks = [
      {
        title: "vores grundsøjler",
        imageSrc: info4x4,
        imageAlt: "infographic om vores grundsojler",
        imageSpacing: "pt-[30px] pb-0 md:pt-[80px] md:pb-[60px]"
      },
    ];
    
    return (
      <>
        <Container>
          <h1 className="font-h1 font-medium my-[105px]">Resurge</h1>
        </Container>
        <Container>
          <div className="flex justify-start items-start w-full max-w-[1102px] mx-auto my-12 md:my-12 px-4 sm:px-6 md:px-0 flex-col gap-[65px] md:gap-[105px]">
            <Værdier blocks={forsideVaerdiBlocks} />
          </div>
      </Container>
      <div className="overflow-x-hidden">
        <Container>
          <section className="mb-[105px]">
            <h2 className="font-h2 mb-7.5">Et bud på en budgetvenlig løsning</h2>
            <p className="font-body mb-9">Hos Resurge tilbyder vi skræddersyede digitale løsninger, der passer til dit budget. Godt webdesign behøver nemlig ikke være dyrt. </p>
            <p className="font-body mb-10">Performance-optimering er vores speciale. Vi sørger for, at din hjemmeside ikke blot ser godt ud, men loader hurtigt, konverterer bedre og performer bedre på Google. Vi udvikler løsninger med fokus på lavere energiforbrug og effektiv drift.</p>
          </section>
        </Container>
        <div className="max-w-screen">
          <div className="mx-auto w-full max-w-max overflow-x-auto hide-scrollbar">
            <PriceCardSection/>
          </div>
        </div>
        <Container>
          <CtaLink to={"/ydelser"}>Læs mere</CtaLink>
          <h2 className="font-h2 mt-[105px] mb-2.5">Brug for inspiration? <br /> Tag et kig på vores tidligere samarbejder</h2>
        </Container>
        <div className="max-w-screen">
          <div className="mx-auto w-full max-w-max overflow-x-auto hide-scrollbar mb-[105px] mt-20">
            <div className="flex gap-3 md:gap-7.5 overflow-x-auto hide-scrollbar px-6 md:px-12 lg:px-20">
              {cases.map((item, index) => (
                <div key={index} className="w-70 md:w-100 flex-shrink-0">
                  <CaseCard
                    title={item.title}
                    tags={item.tags}
                    image={item.image}
                    link={item.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="flex justify-start items-start w-full max-w-[1102px] mx-auto my-12 md:my-12 px-4 sm:px-6 md:px-0 flex-col gap-[65px] md:gap-[105px]" >
          <h2 className="font-h2 font-medium mb-0" >Her finder du mere viden om optimering</h2>
          <Sektion3 blocks={blocks} />
        </div>
      </Container>
    </>
  )
}

export default ForsideView

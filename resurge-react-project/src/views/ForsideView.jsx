import Sektion3 from "../components/Sektion3";
import Container from "../components/Container";
import ScrollablePriceCards from "../components/ScrollablePriceCards";
import CtaLink from "../components/CtaLink";
import Værdier from "../components/Værdier";
import info4x4 from "../assets/images/info4x4.svg";
import ScrollableCaseCards from "../components/ScrollableCaseCards";
import forsideIkon from "../assets/images/forside ikon.svg";



function ForsideView() {
    const blocks = [
      { imageSrc: forsideIkon, imageAlt: "Åben bog med lysende pærer", text: "I en verden hvor dataforbruget blot vokser, og stadigt mere af vores hverdag foregår digitalt, er optimering alfa og omega. Hos Resurge har vi skabt et vidensunivers, hvor vi deler indsigter, guides og konkrete værktøjer, der hjælper dig med at optimere din hjemmeside.", reverse: false, readMoreLink: "/blog" },
    ];

    const forsideVaerdiBlocks = [
      {
        title: "vores grundsøjler", imageSrc: info4x4, imageAlt: "infographic om vores grundsojler", imageSpacing: "pt-[30px] pb-0 md:pt-[80px] md:pb-[60px]"
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
            <section className="mb-20">
              <h2 className="font-h2 mb-7.5">Et bud på en budgetvenlig løsning</h2>
              <p className="font-body mb-9">Hos Resurge tilbyder vi skræddersyede digitale løsninger, der passer til dit budget. Godt webdesign behøver nemlig ikke være dyrt. </p>
              <p className="font-body mb-10">Performance-optimering er vores speciale. Vi sørger for, at din hjemmeside ikke blot ser godt ud, men loader hurtigt, konverterer bedre og performer bedre på Google. Vi udvikler løsninger med fokus på lavere energiforbrug og effektiv drift.</p>
            </section>
          </Container>
          <ScrollablePriceCards/>
          <Container>
            <CtaLink to={"/ydelser"}>Læs mere</CtaLink>
            <h2 className="font-h2 mt-[105px] mb-20">Brug for inspiration? <br /> Tag et kig på vores tidligere samarbejder</h2>
          </Container>
          <ScrollableCaseCards/>
        </div>
        <Container>
          <div className="my-[105px]" >
            <h2 className="font-h2 font-medium mb-20" >Her finder du mere viden om optimering</h2>
            <Sektion3 blocks={blocks} />
          </div>
        </Container>
      </>
    )
}

export default ForsideView

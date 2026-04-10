import Sektion3 from "../components/Sektion3";
import Container from "../components/Container";
import ScrollablePriceCards from "../components/ScrollablePriceCards";
import CtaLink from "../components/CtaLink";
import VærdierForside from "../components/VærdierForside";
import boks1 from "../assets/images/boks1-69d89c357f19f-69d8a4f8652db.webp";
import boks2 from "../assets/images/boks2-69d89c316d34f-69d8a4f81b5b9.webp";
import boks3 from "../assets/images/boks-3-69d89c3e707f7-69d8a4f81b6bb.webp";
import boks4 from "../assets/images/boks-4-69d89c38d55fc-69d8a4f85bece.webp";
import boks1lille from "../assets/images/boks1lille-69d8be54e9d51.webp";
import boks2lille from "../assets/images/boks2lille-69d8be5d0b22c.webp";
import boks3lille from "../assets/images/boks-3lille-69d8be4b85d89.webp";
import boks4lille from "../assets/images/boks-4lille-69d8be507f421.webp";
import ScrollableCaseCards from "../components/ScrollableCaseCards";
import forsideIkon from "../assets/images/forside ikon.svg";




function ForsideView() {
    const blocks = [
      { imageSrc: forsideIkon, imageAlt: "Åben bog med lysende pærer", text: "I en verden hvor dataforbruget blot vokser, og stadigt mere af vores hverdag foregår digitalt, er optimering alfa og omega. Hos Resurge har vi skabt et vidensunivers, hvor vi deler indsigter, guides og konkrete værktøjer, der hjælper dig med at optimere din hjemmeside.", reverse: false, readMoreLink: "/blog" },
    ];


    // Desktop and mobile arrays for VærdierForside
    const desktopItems = [
      { imageSrc: boks1, imageAlt: "Optimal performance", linkText: "Optimal performance", linkColor: "black", linkTo: "/om-os#performance-optimering" },
      { imageSrc: boks2, imageAlt: "Skræddersyede løsninger", linkText: "Skræddersyede løsninger", linkColor: "white", linkTo: "/om-os#skraeddersyede-losninger" },
      { imageSrc: boks3, imageAlt: "Konkurrence dygtige priser", linkText: "Konkurrence dygtige priser", linkColor: "black", linkTo: "/ydelser#vores-mest-populaere-losninger" },
      { imageSrc: boks4, imageAlt: "Reduceret CO2-aftryk", linkText: "Reduceret CO2-aftryk", linkColor: "white", linkTo: "/om-os#reduceret-co2-aftryk" },
    ];
    const mobileItems = [
      { imageSrc: boks1lille, imageAlt: "optimal performance link", linkText: "optimal performance", linkColor: "white", linkTo: "/om-os#performance-optimering" },
      { imageSrc: boks2lille, imageAlt: "Skræddersyede løsninger link", linkText: "Skræddersyede løsninger", linkColor: "black", linkTo: "/om-os#skraeddersyede-losninger" },
      { imageSrc: boks3lille, imageAlt: "Konkurrence dygtige priser link", linkText: "Konkurrence dygtige priser", linkColor: "white", linkTo: "/ydelser#vores-mest-populaere-losninger" },
      { imageSrc: boks4lille, imageAlt: "Reduceret CO2-aftryk link", linkText: "Reduceret CO2-aftryk", linkColor: "black", linkTo: "/om-os#reduceret-co2-aftryk" },
    ];
    
    return (
      <>
        <Container>
          <h1 className="font-h1 font-medium my-[105px]">Resurge</h1>
        </Container>
        <Container>
          <div className="flex justify-start items-start w-full max-w-[1102px] mx-auto my-12 md:my-12 px-4 sm:px-6 md:px-0 flex-col gap-[65px] md:gap-[105px]">
            <VærdierForside title="vores grundsøjler" items={desktopItems} mobileItems={mobileItems} />
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

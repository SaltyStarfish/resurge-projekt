// Husk at importere alle Links og Components, der referes til
import { Link } from "react-router-dom";

import Container from "../components/Container"
import PriceCardSection from "../components/PriceCardSection"
import CaseCard from "../components/CaseCard"
import placeHolder from "../assets/images/placeholder.png"
import CtaLink from "../components/CtaLink"


function YdelserView() {
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

  return (
    <>
      <Container>
        <section className="mt-[105px] mb-15">
          <h1 className="font-h1 font-medium mb-4">Personligt tilpassede løsninger</h1>
          <p className="font-h3 font-medium mb-6">
            Til dig og din virksomhed.
          </p>
        </section>
        <div className="mt-[105px] mb-15">
          <h2 className="font-h3 font-medium">
            Vores mest populære løsninger:
          </h2>
        </div>
          <PriceCardSection/>
        <p className="mb-10 mt-15">Skal vi give dit website et performance-løft eller bringe dine web-ideer til live? Så kontakt os i dag for en uforpligtende snak og et godt tilbud.</p>
        <p className="justify-self-center mx-auto">Kontakt</p>
        <h2 className="font-h2">Tidligere cases</h2>
        <p className="font-body">Se eksempler på nogle af vores tidligere løsninger her:</p>
        <div className="grid md:grid-cols-3 gap-3 md:gap-7.5 overflow-x-auto hide-scrollbar mt-20 mb-[105px]">
          {cases.map((item, index) => (
            <CaseCard
              key={index}
              title={item.title}
              tags={item.tags}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
        <section className="mb-[105px]">
          <h2 className="font-h2 mb-7.5">Vi skaber optimerede websites skræddersyet til dig og din virksomhed</h2>
          <p className="font-body mb-9">Hos Resurge er der ikke langt fra ideer til virkelighed. Vi hjælper små og mellemstore virksomheder med at opbygge nye websites eller optimere eksisterende sites. Og så er vi specialister i webperformance og arbejder med det i alle vores løsninger. </p>
          <p className="font-body mb-10">Performance handler om mængden af data, der skal indlæses, når en kunde vil besøge dit website. Overflødig data loader langsommere, og de færreste kunder vil bruge tid på et langsomt website. Når vi performance-optimerer, får vi websitet til at fylde så lidt som muligt og loade hurtigere. Det giver de besøgende en bedre oplevelse, rangerer bedre på Google, kræver mindre strøm fra brugerens mobil eller computer og udleder mindre CO2. Alt sammen til en aftalt lav pris. </p>
          <CtaLink to={"/blog"}>Læs mere</CtaLink>
        </section>
      </Container>
    </>
  )
}

export default YdelserView

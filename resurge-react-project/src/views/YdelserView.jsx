// Husk at importere alle Links og Components, der referes til
import Container from "../components/Container"
import PriceCardSection from "../components/PriceCardSection"
import CaseCard from "../components/CaseCard"
import placeHolder from "../assets/images/placeholder.png"
import CtaLink from "../components/CtaLink"
import CtaKnap from "../components/CtaKnap"
import { Link } from "react-router-dom"


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
      <div className="overflow-x-hidden">
        <Container>
          <section className="mt-[105px] mb-15">
            <h1 className="font-h1 font-medium mb-4">Personligt tilpassede løsninger</h1>
            <p className="font-body font-medium mb-6">
              Til din virksomhed og dit budget.
            </p>
          </section>
          <div className="mt-[105px] mb-15">
            <h2 className="font-h3 font-medium">
              Vores mest populære løsninger:
            </h2>
          </div>
        </Container>
        <div className="max-w-screen">
          <div className="mx-auto w-full max-w-max overflow-x-auto hide-scrollbar">
            <PriceCardSection/>
          </div>
        </div>
        <Container>
          <p className="mb-10 mt-15">Skal vi give dit website et performance-løft eller bringe dine web-ideer til live? Så kontakt os i dag for en uforpligtende snak og et godt tilbud.</p>
          <div className="max-w-105 mx-auto">
            <CtaKnap>
              <Link className={"py-1 px-6 flex justify-center"} to={"/kontakt"}>Kontakt</Link>
            </CtaKnap>
          </div>
          <h2 className="font-h2 mt-[105px] mb-2.5">Tidligere cases</h2>
          <p className="font-body">Se eksempler på nogle af vores tidligere løsninger her:</p>
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
        <Container>
          <section className="mb-[105px]">
            <h2 className="font-h2 mb-7.5">Vi skaber optimerede websites skræddersyet til dig og din virksomhed</h2>
            <p className="font-body mb-9">Hos Resurge er der ikke langt fra ideer til virkelighed. Vi hjælper små og mellemstore virksomheder med at opbygge nye websites eller optimere eksisterende sites. Og så er vi specialister i webperformance og arbejder med det i alle vores løsninger. </p>
            <p className="font-body mb-10">Performance handler om mængden af data, der skal indlæses, når en kunde vil besøge dit website. Overflødig data loader langsommere, og de færreste kunder vil bruge tid på et langsomt website. Når vi performance-optimerer, får vi websitet til at fylde så lidt som muligt og loade hurtigere. Det giver de besøgende en bedre oplevelse, rangerer bedre på Google, kræver mindre strøm fra brugerens mobil eller computer og udleder mindre CO2. Alt sammen til en aftalt lav pris. </p>
            <CtaLink to={"/blog"}>Læs mere</CtaLink>
          </section>
        </Container>
      </div>
    </>
  )
}

export default YdelserView

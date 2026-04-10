// Husk at importere alle Links og Components, der referes til
import Container from "../components/Container"
import ScrollablePriceCards from "../components/ScrollablePriceCards"
import ScrollableCaseCards from "../components/ScrollableCaseCards"
import CtaLink from "../components/CtaLink"
import CtaKnap from "../components/CtaKnap"
import { Link } from "react-router-dom"


function YdelserView() {

  return (
    <>
      <div className="overflow-x-hidden">
        <Container>
          <section className="mt-15 md:mt-[105px] mb-15 md:mb-[105px]">
            <h1 className="font-h1 font-medium mb-4">Personligt tilpassede løsninger</h1>
            <p className="font-intro font-medium">
              Til din virksomhed og dit budget.
            </p>
          </section>
          <div className="mb-10 md:mb-20">
            <h2 className="font-h2 font-medium">
              Vores mest populære løsninger:
            </h2>
          </div>
        </Container>
          <ScrollablePriceCards/>
        <Container>
          <p className="font-body mt-7.5 md:mt-15 mb-5 md:mb-10 ">Skal vi give dit website et performance-løft eller bringe dine web-ideer til live? Så kontakt os i dag for en uforpligtende snak og et godt tilbud.</p>
          <div className="max-w-105 mx-auto">
            <CtaKnap>
              <Link className={"py-1 px-6 flex justify-center bg-[#CEBC9833]"} to={"/kontakt"}>Kontakt</Link>
            </CtaKnap>
          </div>
          <h2 className="font-h2 mt-15 md:mt-[105px] mb-2.5">Tidligere cases</h2>
          <p className="font-body mb-10 md:mb-20">Se eksempler på nogle af vores tidligere løsninger her:</p>
        </Container>
          <ScrollableCaseCards/>
        <Container>
          <section className="my-15 md:my-[105px]">
            <h2 className="font-h2 mb-3.75 md:mb-7.5">Vi skaber optimerede websites skræddersyet til dig og din virksomhed</h2>
            <p className="font-body mb-4.5 md:mb-9">Hos Resurge er der ikke langt fra ideer til virkelighed. Vi hjælper små og mellemstore virksomheder med at opbygge nye websites eller optimere eksisterende sites. Og så er vi specialister i webperformance og arbejder med det i alle vores løsninger. </p>
            <p className="font-body mb-5 md:mb-10">Performance handler om mængden af data, der skal indlæses, når en kunde vil besøge dit website. Overflødig data loader langsommere, og de færreste kunder vil bruge tid på et langsomt website. Når vi performance-optimerer, får vi websitet til at fylde så lidt som muligt og loade hurtigere. Det giver de besøgende en bedre oplevelse, rangerer bedre på Google, kræver mindre strøm fra brugerens mobil eller computer og udleder mindre CO2. Alt sammen til en aftalt lav pris. </p>
            <CtaLink to={"/blog"}>Læs mere</CtaLink>
          </section>
        </Container>
      </div>
    </>
  )
}

export default YdelserView

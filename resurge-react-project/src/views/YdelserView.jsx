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
          <ScrollablePriceCards/>
        <Container>
          <p className="font-body mb-10 mt-15">Skal vi give dit website et performance-løft eller bringe dine web-ideer til live? Så kontakt os i dag for en uforpligtende snak og et godt tilbud.</p>
          <div className="max-w-105 mx-auto">
            <CtaKnap>
              <Link className={"py-1 px-6 flex justify-center bg-[#CEBC9833]"} to={"/kontakt"}>Kontakt</Link>
            </CtaKnap>
          </div>
          <h2 className="font-h2 mt-[105px] mb-2.5">Tidligere cases</h2>
          <p className="font-body">Se eksempler på nogle af vores tidligere løsninger her:</p>
        </Container>
          <ScrollableCaseCards/>
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

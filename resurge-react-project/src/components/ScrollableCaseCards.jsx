// Husk at importere alle Links og Components, der referes til
import CaseCard from '../components/CaseCard';
import placeHolder from "../assets/images/placeholder.png"
import ScrollableCards from './ScrollableCardSection';


function ScrollableCaseCards() {

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
      <ScrollableCards>
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
      </ScrollableCards>
    </>
  )
}

export default ScrollableCaseCards
// Husk at importere alle Links og Components, der referes til
import SmallerCaseCard from '../components/SmallerCaseCard';
import placeHolder from "../assets/images/placeholder.png"
import ScrollableCards from './ScrollableCardSection';
import ceraCera from "../assets/images/cera-cera-69d63e7cef9d6.webp"
import kreuzbar from "../assets/images/kreubar-69d63e88a6a8c.webp"
import oekofamilien from "../assets/images/oekofamilien-case.webp"

function ScrollableCaseCards() {

  const cases = [
    {
      title: "CeraCera",
      image: ceraCera,
      tags: ["Webshop", "UX", "Performance-optimering", "Shopify", "Optimeret bookingflow", "Visuel identitet", "SEO"],
      link: "/cases/cera-cera"
    },

    {
      title: "Repare",
      image: placeHolder,
      tags: ["WordPress", "Websitelancering", "Visuel identitet", "Digital strategi", "Lavt Co2-aftryk", "B2B", "SEO"],
      link: "#"
    },

    {
      title: "Kreuzbär",
      image: kreuzbar,
      tags: ["WordPress", "Digital strategi", "UX", "Visuel identitet", "Frontend", "Performance-optimering", "SEO"],
      link: "#"
    },

    {
      title: "Økofamilien",
      image: oekofamilien,
      tags: ["Webshop", "UX", "Performance-optimering", "Shopify", "Kodeoptimering", "SEO", "B2C", "Redduceret CO2-aftryk"],
      link: "#"
    },
  ]

  return (
    <>
      <ScrollableCards>
            {cases.map((item, index) => (
              <div key={index} className="w-70 md:w-100 flex-shrink-0">
                <SmallerCaseCard
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
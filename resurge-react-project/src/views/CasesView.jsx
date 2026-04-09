import CaseCard from "../components/CaseCard"
import Container from "../components/Container"
import ceraCera from "../assets/images/cera-cera-69d63e7cef9d6.webp"
import kreuzbar from "../assets/images/kreubar-69d63e88a6a8c.webp"
import oekofamilien from "../assets/images/oekofamilien-case.webp"
import repare from "../assets/images/repare-case.webp"

export default function CasesView() {
  const cases = [
    {
      title: "CeraCera",
      description: "Ny webshop til keramikværksted med fokus på enkel booking, nem vedligeholdelse af siden og en effektiv brugeroplevelse.",
      image: ceraCera,
      tags: ["Webshop", "UX", "Performance-optimering", "Shopify", "Optimeret bookingflow", "Visuel identitet", "SEO"],
      link: "/cases/cera-cera"
    },

    {
      title: "Repare",
      description: "WordPress-løsning og visuel identitet til nyopstartet B2B-virksomhed, hvor et enkelt design med et lavt klimaaftryk var i højsædet.",
      image: repare,
      tags: ["WordPress", "Websitelancering", "Visuel identitet", "Digital strategi", "Lavt Co2-aftryk", "B2B", "SEO"],
      link: "#"
    },

    {
      title: "Kreuzbär",
      description: "Performance-optimering og ny visuel identitet til Aarhus-café, hvor vi særligt arbejdede med page speed, SEO samt billed- og videooptimering.",
      image: kreuzbar,
      tags: ["WordPress", "Digital strategi", "UX", "Visuel identitet", "Frontend", "Performance-optimering", "SEO"],
      link: "#"
    },

        {
      title: "Økofamilien",
      description: "Webshop-løsning i tråd med Økofamiliens bæredygtige udvalg. Siden er bygget og optimeret med ønsket om et lavere ressourceforbrug.",
      image: oekofamilien,
      tags: ["Webshop", "UX", "Performance-optimering", "Shopify", "Kodeoptimering", "SEO", "B2C", "Redduceret CO2-aftryk"],
      link: "#"
    },
  ];

  return (
    <Container>
      <div className="flex flex-col w-full max-w-[1102px] mx-auto px-4 sm:px-6 md:px-0 my-[105px]">

      <h1 className="font-h1 font-medium">Cases</h1>
        <p className="urbanist text-[30px] mt-[40px]">
          Hos Resurge specialiserer vi os i skræddersyede, energieffektive
          webløsninger. Se et udpluk af vores cases herunder.
        </p>

      <div className="grid md:grid-cols-2 gap-[80px] mt-[105px]">
        {cases.map((item, index) => (
          <CaseCard
            key={index}
            title={item.title}
            description={item.description}
            tags={item.tags}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
      </div>
    </Container>
  );
}

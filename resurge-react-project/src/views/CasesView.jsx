import CaseCard from "../components/CaseCard"
import Container from "../components/Container"
import placeHolder from "../assets/images/placeholder.png"

export default function CasesView() {
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

        {
      title: "Økofamilien",
      description: "Webshop-løsning i tråd med Økofamiliens bæredygtige udvalg. Siden er bygget og optimeret med ønsket om et lavere ressourceforbrug.",
      image: placeHolder,
      tags: ["Webshop", "UX", "Performance-optimering", "Shopify", "Kodeoptimering", "SEO", "B2C", "Redduceret CO2-aftryk"],
      link: "#"
    },
  ];

  return (
    <Container>

      <section className="mb-16">
        <h1 className="urbanist text-[80px] mb-4">Cases</h1>
        <p className="urbanist text-[30px] mb-6">
          Hos Resurge specialiserer vi os i skræddersyede, energieffektive
          webløsninger. Se et udpluk af vores cases herunder.
        </p>
      </section>

      <section className="grid gap-12 md:grid-cols-2">
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
      </section>
    </Container>
  );
}

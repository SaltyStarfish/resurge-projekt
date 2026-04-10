import FiftyFifty from "../components/FiftyFifty";
import Container from "../components/Container";
import placeHolder from "../assets/images/placeholder.png";

function BlogView() {
  const blogPosts = [
    {
      type: "billede-tekst",
      billedeSrc: placeHolder,
      billedeAlt: "Blogindlæg 1",
      titel: "5 tips til at forbedre dit websites performance",
      tekst: "Optimer loadtid, konvertering og brugeroplevelsen med simple greb. Selv små ændringer kan gøre en stor forskel, både for dine brugere og dit klimaaftryk.",
      cta: { to: "/blog/fem-tips", label: "Læs mere" },
      reverse: false,
    },
    {
      type: "billede-tekst",
      billedeSrc: placeHolder,
      billedeAlt: "Blogindlæg 2",
      titel: "Få mere ud af dit website uden at sprænge budgettet",
      tekst: "Du behøver ikke nødvendigvis et stort budget for at forbedre dit website. Vi guider her til, hvor du får mest ud af din indsats.",
      cta: { to: "#", label: "Læs mere" },
      reverse: true,
    },
    {
      type: "billede-tekst",
      billedeSrc: placeHolder,
      billedeAlt: "Blogindlæg 3",
      titel: "Derfor er et hurtigt website også et grønnere website",
      tekst: "Jo hurtigere dit website er, desto mindre energi udleder det. Se hvordan performance-optimering samtidig giver dig et mindre klimatungt site.",
      cta: { to: "#", label: "Læs mere" },
      reverse: false,
    },
  ];

  return (
    <Container>
      <div className="flex flex-col w-full max-w-[1102px] mx-auto px-4    sm:px-6 md:px-0 my-[105px]">
          <h1 className="font-h1 font-medium">Inspiration og guides</h1>
            <p className="urbanist font-intro mt-[40px]">
              Her har vi samlet vores praktiske tips til et hurtigere og mere energieffektivt website
            </p>

          {/* Blogoversigt */}
          <div className="flex flex-col gap-[80px] mt-[105px]">
            {blogPosts.map((post, i) => (
              <FiftyFifty key={i} type={post.type} indhold={post} reverse={post.reverse} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default BlogView;
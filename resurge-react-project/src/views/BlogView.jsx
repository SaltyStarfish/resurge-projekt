import FiftyFifty from "../components/FiftyFifty"
import Container from "../components/Container"
import CtaLink from "../components/CtaLink"
import placeHolder from "../assets/images/placeholder.png"

function BlogView() {

  return (
    <div className="blog">
      <Container>
        <section className="blog-intro">
          <h1 className="urbanist font-medium text-[80px] mb-4">Inspiration og guides</h1>
          <p className="urbanist font-medium text-[30px] mb-6">Her har vi samlet vores praktiske tips til et hurtigere og mere energieffektivt website</p>
        </section>
      
        <div className="space-y-20">
        {/* Blogindlæg 1 */}
          <FiftyFifty>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <img src={placeHolder} alt="Blogindlæg 1" className="w-full max-w-[500px] h-[500px]object-cover mx-auto" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="urbanist font-medium text-[40px] mb-4">5 tips til at forbedre dit websites performance</h3>
              <p>Optimer loadtid, konvertering og brugeroplevelsen med simple greb. Selv små ændringer kan gøre en stor forskel, både for dine brugere og dit klimaaftryk.</p>
              <CtaLink to="/blog/fem-tips" className="laes-mere">Læs mere</CtaLink>
            </div>
          </FiftyFifty>

        {/* Blogindlæg 2 */}
        <FiftyFifty reverse>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <img src={placeHolder} alt="Blogindlæg 2" className="w-full max-w-[500px] h-[500px]object-cover mx-auto" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="urbanist font-medium text-[40px] mb-4">Få mere ud af dit website uden at sprænge budgettet</h3>
            <p>Du behøver ikke nødvendigvis et stort budget for at forbedre dit website. Vi guider her til, hvor du får mest ud af din indsats.</p>
            <CtaLink to="#" className="laes-mere">Læs mere</CtaLink>
          </div>
        </FiftyFifty>

        {/* Blogindlæg 3 */}
        <FiftyFifty>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <img src={placeHolder} alt="Blogindlæg 3" className="w-full max-w-[500px] h-[500px]object-cover mx-auto" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="urbanist font-medium text-[40px] mb-4">Derfor er et hurtigt website også et grønnere website</h3>
            <p>Jo hurtigere dit website er, desto mindre energi udleder det. Se hvordan performance-optimering samtidig giver dig et mindre klimatungt site.</p>
            <CtaLink to="#" className="laes-mere">Læs mere</CtaLink>
          </div>
        </FiftyFifty>
        </div>
        </Container>
      </div>
    );
  }

export default BlogView
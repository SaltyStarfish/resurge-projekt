import FiftyFifty from "../components/FiftyFifty"
import placeHolder from "../assets/images/placeholder.png"

function BlogView() {

  return (
    <div className="blog">
        <section className="blog-intro">
          <h1>Inspiration og guides</h1>
          <p>Her har vi samlet vores praktiske tips til et hurtigere og mere energieffektivt website</p>
        </section>

        {/* Blogindlæg 1 */}
        <FiftyFifty>
          <div>
            <img src={placeHolder} alt="Blogindlæg 1" className="w-[500px] h-[500px] object-cover" />
          </div>
          <div>
            <h3>5 tips til at forbedre dit websites performance</h3>
            <p>Optimer loadtid, konvertering og brugeroplevelsen med simple greb. Selv små ændringer kan gøre en stor forskel, både for dine brugere og dit klimaaftryk.</p>
            <a href="blog/fem-tips" className="laes-mere">Læs mere →</a>
          </div>
        </FiftyFifty>

        {/* Blogindlæg 2 */}
        <FiftyFifty reverse>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3>Få mere ud af dit website uden at sprænge budgettet</h3>
            <p>Du behøver ikke nødvendigvis et stort budget for at forbedre dit website. Vi guider her til, hvor du får mest ud af din indsats.</p>
            <a href="#" className="laes-mere">Læs mere →</a>
          </div>
          <div>
            <img src={placeHolder} alt="Blogindlæg 1" className="w-[500px] h-[500px] object-cover" />
          </div>
        </FiftyFifty>

        {/* Blogindlæg 3 */}
        <FiftyFifty>
          <div>
            <img src={placeHolder} alt="Blogindlæg 1" className="w-[500px] h-[500px] object-cover" />
          </div>
          <div>
            <h3>Få mere ud af dit website uden at sprænge budgettet</h3>
            <p>Jo hurtigere dit website er, desto mindre energi udleder det. Se hvordan performance-optimering samtidig giver dig et mindre klimatungt site.</p>
            <a href="#" className="laes-mere">Læs mere →</a>
          </div>
        </FiftyFifty>
      </div>
    );
  }

export default BlogView
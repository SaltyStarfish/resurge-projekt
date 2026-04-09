// Husk at importere alle Links og Components, der referes til
import PriceCardItem from './PriceCardItem';
// import logo from '../assets/images/placeholder.png';
import bgOptimering from "../assets/images/card-optimering.svg"
import bgHjemmeside from "../assets/images/card-hjemmeside.svg"
import bgWebshop from "../assets/images/card-webshop.svg"
import ScrollableCards from './ScrollableCardSection';


function ScrollablePriceCards() {

const cards = [
  {
    image: bgOptimering, 
    title: "Performance-optimering",
    indhold: "Få optimeret din eksisterende hjemmeside. Vi arbejder med billed-optimering, video-optimering, kode-optimering m.m. for at gøre din hjemmeside hurtigere og forbedre brugeroplevelsen, så du rangerer bedre på Google og får flere kunder.",
    pris: "Pris fra 999,-",
  },
  {
    image: bgHjemmeside, 
    title: "Ny hjemmeside",
    indhold: "Personlig tilpasset hjemmeside til din virksomhed og din budget. Få en platform til at vise din virksomhed frem, gøre kontakten nem, oplyse om åbningstider, etc. Kom med dine egne ideer, eller lad os hjælpe med alt fra indhold, branding og opsætning til programmering og performance.",
    pris: "Pris fra 99,-/md. + 2999,-",
  },
  {
    image: bgWebshop, 
    title: "Ny webshop",
    indhold: "Skræddersyet webshop til din virksomhed og dine kunder. Vi hjælper dig med alt fra tilkobling af lagerstyring og betalingsløsninger til branding, programmering, performance og optimeret salgsflow. Lad os hjælpe dig med at skabe en brugervenlig og effektiv online butik.",
    pris: "Pris fra 199,-/md. + 3999,-",
  },
];

  return (
    <>
      <ScrollableCards>
        {cards.map((card, index) => (
          <PriceCardItem key={index} {...card}/>
        ))}
      </ScrollableCards>
    </>
  )
}

export default ScrollablePriceCards
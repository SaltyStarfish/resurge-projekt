// Husk at importere alle Links og Components, der referes til
import PriceCardItem from '../components/PriceCardItem';
import logo from '../assets/images/placeholder.png';


function PriceCardSection() {

const cards = [
  {
    image: logo, 
    title: "Performance-optimering",
    indhold: "Få optimeret din eksisterende hjemmeside. Vi arbejder med billed-optimering, video-optimering, kode-optimering m.m. for at gøre din hjemmeside hurtigere og forbedre brugeroplevelsen, så du rangerer bedre på Google og får flere kunder.",
    pris: "Pris fra 999,-",
  },
  {
    image: logo, 
    title: "Ny hjemmeside",
    indhold: "Personlig tilpasset hjemmeside til din virksomhed og din budget. Få en platform til at vise din virksomhed frem, gøre kontakten nem, oplyse om åbningstider, etc. Kom med dine egne ideer, eller lad os hjælpe med alt fra indhold, branding og opsætning til programmering og performance.",
    pris: "Pris fra 99,-/md. + 2999,-",
  },
  {
    image: logo, 
    title: "Ny webshop",
    indhold: "Skræddersyet webshop til din virksomhed og dine kunder. Vi hjælper dig med alt fra tilkobling af lagerstyring og betalingsløsninger til branding, programmering, performance og optimeret salgsflow. Lad os hjælpe dig med at skabe en brugervenlig og effektiv online butik.",
    pris: "Pris fra 199,-/md. + 3999,-",
  },
];

  return (
    <>
      <div className='flex gap-3 md:gap-7.5 overflow-x-auto hide-scrollbar px-6 md:px-12 lg:px-20'>
        {cards.map((card, index) => (
          <PriceCardItem key={index} {...card}/>
        ))}
      </div>
    </>
  )
}

export default PriceCardSection
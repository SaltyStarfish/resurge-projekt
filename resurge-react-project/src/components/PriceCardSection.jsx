// Husk at importere alle Links og Components, der referes til
import PriceCardItem from '../components/PriceCardItem';
import logo from '../assets/images/placeholder.png';


function PriceCardSection() {

const cards = [
  {
    image: logo, 
    title: "Performance-optimering",
    indhold: "Få optimeret din eksisterende hjemmeside. Vi arbejder med billed-optimering, video-optimering, kode-optimering for at gøre din hjemmeside hurtigere.",
    pris: "Pris fra 999,-",
  },
  {
    image: logo, 
    title: "Ny hjemmeside",
    indhold: "Personlig tilpasset hjemmeside til din virksomhed og dine kunder. Kom med dine egne ideer, eller lad os hjælpe med alt fra indhold og branding til programmering og performance.",
    pris: "Pris fra 99,-/md. + 2999,-",
  },
  {
    image: logo, 
    title: "Ny webshop",
    indhold: "Skræddersyet webshop til din virksomhed og dine kunder.",
    pris: "Pris fra 199,-/md. + 3999,-",
  },
];

  return (
    <>
      <div className='flex gap-3 md:gap-7.5 overflow-x-auto hide-scrollbar'>
        {cards.map((card, index) => (
          <PriceCardItem key={index} {...card}/>
        ))}
      </div>
    </>
  )
}

export default PriceCardSection
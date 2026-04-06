// Husk at importere alle Links og Components, der referes til
import PriceCardItem from '../components/PriceCardItem'

import logo from '../assets/images/placeholder.png';


function YdelserView() {

const cards = [
  {
    image: logo, 
    title: "Titel 1",
    tag: "tag 1",
  },
  {
    image: logo, 
    title: "Titel 2",
    tag: "tag 2",
  },
  {
    image: logo, 
    title: "Titel 3",
    tag: "tag 3",
  },
];

  return (
    <>
      {/* Opret sidens indhold herunder som "normal HTML" eller referer til components*/}
      <h1>Ydelser</h1>
      {cards.map((card, index) => (
        <PriceCardItem key={index} {...card}/>
      ))}
    </>
  )
}

export default YdelserView

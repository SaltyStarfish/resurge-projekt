import { Link } from "react-router-dom";

//dette er en komponent
export default function PriceCardItem(card) {

  return (
    <div className="flex flex-col w-70 bg-gray-200 p-1 m-4 rounded">
      <img src={card.image} alt={card.title} />
      <h2>{card.title}</h2>
      <p>{card.tag}</p>
    </div>
  )
}

/* 
NOTES:
- HUSK at importere Link øverst på siden, hvis du vil bruge interne links!
- Se hvilke paths, der kan linkes til i App.jsx-filen

- Tailwind cheat sheet:
https://flowbite.com/tools/tailwind-cheat-sheet/

eller

https://nerdcave.com/tailwind-cheat-sheet
*/

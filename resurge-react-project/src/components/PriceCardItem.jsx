
//dette er en komponent
export default function PriceCardItem(card) {

  return (
    <div className="flex flex-col flex-shrink-0 w-70 md:w-100 max-w-full rounded-xl relative overflow-hidden p-5 md:p-10 shadow-md">
      <img className="absolute inset-0 object-cover -z-1 w-full h-full" src={card.image} alt={card.title} />
      <h2 className="font-h3 leading-tight mb-2">{card.title}</h2>
      <p className="text-md leading-normal md:text-xl mb-4">{card.indhold}</p>
      <p className="text-lg leading-normal md:text-[26px] font-semibold mt-auto">{card.pris}</p>
    </div>
  )
}

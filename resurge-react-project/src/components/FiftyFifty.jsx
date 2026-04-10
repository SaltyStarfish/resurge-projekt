import CtaLink from "./CtaLink";

export default function FiftyFifty({ type, reverse = false, indhold, className = "" }) {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-stretch gap-12 md:gap-20 ${className}`}>
      {type === "billede-tekst" && (
        <>
          <div className="w-full md:w-1/2 h-full">
            <img src={indhold.billedeSrc} alt={indhold.billedeAlt} className="w-full h-full object-contain" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
            <h3 className="font-h3 font-medium">{indhold.titel}</h3>
            <p className="font-body">{indhold.tekst}</p>
            {indhold.cta && <CtaLink to={indhold.cta.to}>{indhold.cta.label}</CtaLink>}
          </div>
        </>
      )}
      {type === "tekst-tekst" && (
        <>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h3 className="font-h3 font-medium">{indhold.titelVenstre}</h3>
            <p className="font-body">{indhold.tekstVenstre}</p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h3 className="font-h3 font-medium">{indhold.titelHøjre}</h3>
            <p className="font-body">{indhold.tekstHøjre}</p>
          </div>
        </>
      )}
      {type === "billede-billede" && (
        <>
          <div className="w-full md:w-1/2">
            <h3 className="font-h3 font-medium mb-[20px]">{indhold.billedeVenstre.titelVenstre}</h3>
            <img src={indhold.billedeVenstre.src} alt={indhold.billedeVenstre.alt} className="w-full h-auto object-contain" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="font-h3 font-medium mb-[20px]">{indhold.billedeHøjre.titelHøjre}</h3>
            <img src={indhold.billedeHøjre.src} alt={indhold.billedeHøjre.alt} className="w-full h-auto object-contain" />
          </div>
        </>
      )}
    </div>
  );
}
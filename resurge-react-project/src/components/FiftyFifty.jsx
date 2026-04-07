import CtaLink from "./CtaLink";

export default function FiftyFifty({ type, data, reverse = false, className = "" }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${reverse ? "md:flex-row-reverse" : ""} ${className}`}
    >
      {type === "billede-tekst" && (
        <>
          <div className="w-full md:w-1/2">
            <img
              src={data.billedeSrc}
              alt={data.billedeAlt}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl md:text-4xl font-medium">{data.titel}</h3>
            <p className="text-base md:text-lg">{data.tekst}</p>
            {data.cta && <CtaLink to={data.cta.to}>{data.cta.label}</CtaLink>}
          </div>
        </>
      )}

    </div>
  );
}
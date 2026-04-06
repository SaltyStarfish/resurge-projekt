import CtaLink from "./CtaLink";

export default function CaseCard({ image, tags = [], title, description, link }) {
  return (
    <div className="flex flex-col">
      <img src={image} alt={title} className="max-w-500 max-h-500 object-cover" />
      
      {tags.length > 0 && (
        <p className="p-4 font-medium text-[#20px] italic verdana">
          {tags.join(" | ")}
        </p>
        )}

      <div className="p-4 flex flex-col items-center text-left">
        <h3 className="urbanist font-medium text-[40px] mb-4">{title}</h3>
        <p>{description}</p>

        <CtaLink to={link}>Læs mere</CtaLink>
      </div>
    </div>
  );
}   
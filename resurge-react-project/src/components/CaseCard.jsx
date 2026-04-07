import CtaLink from "./CtaLink";

export default function CaseCard({ image, tags = [], title, description, link }) {
  return (
    <div className="flex flex-col">
      <img src={image} alt={title} className="w-full max-w-[500px] max-h-[500px] object-cover mx-auto" />
      
      {tags.length > 0 && (
        <p className="p-4 font-medium text-[#20px] italic verdana">
          {tags.join(" | ")}
        </p>
        )}

      <div className="p-4 flex flex-col items-start text-left">
        <h3 className="urbanist font-medium text-[40px] mb-4">{title}</h3>
        <p>{description}</p>

        <CtaLink to={link}>Læs mere</CtaLink>
      </div>
    </div>
  );
}   
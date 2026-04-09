import CtaLink from "./CtaLink";

export default function CaseCard({ image, tags = [], title, description, link }) {
  return (
    <div className="flex flex-col">
      <img src={image} alt={title} className="w-full w-[495] h-[374px] object-cover object-center mx-auto" />
      
      {tags.length > 0 && (
        <p className="font-tag font-medium mt-[40px]">
          {tags.join(" | ")}
        </p>
        )}

      <div className="p-4 flex flex-col items-start text-left">
        <h3 className="font-h3 font-medium mt-[60px]">{title}</h3>
        <p className="font-body mt-[20px]">{description}</p>

        <div className="mt-[40px]">
          <CtaLink to={link}>Læs mere</CtaLink>
        </div>
      </div>
    </div>
  );
} 
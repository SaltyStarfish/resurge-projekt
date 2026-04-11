import CtaLink from "./CtaLink";

export default function CaseCard({ image, tags = [], title, description, link }) {
  return (
    <div className="flex flex-col">
      <img src={image} alt={title} loading="lazy" className="w-full max-w-[495px] aspect-[4/3] rounded-[20px] object-cover object-center mx-auto" />
      
      {tags.length > 0 && (
        <p className="font-tag font-medium mt-[20px]">
          {tags.join(" | ")}
        </p>
        )}

      <div className=" flex flex-col items-start text-left">
        <h3 className="font-h3 font-medium mt-[30px]">{title}</h3>
        <p className="font-body mt-[20px]">{description}</p>

        <div className="mt-[20px]">
          <CtaLink to={link}>Læs mere</CtaLink>
        </div>
      </div>
    </div>
  );
} 
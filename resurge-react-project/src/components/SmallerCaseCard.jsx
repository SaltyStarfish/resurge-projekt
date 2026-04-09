import CtaLink from "./CtaLink";

export default function SmallerCaseCard({ image, tags = [], title, description, link }) {
  return (
    <div className="flex flex-col">
      <img src={image} alt={title} className="w-full w-[495] h-[374px] rounded-[20px] object-cover object-center mx-auto" />
      
      {tags.length > 0 && (
        <p className="font-tag font-medium mt-[40px]">
          {tags.join(" | ")}
        </p>
        )}

      <div className="flex flex-col items-start text-left">
        
        <div className="mt-10">
          <CtaLink to={link}><h3 className="inline font-h3 font-medium">{title}</h3></CtaLink>
        </div>
      </div>
    </div>
  );
} 
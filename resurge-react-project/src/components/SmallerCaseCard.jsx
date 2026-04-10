import CtaLink from "./CtaLink";

export default function SmallerCaseCard({ image, tags = [], title, link }) {
  return (
    <div className="flex-grow-1 flex flex-col">
      <img src={image} alt={title} className="w-70 md:w-100 max-w-full h-[374px] rounded-[20px] object-cover object-center mx-auto" />
      
      {tags.length > 0 && (
        <p className="font-tag font-medium mt-5 md:mt-10">
          {tags.join(" | ")}
        </p>
        )}
        
        <div className="mt-auto">
          <CtaLink to={link}><h3 className="inline font-h3 font-medium">{title}</h3></CtaLink>
        </div>
    </div>
  );
} 
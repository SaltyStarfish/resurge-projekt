import smallPlaceholder from "../assets/images/SmallPlaceholder.png";
import placeholder from "../assets/images/placeholder.png";

export default function Værdier({
	blocks = [
		{ title: "Fleksible løsninger", imageSrc: smallPlaceholder, imageAlt: "", text: "tekst 1" },
		{ title: "Høj performance", imageSrc: smallPlaceholder, imageAlt: "", text: "tekst 2" },
		{ title: "Mindre klimaaftryk", imageSrc: placeholder, imageAlt: "", text: "tekst 3" },
	],
}) {
	return (
		<div className="parent-container w-full max-w-[1102px] mx-auto">
			{blocks.map((block, index) => (
				<div key={index} className="child-container w-full flex flex-col items-start">
					<div className="heading-container w-full text-left">
						<h2 className="urbanist font-medium text-[20px] md:text-[40px] leading-tight w-full max-w-[694px] text-left">{block.title}</h2>
					</div>
					<div className={`image-container w-full ${block.imageSpacing || "pt-[80px] pb-[40px]"}`}>
						{block.imageSrc ? (
							<img src={block.imageSrc} alt={block.imageAlt || ""} />
						) : null}
					</div>
					<div className="text-container w-full text-left">
						<p className="verdana text-[12px] xl:text-[20px] text-gray-700 w-full max-w-[694px] text-left">{block.text}</p>
					</div>
				</div>
			))}
		</div>
	);
}

import infographic2 from "../assets/images/inforgraphic 2 - 2 stack.png";
import infographic3 from "../assets/images/infographic 3 - long line.png";

export default function Værdier({
	blocks = [
		{ title: "vores værdier", imageSrc: infographic2, imageAlt: "" },
		{ title: "vores grundsøjler", imageSrc: infographic3, imageAlt: ""},
	],

}) {
	return (
		<div className="parent-container w-full max-w-[1102px] mx-auto">
			{blocks.map((block, index) => (
				<div key={index} className="child-container w-full flex flex-col items-start">
					<div className="heading-container w-full text-left">
						<h2 className="urbanist font-medium text-[60px] leading-tight w-full max-w-[694px] text-left">{block.title}</h2>
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

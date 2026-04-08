import { useEffect, useState } from "react";
import info2x2_1 from "../assets/images/info2x2.1.svg";
import info2x2_2 from "../assets/images/info2x2,2.svg";
import infoLine1 from "../assets/images/infoline.svg";

export default function Værdier({
	blocks = [
		{ title: "vores værdier", imageSrc: info2x2_2, mobileImageSrc: info2x2_1, imageAlt: "infographic om vores værdier" },
		{ title: "vores grundsøjler", imageSrc: infoLine1, imageAlt: "infographic om vores grundsøjler" },
	],

}) {
	// Holder styr på om viewport er mobil-størrelse, så billedkilden kan skiftes pr. blok.
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Holder en aktiv media query-lytter ved 768px og derunder.
		const mobileQuery = window.matchMedia("(max-width: 768px)");
		const onChange = (event) => setIsMobile(event.matches);

		// Sætter starttilstand ved mount og opdaterer, når breakpoint ændrer sig.
		setIsMobile(mobileQuery.matches);
		mobileQuery.addEventListener("change", onChange);

		// Fjerner lytteren igen, når komponenten unmountes.
		return () => mobileQuery.removeEventListener("change", onChange);
	}, []);

	return (
		<div className="parent-container w-full max-w-[1102px] mx-auto">
			{blocks.map((block, index) => (
				<div key={index} className="child-container w-full flex flex-col items-start">
					<div className="heading-container w-full text-left">
						<h2 className="font-h2 font-medium w-full max-w-[694px] text-left">{block.title}</h2>
					</div>
					<div className={`image-container w-full flex justify-center md:justify-start ${block.imageSpacing || "pt-[80px] pb-[40px]"}`}>
						{/* Hvis der findes en mobil-variant, bruges den på mobil; ellers bruges standard imageSrc. */}
						{(isMobile && block.mobileImageSrc ? block.mobileImageSrc : block.imageSrc) ? (
							<img src={isMobile && block.mobileImageSrc ? block.mobileImageSrc : block.imageSrc} alt={block.imageAlt || ""} className="block max-w-full h-auto" />
						) : null}
					</div>
					<div className="text-container w-full text-left">
						<p className="font-body w-full max-w-[694px] text-left">{block.text}</p>
					</div>
				</div>
			))}
		</div>
	);
}

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import boks1 from "../assets/images/boks1.webp";
import boks2 from "../assets/images/boks2.webp";
import boks3 from "../assets/images/boks3.webp";
import boks4 from "../assets/images/boks4.webp";
import lilleboks1 from "../assets/images/lilleboks1.webp";
import lilleboks2 from "../assets/images/lilleboks2.webp";
import lilleboks3 from "../assets/images/lilleboks3.webp";
import lilleboks4 from "../assets/images/lilleboks4.webp";

// Default desktop and mobile arrays

const desktopItems = [
  	{ imageSrc: boks1, imageAlt: "Optimal performance link", linkText: "Optimal performance", linkColor: "black", linkTo: "/om-os#performance-optimering" },
  	{ imageSrc: boks2, imageAlt: "Skræddersyede løsninger link", linkText: "Skræddersyede løsninger", linkColor: "white", linkTo: "/om-os#skraeddersyede-losninger" },
  	{ imageSrc: boks3, imageAlt: "Konkurrence dygtige priser link", linkText: "Konkurrence dygtige priser", linkColor: "black", linkTo: "/ydelser#vores-mest-populaere-losninger" },
  	{ imageSrc: boks4, imageAlt: "Reduceret CO2-aftryk link", linkText: "Reduceret CO2-aftryk", linkColor: "white", linkTo: "/om-os#reduceret-co2-aftryk" },
];
const mobileItems = [
	{ imageSrc: lilleboks1, imageAlt: "optimal performance link", linkText: "optimal performance", linkColor: "white", linkTo: "/om-os#performance-optimering" },
	{ imageSrc: lilleboks2, imageAlt: "Skræddersyede løsninger link", linkText: "Skræddersyede løsninger", linkColor: "black", linkTo: "/om-os#skraeddersyede-losninger" },
	{ imageSrc: lilleboks3, imageAlt: "Konkurrence dygtige priser link", linkText: "Konkurrence dygtige priser", linkColor: "white", linkTo: "/ydelser#vores-mest-populaere-losninger" },
	{ imageSrc: lilleboks4, imageAlt: "Reduceret CO2-aftryk link", linkText: "Reduceret CO2-aftryk", linkColor: "black", linkTo: "/om-os#reduceret-co2-aftryk" },
];

export default function VærdierForside() {
 
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const mobileQuery = window.matchMedia("(max-width: 768px)");
		const onChange = (event) => setIsMobile(event.matches);
		setIsMobile(mobileQuery.matches);
		mobileQuery.addEventListener("change", onChange);
		return () => mobileQuery.removeEventListener("change", onChange);
	}, []);

	const shownItems = isMobile ? mobileItems : desktopItems;

	return (
		<div className="content-container w-full max-w-[1102px] mx-auto">
			<h2 className="font-h2 font-medium w-full max-w-[694px] mb-8 text-left">Hos os for du...</h2>
			{!isMobile ? (
				<div className="flex flex-row w-full gap-[34px]">
					{shownItems.map((item, idx) => (
						<div key={idx} className="relative flex-1 min-w-0 max-w-[250px] aspect-[250/88] group min-w-[150px]">
							<img
								src={item.imageSrc}
								alt={item.imageAlt}
								className="w-full h-full object-cover rounded-[16px] transition-all duration-100 group-hover:border-white group-hover:border-[2px]"
								draggable="false"
							/>
							<p></p>
							<Link
								to={item.linkTo}
								aria-label={item.linkText}
								className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-center
									${item.linkColor === "white" ? "text-white" : "text-black"}
									${isMobile ? "text-sm no-underline min-w-[120px]" : "text-base no-underline min-w-[220px]"}`}
								tabIndex={0}
							>
								{item.linkText}
							</Link>
						</div>
					))}
				</div>
			) : (
				<div className="flex flex-row w-full gap-[34px]">
					{[0, 1].map(col => (
						<div key={col} className="flex flex-col gap-[30px] flex-1 min-w-0">
							{shownItems.slice(col * 2, col * 2 + 2).map((item, idx) => (
								<div key={idx} className="relative max-w-[250px] aspect-[250/88] w-full min-w-[150px] group">
									<img
										src={item.imageSrc}
										alt={item.imageAlt}
										className="w-full h-full object-cover rounded-[16px] transition-all duration-100 group-hover:border-white group-hover:border-[5px]"
										draggable="false"
									/>
									<p></p>
									<Link
										to={item.linkTo}
										aria-label={item.linkText}
										className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-center
											${item.linkColor === "white" ? "text-white" : "text-black"}
											${isMobile ? "text-sm no-underline min-w-[120px]" : "text-base no-underline min-w-[220px]"}`} //størelses forhold på mobil og desk//
										tabIndex={0}
									>
										{item.linkText}
									</Link>
								</div>
							))}
						</div>
					))}
				</div>
			)}
		</div>
	);
}



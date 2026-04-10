

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import boks1 from "../assets/images/boks1-69d89c357f19f-69d8a4f8652db.webp";
import boks2 from "../assets/images/boks2-69d89c316d34f-69d8a4f81b5b9.webp";
import boks3 from "../assets/images/boks-3-69d89c3e707f7-69d8a4f81b6bb.webp";
import boks4 from "../assets/images/boks-4-69d89c38d55fc-69d8a4f85bece.webp";
import boks1lille from "../assets/images/boks1-lille-69d89c357f19f-69d8a4f8652db.webp";
import boks2lille from "../assets/images/boks2-lille-69d89c316d34f-69d8a4f81b5b9.webp";
import boks3lille from "../assets/images/boks3-lille-69d89c3e707f7-69d8a4f81b6bb.webp";
import boks4lille from "../assets/images/boks4-lille-69d89c38d55fc-69d8a4f85bece.webp";


// Default desktop and mobile arrays
const defaultDesktopItems = [
	{ imageSrc: boks1, imageAlt: "Optimal performance link", linkText: "Optimal performance", linkColor: "black", linkTo: "/om-os#performance-optimering" },
	{ imageSrc: boks2, imageAlt: "Skræddersyede løsninger link", linkText: "Skræddersyede løsninger", linkColor: "white", linkTo: "/om-os#skraeddersyede-losninger" },
	{ imageSrc: boks3, imageAlt: "Konkurrence dygtige priser link", linkText: "Konkurrence dygtige priser", linkColor: "black", linkTo: "/ydelser#vores-mest-populaere-losninger" },
	{ imageSrc: boks4, imageAlt: "Reduceret CO2-aftryk link", linkText: "Reduceret CO2-aftryk", linkColor: "white", linkTo: "/om-os#reduceret-co2-aftryk" },
];
const defaultMobileItems = [
	{ imageSrc: boks1lille, imageAlt: "optimal performance link", linkText: "optimal performance", linkColor: "white", linkTo: "/om-os#performance-optimering" },
	{ imageSrc: boks2lille, imageAlt: "Skræddersyede løsninger link", linkText: "Skræddersyede løsninger", linkColor: "black", linkTo: "/om-os#skraeddersyede-losninger" },
	{ imageSrc: boks3lille, imageAlt: "Konkurrence dygtige priser link", linkText: "Konkurrence dygtige priser", linkColor: "white", linkTo: "/ydelser#vores-mest-populaere-losninger" },
	{ imageSrc: boks4lille, imageAlt: "Reduceret CO2-aftryk link", linkText: "Reduceret CO2-aftryk", linkColor: "black", linkTo: "/om-os#reduceret-co2-aftryk" },
];

export default function VærdierForside({
	title = "vores grundsøjler",
	items = defaultDesktopItems,
	mobileItems = defaultMobileItems,
}) {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const shownItems = isMobile ? mobileItems : items;

	return (
		<div className="content-container w-full max-w-[1102px] mx-auto">
			<h2 className="font-h2 font-medium w-full max-w-[694px] mb-8 text-left">{title}</h2>
			{!isMobile ? (
			  <div className="flex flex-row w-full gap-[34px]">
			    {shownItems.map((item, idx) => (
			      <div key={idx} className="relative flex-1 min-w-0 max-w-[250px] aspect-[250/88]">
			        <img
			          src={item.imageSrc}
			          alt={item.imageAlt}
			          className="w-full h-full object-cover rounded-[16px]"
			          draggable="false"
			        />
			        <Link
			          to={item.linkTo}
			          aria-label={item.linkText}
			          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-h4 font-semibold underline ${item.linkColor === "white" ? "text-white" : "text-black"}`}
			          style={{ textDecoration: "underline" }}
			          tabIndex={0}
			        >
			          {item.linkText}
			        </Link>
			      </div>
			    ))}
			  </div>
			) : (
			  <div className="flex flex-row w-full gap-[34px]">
			    {/* Two columns, each with two items */}
			    {[0, 1].map(col => (
			      <div key={col} className="flex flex-col gap-[34px] flex-1 min-w-0">
			        {shownItems.slice(col * 2, col * 2 + 2).map((item, idx) => (
			          <div key={idx} className="relative max-w-[250px] aspect-[250/88] w-full">
			            <img
			              src={item.imageSrc}
			              alt={item.imageAlt}
			              className="w-full h-full object-cover rounded-[16px]"
			              draggable="false"
			            />
			            <Link
			              to={item.linkTo}
			              aria-label={item.linkText}
			              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-h4 font-semibold underline ${item.linkColor === "white" ? "text-white" : "text-black"}`}
			              style={{ textDecoration: "underline" }}
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



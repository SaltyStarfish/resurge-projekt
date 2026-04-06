import { Link } from "react-router-dom";

export default function Sektion3({
    blocks = [
        { imageSrc: "", imageAlt: "", title: "Skræddersyede løsninger", text: "tekst 1", link: "/kontakt", linkText: "Kontakt os", reverse: false },
        { imageSrc: "", imageAlt: "", title: "Performanceoptimering", text: "tekst 2", reverse: true },
        { imageSrc: "", imageAlt: "", title: "Reduceret CO2-aftryk", text: "tekst 3", reverse: false, imageSize: "w-[490px] h-[490px]", contentSize: "min-w-[490px]" },
    ],
}) {
    return (
        <div className="parent-container flex justify-center items-center max-w-[1102px] min-w-[1102px] mx-auto my-12 flex-col">
            {blocks.map((block, index) => (
                <div
                    key={index}
                    className={`child-container flex items-start gap-[110px] min-w-[1102px] mb-8 ${
                        block.reverse ? "flex-row-reverse" : "flex-row"
                    }`}
                >
                    <div
                        className={`image-container bg-blue-300 ${block.imageSize || "w-[250px] h-[250px]"} flex items-center justify-center`}
                    >
                        {block.imageSrc ? (
                            <img src={block.imageSrc} alt={block.imageAlt || ""} className="w-full h-full object-contain" />
                        ) : null}
                    </div>
                    <div className={`content-container flex flex-col flex-1 gap-2 ${block.contentSize || "min-w-[694px]"} items-start`}>{/* bruger || for at alve en adskilling, er der ikke nogen størrelser på content array, så  bruger den de values der kommer bagefter */}
                        <h2 className="text-2xl font-semibold">{block.title}</h2>
                        <p className="text-base text-gray-700">{block.text}</p>
                        {block.link && (
                            <Link to={block.link} className="text-blue-600 underline mt-2">{block.linkText || "Læs mere"}</Link>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

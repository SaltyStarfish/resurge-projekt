import { Link } from "react-router-dom";
import smallPlaceholder from "../assets/images/SmallPlaceholder.png";
import placeholder from "../assets/images/placeholder.png";

export default function Sektion3({
    blocks = [
        { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Skræddersyede løsninger", 
            text: "Alt for mange bureauer arbejder med tunge løsninger, som ikke er tilpasset den enkelte virksomhed. Som indsamler data, der aldrig bliver brugt, men kun fylder og bruger strøm. Eller udliciterer webproduktionen til andre lande, hvor du mister kontrollen og overblikket. Den tendens vil vi gøre op med\n Hos Resurge mener vi, at tingene skal gøres ordentligt, og til en overkommelig pris. Så du har kontrollen hele vejen igennem og får en webløsning, der er tilpasset dine behov, ikke bare en standardpakke. Websitet skal passe til din virksomhed her og nu og kan udvides, når din virksomhed vokser.",
            reverse: false },
        { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Performanceoptimering", 
            text: "Når det overflødige skæres væk, bliver dit website automatisk lettere og performer bedre. Dertil kommer billed-, video, og typografi optimering, som igen er med til at gøre dit website hurtigere, uden at gå på kompromis med kvaliteten. Vi holder os opdateret på den nyeste teknologi og de bedste værktøjer til at optimere både performance og energiforbrug.", 
            reverse: true },
        { imageSrc: placeholder, imageAlt: "placeholder", title: "Reduceret CO2-aftryk", 
            text: "Klimabevidsthed fylder i arbejdstilgangen hos Resurge, og performance, og CO2-optimering går heldigvis hånd i hånd. Et website vil per definition aldrig blive bæredygtigt, og man siger, at det eneste bæredygtige website er et website, som ikke eksisterer. Med det i mente tror vi, at det mindst bæredygtige website er et website, som ikke opfylder dets formål. Derfor er det vores topprioritet at skabe effektive webløsninger, som skaber værdi for virksomheder og deres kunder. Samtidig arbejder vi aktivt med at gøre websites mindre datatunge for at opnå en bedre brugeroplevelse, højere performance og et mindre CO2-aftryk.", 
            reverse: false, imageSize: "w-full max-w-[490px] aspect-square md:w-[490px] md:h-[490px] md:max-w-none", contentSize: "w-full md:max-w-[490px]" },
        
        { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Aaaa Aaaa - UX/UI-designer", 
            text: "Aaaa designer websites, der konverterer besøgende til kunder. Hun målretter designet til netop dine kunder og gør det flot at kigge på og nemt at finde rundt i. Og så tester hun selvfølgelig, at alt virker og fungerer som tiltænkt inden websitet bliver udgivet til rigtige kunder", 
            reverse: false },
        { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Bbbb Bbbb - Grafiker", 
            text: "Bbbb skaber visuelt tiltalende designs, der fanger opmærksomheden og styrker brandets identitet. Hun arbejder tæt sammen med teamet for at sikre, at designet er både æstetisk og funktionelt, og at det understøtter virksomhedens mål og budskaber.", 
            reverse: true },
        { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Cccc Cccc - Developer", 
            text: "Cccc udvikler robuste og skalerbare løsninger, der sikrer, at dit website fungerer problemfrit. Han arbejder tæt sammen med designteamet for at implementere funktionalitet, der understøtter virksomhedens mål og brugernes behov.", 
            reverse: false },
    ],
}) {
    return (
        <div className="parent-container flex justify-center items-center w-full max-w-[1102px] mx-auto my-12 px-4 sm:px-6 md:px-0 flex-col gap-[44px] md:gap-[105px]">
            {blocks.map((block, index) => (
                <div
                    key={index}
                    className={`child-container w-full flex items-start gap-y-8 md:gap-y-0 md:gap-x-[110px] flex-col ${
                        block.reverse ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                    >
                    <div
                        className={`image-container ${block.imageSize || "w-full max-w-[250px] aspect-square md:w-[250px] md:h-[250px] md:max-w-none"} flex items-start justify-start shrink-0 self-start`}
                    >
                        {block.imageSrc ? (
                            <img src={block.imageSrc} alt={block.imageAlt || ""} className="w-full h-full object-contain object-top" />
                        ) : null}
                    </div>
                    <div className={`content-container flex flex-col flex-1 gap-2 ${block.contentSize || "w-full md:min-w-0"} items-start`}>{/* bruger || for at alve en adskilling, er der ikke nogen størrelser på content array, så  bruger den de values der kommer bagefter */}
                        <h3 className="urbanist font-medium text-[20px] md:text-[40px] leading-tight w-full max-w-[694px]">{block.title}</h3>
                        <p className="verdana text-[12px] xl:text-[20px] text-gray-700 w-full max-w-[694px]">{block.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

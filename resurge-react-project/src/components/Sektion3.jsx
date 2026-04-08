import { Link } from "react-router-dom";
import smallPlaceholder from "../assets/images/SmallPlaceholder.png";
import placeholder from "../assets/images/placeholder.png";
import stine from "../assets/images/stine-69d574236ff46.webp";
import sarah from "../assets/images/sarah-69d5742328640.webp";
import isabella from "../assets/images/isabella-69d5742319ce2.webp";

export default function Sektion3({
    blocks = [
        // om vores værdier black array, med linktekst og reverse positioning//
        { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Skræddersyede løsninger", 
            text: "Alt for mange bureauer arbejder med tunge løsninger, som ikke er tilpasset den enkelte virksomhed. Som indsamler data, der aldrig bliver brugt, men kun fylder og bruger strøm. Eller udliciterer webproduktionen til andre lande, hvor du mister kontrollen og overblikket. Den tendens vil vi gøre op med\n Hos Resurge mener vi, at tingene skal gøres ordentligt, og til en overkommelig pris. Så du har kontrollen hele vejen igennem og får en webløsning, der er tilpasset dine behov, ikke bare en standardpakke. Websitet skal passe til din virksomhed her og nu og kan udvides, når din virksomhed vokser.",
            reverse: false },
        { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Performanceoptimering", 
              textBefore: "Når det overflødige skæres væk, bliver dit website automatisk lettere og performer bedre. Dertil kommer billed-, video- og typografi-optimering, som igen er med til at gøre dit website hurtigere - uden at gå på kompromis med kvaliteten. Vi holder os opdateret på den nyeste teknologi og de bedste værktøjer til at optimere både performance og energiforbrug. Vil du selv i gang? Læs vores, ", 
              linkText: "5 konkrete tips til bedre performance, ",
              linkTo: "/blog/fem-tips",
              textAfter: "hvor vi lister tiltag, du straks kan gå i gang med.",
              reverse: true },
        { imageSrc: placeholder, imageAlt: "placeholder", title: "Reduceret CO2-aftryk", 
            textBefore: "Klimabevidsthed fylder i arbejdstilgangen hos Resurge, og performance- og CO2-optimering går heldigvis hånd i hånd. Et website vil per definition aldrig blive bæredygtigt, og man siger, at det eneste bæredygtige website er et website, som ikke eksisterer. Med det i mente tror vi, at det mindst bæredygtige website er et website, som ikke opfylder dets formål. Derfor er det vores topprioritet at skabe effektive webløsninger, som skaber værdi for virksomheder og deres kunder. Samtidig arbejder vi aktivt med at gøre websites mindre datatunge for at opnå en bedre brugeroplevelse, højere performance og et mindre CO2-aftryk. Du finder konkrete råd i vores",
            linkText: "guides til bedre performance og lavere CO2-aftryk",
            linkTo: "/blog",
            textAfter: ", hvor vi deler praktisk viden og værktøjer.",
            reverse: false },

        //om holdet array, med reverse positioning, med true, false//
        { imageSrc: sarah, imageAlt: "UX designer, Sarah", title: "Sarah - UX/UI-designer", 
            text: "Sarah designer websites, der konverterer besøgende til kunder. Hun målretter designet til netop dine kunder og gør det flot at kigge på og nemt at finde rundt i. Og så tester hun selvfølgelig, at alt virker og fungerer som tiltænkt inden websitet bliver udgivet til rigtige kunder", 
            reverse: true },
        { imageSrc: isabella, imageAlt: "Grafiker, Isabella", title: "Isabella - Grafiker", 
            text: "Isabella skaber visuelt tiltalende designs, der fanger opmærksomheden og styrker brandets identitet. Hun arbejder tæt sammen med teamet for at sikre, at designet er både æstetisk og funktionelt, og at det understøtter virksomhedens mål og budskaber.", 
            reverse: false },
        { imageSrc: stine, imageAlt: "Developer, Stine", title: "Stine - Developer", 
            text: "Stine udvikler robuste og skalerbare løsninger, der sikrer, at dit website fungerer problemfrit. Hun arbejder tæt sammen med designteamet for at implementere funktionalitet, der understøtter virksomhedens mål og brugernes behov.", 
            reverse: true },

        //5 tips black array//
        { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Begræns brugen af video og animationer", 
            text: "Video og animationer er noget af det mest datatunge indhold. Sørg derfor for ikke at sætte dine videoer til autoplay, så de først starter, hvis brugeren ønsker det. Det mindsker både dataforbrug og irritation hos brugerne. Er videoer nødvendige, så hold dem korte eller overvej, om du kan formidle pointerne med små animationer eller andre simple grafiske elementer.", 
            reverse: false },
        { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Optimer dine billeder", 
            text: "Billeder kan hurtigt blive en stor strømsluger, især hvis du ikke sørger for at optimere dem. Brug lette formater som AVIF eller WebP til fotos og SVG til logo og illustrationer. Sørg også for at reducere billedstørrelsen, så de ikke er større, end formatet de skal vises i. Du kan fx komprimere dine billeder online med Squoosh eller bruge et WordPress-plugin såsom ShortPixel.\n Derudover anbefaler vi at bruge lazy-loading, så billederne først indlæses, når de skal vises. Et andet tip er at reducere antallet af farver eller gøre billederne en smule mindre skarpe i kanterne. Overvej også, om antallet af billeder på sitet kan reduceres. Ønsker du at erstatte dem med noget, kan du fx bruge simple grafiske elementer i stedet.", 
            reverse: true },
        { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Vælg mørke og rolige farver", 
            text: "Farver er ikke blot et spørgsmål om æstetik, men de påvirker også din sides performance. Mørkere farver bruger generelt mindre strøm og det er en god idé at undgå store flader, der er helt hvide eller i klare blå nuancer, da disse er de mest energikrævende. Du kan eksempelvis skabe kontrast og blikfang ved at kombinere en mørk baggrund med afdæmpede lyse tekstfarver. Desuden gør et enkelt farvevalg ikke blot siden hurtigere, men det er ofte også mere behageligt at kigge på.", 
            reverse: false },
        { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Brug få og lette skrifttyper", 
            text: "Skrifttyper kan gøre et site tungere, end du måske tror. Vil du gerne optimere så meget som muligt? Så er det værd at overveje en systemskrifttype som fx Arial, Verdana eller Georgia, der allerede findes på de fleste brugeres devices, og derfor ikke skal hentes ned.\n Bruger du webfonts, er det en god idé at holde dig til få forskellige skrifttyper og -vægte og at vælge et komprimeret format som fx WOFF2. Derudover kan du optimere skrifttyperne i Everything Fonts og fjerne overflødige tegn. Det gyldne kompromis mellem æstetik og hurtig loadtid kan være at vælge en webfont til dine overskrifter og en systemfont til brødteksten.", 
            reverse: true },
        { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Gør det nemt at finde rundt", 
            text: "Et simpelt website er et hurtigt website. Holder du siden simpel, så brugeren undgår unødige klik og omveje, giver det både en bedre brugeroplevelse og en bedre performance på dit site.\n Jo færre trin der er til et køb eller at kontakte dig, desto mere sandsynligt er det, at brugeren faktisk gør det. Benyt derfor klare menuer og struktur samt tydelige call to actions, så det er klart for brugeren, hvor der skal klikkes.  ", 
            reverse: false },
        
        //forside block array med readMoreLink og reverse positioning//
        { imageSrc: smallPlaceholder, imageAlt: "placeholder", title: "Gør det nemt at finde rundt", 
            text: "Et simpelt website er et hurtigt website. Holder du siden simpel, så brugeren undgår unødige klik og omveje, giver det både en bedre brugeroplevelse og en bedre performance på dit site.\n Jo færre trin der er til et køb eller at kontakte dig, desto mere sandsynligt er det, at brugeren faktisk gør det. Benyt derfor klare menuer og struktur samt tydelige call to actions, så det er klart for brugeren, hvor der skal klikkes.  ", 
            reverse: false, readMoreLink: "/ydelser" },
        
    ],
}) {
    const inlineTextLinkClasses = "font-inlinelink";
    const readMoreLinkClasses = "inline-block mt-4 font-inlinelink urbanist font-medium no-underline";

    return (
        <div className="parent-container flex justify-center items-center w-full max-w-[1102px] mx-auto my-12 px-4 sm:px-6 md:px-0 flex-col gap-[65px] md:gap-[105px]">
            {blocks.map((block, index) => (
                <div
                    key={index}
                    className={`child-container w-full flex items-start gap-y-[30px] md:gap-y-0 md:gap-x-[110px] flex-col ${block.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                    <div className={`image-container ${block.imageSize || "w-[340px] h-[340px] md:w-[300px] md:h-[300px] max-w-full"} flex items-center justify-center shrink-0 self-center md:items-start md:justify-start md:self-start rounded-[25px] overflow-hidden`}>
                        {block.imageSrc ? (
                            <img src={block.imageSrc} alt={block.imageAlt || ""} className={`w-full h-full ${block.imageSrc === sarah || block.imageSrc === isabella || block.imageSrc === stine ? "object-cover" : "object-contain"} object-top rounded-[25px]`} />
                        ) : null}
                    </div>
                    <div className={`content-container flex flex-col flex-1 gap-0 ${block.contentSize || "w-full md:min-w-0"} items-start`}>{/* bruger || for at alve en adskilling, er der ikke nogen størrelser på content array, så  bruger den de values der kommer bagefter */}
                        <h3 className="font-h3 font-medium w-full max-w-[694px] break-words mb-[20px] md:mb-0">{block.title}</h3>
                        <p className="font-body w-full max-w-[694px]">
                            {block.linkText ? (
                                <>
                                    {block.textBefore}
                                    <Link to={block.linkTo} onClick={() => window.scrollTo(0, 0)} className={inlineTextLinkClasses}>{block.linkText}</Link>
                                    {block.textAfter}
                                </>
                            ) : (
                                block.text
                            )}
                        </p>
                        {block.readMoreLink && (
                            <Link to={block.readMoreLink} onClick={() => window.scrollTo(0, 0)} className={readMoreLinkClasses}>
                                læs mere her →
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

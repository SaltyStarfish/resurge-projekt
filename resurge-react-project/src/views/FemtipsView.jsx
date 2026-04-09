import Sektion3 from "../components/Sektion3";
import smallPlaceholder from "../assets/images/SmallPlaceholder.png";
import video from "../assets/images/Video.svg";
import billedeOptimering from "../assets/images/billede optimering.svg";
import fontGraphic from "../assets/images/font.svg";
import navigationGraphic from "../assets/images/navigation.svg";


function FemtipsView() {
    const blocks = [
      { imageSrc: video, imageAlt: "video", title: "Begræns brugen af video og animationer", 
        text: "Video og animationer er noget af det mest datatunge indhold. Sørg derfor for ikke at sætte dine videoer til autoplay, så de først starter, hvis brugeren ønsker det. Det mindsker både dataforbrug og irritation hos brugerne. Er videoer nødvendige, så hold dem korte eller overvej, om du kan formidle pointerne med små animationer eller andre simple grafiske elementer.", 
        reverse: false },
      { imageSrc: billedeOptimering, imageAlt: "billede optimering", title: "Optimer dine billeder", 
        text: "Billeder kan hurtigt blive en stor strømsluger, især hvis du ikke sørger for at optimere dem. Brug lette formater som AVIF eller WebP til fotos og SVG til logo og illustrationer. Sørg også for at reducere billedstørrelsen, så de ikke er større, end formatet de skal vises i. Du kan fx komprimere dine billeder online med Squoosh eller bruge et WordPress-plugin såsom ShortPixel.\n Derudover anbefaler vi at bruge lazy-loading, så billederne først indlæses, når de skal vises. Et andet tip er at reducere antallet af farver eller gøre billederne en smule mindre skarpe i kanterne. Overvej også, om antallet af billeder på sitet kan reduceres. Ønsker du at erstatte dem med noget, kan du fx bruge simple grafiske elementer i stedet.", 
        reverse: true },
      { animation: true, title: "Vælg mørke og rolige farver", 
        text: "Farver er ikke blot et spørgsmål om æstetik, men de påvirker også din sides performance. Mørkere farver bruger generelt mindre strøm og det er en god idé at undgå store flader, der er helt hvide eller i klare blå nuancer, da disse er de mest energikrævende. Du kan eksempelvis skabe kontrast og blikfang ved at kombinere en mørk baggrund med afdæmpede lyse tekstfarver. Desuden gør et enkelt farvevalg ikke blot siden hurtigere, men det er ofte også mere behageligt at kigge på.", 
        reverse: false },
      { imageSrc: fontGraphic, imageAlt: "font graphic", title: "Brug få og lette skrifttyper", 
        text: "Skrifttyper kan gøre et site tungere, end du måske tror. Vil du gerne optimere så meget som muligt? Så er det værd at overveje en systemskrifttype som fx Arial, Verdana eller Georgia, der allerede findes på de fleste brugeres devices, og derfor ikke skal hentes ned.\n Bruger du webfonts, er det en god idé at holde dig til få forskellige skrifttyper og -vægte og at vælge et komprimeret format som fx WOFF2. Derudover kan du optimere skrifttyperne i Everything Fonts og fjerne overflødige tegn. Det gyldne kompromis mellem æstetik og hurtig loadtid kan være at vælge en webfont til dine overskrifter og en systemfont til brødteksten.", 
        reverse: true },
      { imageSrc: navigationGraphic, imageAlt: "navigation graphic", title: "Gør det nemt at finde rundt", 
        text: "Et simpelt website er et hurtigt website. Holder du siden simpel, så brugeren undgår unødige klik og omveje, giver det både en bedre brugeroplevelse og en bedre performance på dit site.\n Jo færre trin der er til et køb eller at kontakte dig, desto mere sandsynligt er det, at brugeren faktisk gør det. Benyt derfor klare menuer og struktur samt tydelige call to actions, så det er klart for brugeren, hvor der skal klikkes.  ", 
        reverse: false },
      
    ];
  return (
    <div className="flex justify-start items-start w-full max-w-[1102px] mx-auto my-8 md:my-12 px-4 sm:px-6 md:px-0 flex-col gap-10 md:gap-[105px]">
      <h1 className="font-h1 font-medium my-[105px]">5 perfor</h1>
      <Sektion3 blocks={blocks} />
    </div>
  )
}

export default FemtipsView

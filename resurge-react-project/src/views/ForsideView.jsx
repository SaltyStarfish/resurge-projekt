import smallPlaceholder from "../assets/images/SmallPlaceholder.png";
import Sektion3 from "../components/Sektion3";



function ForsideView() {
    const blocks = [
    { imageSrc: smallPlaceholder, imageAlt: "placeholder", 
      text: "Et simpelt website er et hurtigt website. Holder du siden simpel, så brugeren undgår unødige klik og omveje, giver det både en bedre brugeroplevelse og en bedre performance på dit site.\n Jo færre trin der er til et køb eller at kontakte dig, desto mere sandsynligt er det, at brugeren faktisk gør det. Benyt derfor klare menuer og struktur samt tydelige call to actions, så det er klart for brugeren, hvor der skal klikkes.  ", 
      reverse: false, readMoreLink: "/ydelser" },
    ];

  return (
    <>
      {/* Opret sidens indhold herunder som "normal HTML" eller referer til components*/}
      <div className="flex justify-start items-start w-full max-w-[1102px] mx-auto my-8 md:my-12 px-4 sm:px-6 md:px-0 flex-col gap-10 md:gap-[105px]" >
        <h1 className="font-h1 font-medium">Forside</h1>
        <h2 className="font-h2 font-medium mb-0" >Her finder du mere viden om optimering</h2>
        <Sektion3 blocks={blocks} />
      </div>
    </>
  )
}

export default ForsideView

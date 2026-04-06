// Husk at importere alle Links og Components, der referes til
import ComponentTemplate from "../components/ComponentTemplate"
import Sektion3 from "../components/Sektion3"


function OmosView() {
  // All three blocks for OmosView
  const blocks = [
    { imageSrc: "", imageAlt: "", title: "Skræddersyede løsninger", text: "tekst 1", link: "/omos", linkText: "Læs mere", reverse: false },
    { imageSrc: "", imageAlt: "", title: "Performanceoptimering", text: "tekst 2", reverse: true },
    { imageSrc: "", imageAlt: "", title: "Reduceret CO2-aftryk", text: "tekst 3", reverse: false, imageSize: "w-[490px] h-[490px]", contentSize: "min-w-[490px]" },
  ];

  return (
    <>
      {/* Opret sidens indhold herunder som "normal HTML" eller referer til components*/}
      <h1>Om os</h1>
      <Sektion3 blocks={blocks} />
    </>
  )
}

export default OmosView

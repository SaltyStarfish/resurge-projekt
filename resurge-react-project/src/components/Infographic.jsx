import { useState, useEffect } from "react";
import vaerdiboks1 from "../assets/images/vaerdiboks1.webp";
import vaerdiboks2 from "../assets/images/vaerdiboks2.webp";
import vaerdiboks3 from "../assets/images/vaerdiboks3.webp";
import vaerdiboks4 from "../assets/images/vaerdiboks4.webp";
import lillevaerdiboks1 from "../assets/images/lillevaerdiboks1-69d9eb9e7ab63.webp";
import lillevaerdiboks2 from "../assets/images/lillevaerdiboks2-69d9eb9e9b31c.webp";
import lillevaerdiboks3 from "../assets/images/lillevaerdiboks3-69d9eb9e4dc56.webp";
import lillevaerdiboks4 from "../assets/images/lillevaerdiboks4-69d9eb9e4cd89.webp";
import lilleresboks1 from "../assets/images/lilleresboks1.webp";
import lilleresboks2 from "../assets/images/lilleresboks2.webp";
import lilleresboks3 from "../assets/images/lilleresboks3.webp";
import lilleresboks4 from "../assets/images/lilleresboks4.webp";
import resboks1 from "../assets/images/resboks1.webp";
import resboks2 from "../assets/images/resboks2.webp";
import resboks3 from "../assets/images/resboks3.webp";
import resboks4 from "../assets/images/resboks4.webp";

const VærdierBlocks = [
  { deskImgSrc: vaerdiboks1, mbImgSrc: lillevaerdiboks1, imageAlt: "visualisering af hvad vi tilbyder og hvores værdier", overskrift: "Optimal performance", text: "hurtige og effektive løsninger, med fokus på kvalitet",textColor: "white" },
  { deskImgSrc: vaerdiboks2, mbImgSrc: lillevaerdiboks2, imageAlt: "visualisering af hvad vi tilbyder og hvores værdier", overskrift: "Skræddersyede løsninger", text: "bygger løsninger tilpasset hver kunde som giver jer kontrollen", textColor: "black" },
  { deskImgSrc: vaerdiboks3, mbImgSrc: lillevaerdiboks3, imageAlt: "visualisering af hvad vi tilbyder og hvores værdier", overskrift: "Konkurrencedygtige priser", text: "levere en stabilt produkt til en fair pris", textColor: "white" },
  { deskImgSrc: vaerdiboks4, mbImgSrc: lillevaerdiboks4, imageAlt: "visualisering af hvad vi tilbyder og hvores værdier", overskrift: "Reduceret C02 - aftryk", text: "skabe webløsninger med et lavere energi forbrug ", textColor: "black" }
];

export const CeraCera = [
  { deskImgSrc: resboks1, mbImgSrc: lilleresboks1, imageAlt: "infographic, der visualisere 60% hurtigere load tid", title: "60%", overskrift: "hurtigere", text: "loadtid.", textColor: "white" },
  { deskImgSrc: resboks2, mbImgSrc: lilleresboks2, imageAlt: "infographic, der visualisere 20% højere konverteringsrate", title: "20%", overskrift: "Højere", text: "konverteringsrate", textColor: "black" },
  { deskImgSrc: resboks3, mbImgSrc: lilleresboks3, imageAlt: "Lille resboks 3 alt text", title: "50%", overskrift: "Lavere", text: "samlet CO2-udledning", textColor: "white" },
  { deskImgSrc: resboks4, mbImgSrc: lilleresboks4, imageAlt: "Lille resboks 4 alt text", title: "30%", overskrift: "Øget", text: "organisk trafik", textColor: "black" }
];

export default function Infographic({ blocks, title = "Hos os får du:" }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const onChange = (event) => setIsMobile(event.matches);
    setIsMobile(mobileQuery.matches);
    mobileQuery.addEventListener("change", onChange);
    return () => mobileQuery.removeEventListener("change", onChange);
  }, []);

  // Use VærdierBlocks as default if no blocks prop is provided
  const shownBlocks = blocks && blocks.length > 0 ? blocks : VærdierBlocks;
  //opdelt i mobil show og desk, fx deskImg eller mbImg//
  return (
    <div className="content-container w-full ">
      <h2 className="font-h2 mb-7.5 w-full max-w-[694px] mb-8 text-left">{title}</h2>
      {!isMobile ? (
        <div className="flex flex-row md:gap-[34px] justify-center w-full">
          {shownBlocks.map((block, idx) => {
            const isVaerdierBlock = shownBlocks === VærdierBlocks;
            return (
              <div key={idx} className="relative group flex flex-col justify-between items-start mx-auto max-w-[265px] w-full h-[200px]">
                <img src={block.deskImgSrc} alt={block.imageAlt} className="w-full max-w-[265px] h-[200px] object-cover rounded-[50px] absolute top-0 left-0 z-0" draggable="false" />
                <div className={`relative z-10 w-full h-full flex flex-col ${isVaerdierBlock ? 'justify-start' : 'justify-between'} px-4 py-6 ${block.textColor === "white" ? "text-white" : "text-black"}`}>
                  <h1 className="font-h1 font-medium w-[140px] text-left self-start" style={{ width: '140px', textAlign: 'left' }}>{block.title}</h1>
                  <div className="flex flex-col items-start w-full">
                    <div className="font-medium mt-2 text-left w-full" style={isVaerdierBlock ? { fontSize: '20px' } : {}}>{block.overskrift}</div>
                    <p className="font-medium mt-1 text-left w-full" style={isVaerdierBlock ? { fontSize: '16px', maxWidth: '230px' } : { maxWidth: '230px' }}>{block.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-row gap-[10px] justify-center w-full">
          {[0, 1].map(col => (
            <div key={col} className="flex flex-col gap-[10px] items-start mx-auto w-full max-w-[160px]">
              {shownBlocks.slice(col * 2, col * 2 + 2).map((block, idx) => {
                // Only increase height for VærdierBlocks (default blocks)
                const isVaerdierBlock = shownBlocks === VærdierBlocks;
                const mobileHeight = isVaerdierBlock ? '180px' : '150px';
                return (
                  <div key={idx} className="relative group flex flex-col justify-between items-start mx-auto w-full max-w-[160px] min-h-[150px]" style={{ height: mobileHeight }}>
                    <img src={block.mbImgSrc} alt={block.imageAlt} className="w-full max-w-[160px] object-cover rounded-[25px] absolute top-0 left-0 z-0" style={{ height: mobileHeight }} draggable="false" />
                    <div className={`absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-between px-2 py-3 ${block.textColor === "white" ? "text-white" : "text-black"}`}>
                      <h1 className="font-h1 font-medium w-[84px] text-left self-start">{block.title}</h1>
                      <div className="flex flex-col items-start w-full flex-1 justify-start">
                        <div className="text-base font-medium mt-2 text-left w-full">{block.overskrift}</div>
                        <p className="text-sm font-medium mt-1 text-left w-full" style={{ maxWidth: '150px' }}>{block.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


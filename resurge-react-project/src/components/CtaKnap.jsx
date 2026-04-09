// styling div til at indramme CTA knap

export default function CtaKnap({ children }) {
  return (
    <div className="text-xl md:text-[26px] font-medium text-[#722E3C] border-2 rounded-[30px] overflow-hidden transition-colors duration-300 hover:text-white">
      {children}
    </div>
  );
}


// Padding m.m. styles på selve knappen eller linket, for at hele området bliver clickable

// brug classes: "py-1 px-6 flex justify-center"
// + baggrundsfarve fx bg-[#CEBC9833]
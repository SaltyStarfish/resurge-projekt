// styling div til at indramme CTA knap

export default function CtaKnap({ children }) {
  return (
    <div className="font-h3 font-medium text-[#722E3C] border-2 rounded-[30px] overflow-hidden">
      {children}
    </div>
  );
}


// Padding m.m. styles på selve knappen eller linket, for at hele området bliver clickable

// brug classes: "py-1 px-6 flex justify-center"
// + baggrundsfarve fx bg-[#CEBC9833]
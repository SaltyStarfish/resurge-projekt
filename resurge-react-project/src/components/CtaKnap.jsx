// styling div til at indramme CTA knap

export default function CtaKnap({ children }) {
  return (
    <div className="font-h3 font-medium text-[#722E3C] bg-[#CEBC9833] bg-opacity-20 border-2 rounded-[30px]">
      {children}
    </div>
  );
}


// Padding m.m. styles på selve knappen eller linket, for at hele området bliver clickable

// brug classes: "py-1 px-6 flex justify-center"
export default function FiftyFifty({ children, reverse = false }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {children}
    </div>
  );
}
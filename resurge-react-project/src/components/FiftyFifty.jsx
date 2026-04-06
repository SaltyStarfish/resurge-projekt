export default function FiftyFifty({ children, reverse, className = "" }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-12 md:gap-20 lg:gap-28 ${className}`}
    >
      {children}
    </div>
  );
}
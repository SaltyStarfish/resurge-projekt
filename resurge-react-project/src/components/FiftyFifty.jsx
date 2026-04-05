export default function FiftyFifty({ children, reverse }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} gap-6 md:gap-12 items-center`}
    >
      {children}
    </div>
  );
}
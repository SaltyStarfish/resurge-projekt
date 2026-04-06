export default function Container({ children }) {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
      {children}
    </div>
  );
}
import {Link as RouterLink} from "react-router-dom";

export default function CtaLink({ to, children }) {
  return (
    <RouterLink
      to={to}
      className="inline-block mt-4 urbanist font-medium text-[26px] text-[#722E3C] transition-colors duration-300 hover:text-[#FFFFFF]"
    >
      {children} <span className="ml-1">→</span> 
    </RouterLink>
  );
}
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroller vinduet til toppen (0, 0) hver gang "URL-stien" ændrer sig
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Gør at komponenten ikke viser noget i vinduet, men bare tilføjer effekten.
}
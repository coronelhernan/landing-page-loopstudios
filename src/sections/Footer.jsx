import { FooterLogo } from "@shared/FooterLogo.jsx";
import { FooterSocial } from "@shared/FooterSocial.jsx";

export const Footer = () => {
  return (
    <footer className="h-auto flex flex-col items-center justify-between bg-primary-dark text-white px-0 py-18
     sm:h-44 sm:w-full sm:flex-row sm:px-20 sm:py-0">
      <FooterLogo />
      <FooterSocial />      
    </footer>
  );
};

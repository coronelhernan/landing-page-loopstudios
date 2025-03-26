import { icons } from "@utils/icons.js";
import { FooterLinks } from "@components/FooterLinks.jsx"

export const FooterLogo = () => {
  return (
    <section className="h-full w-1/2 flex flex-col justify-center items-start gap-4 px-4
    max-sm:w-full max-sm:items-center">
      <img className="h-8 px-4
        sm:h-7 sm:px-2
        max-sm:h-8 max-sm:w-32 max-sm:px-0"
        src={icons.logoLandingPage}
        alt="logo landing page in section footer"
      />

      <FooterLinks hidden={false} />
    </section>
  );
};
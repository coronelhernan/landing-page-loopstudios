import { NavList } from "@components/NavList.jsx";
import { linksNav } from "@utils/textContent.js";

export const FooterLinks = ({ hidden = true }) => {
  return <NavList linksNav={linksNav} hidden={hidden} />;
};

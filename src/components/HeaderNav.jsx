import { NavList } from "@components/NavList.jsx";
import { linksNav } from "@utils/textContent.js";

export const HeaderNav = ({ hidden = true }) => {
  return <NavList linksNav={linksNav} hidden={hidden} />;
};

import { useState } from "react";
import { icons } from "@utils/icons.js";
import { HeaderNav } from "@components/HeaderNav.jsx"
import { HeaderMenu } from "@/components/Menu.jsx";

export const Header = (
  { isLogoVisible,
    isVisibleButton = false,
    headerHeight = "h-32",
  }) => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className={`w-full flex justify-center items-center bg-transparent z-10 mt-[-20px] ${headerHeight}`}>
      <nav className={`w-full flex justify-between items-center pr-0 sm:w-11/12 sm:pr-12`}>

        {isLogoVisible && (
          <img className="h-5 sm:h-7" src={icons.logoLandingPage} alt="icon landing page" />
        )}

        <HeaderNav />

        {isVisibleButton && (
          <button className="sm:hidden flex items-center justify-center" onClick={toggleMenu}>
            <img className="h-4 sm:h-6" src={icons.iconMenu} alt="image icon menu" />
          </button>
        )}

        {isMenuVisible && <HeaderMenu toggleMenu={toggleMenu} />}
      </nav>
    </header>
  );
};

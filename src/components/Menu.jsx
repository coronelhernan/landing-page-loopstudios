import { LinkItem } from '@components/LinkItem.jsx';
import { icons } from '@utils/icons.js';
import { linksMenu } from '@utils/textContent.js';

export const HeaderMenu = ({ toggleMenu }) => {
  return (
    <section className="sm:hidden fixed top-0 left-0 w-full h-full flex flex-col items-center justify-start text-primary-light p-0 bg-black bg-opacity-90">
      <header className="h-28 w-full flex justify-between items-center p-6">
        <img className="h-5" src={icons.logoLandingPage} alt="logo landing" />
        <button className="sm:hidden cursor-pointer flex items-center justify-center" onClick={toggleMenu}>
          <img className="h-5" src={icons.iconCloseMenu} alt="icon close menu" />
        </button>
      </header>

      {/* Nav Menu */}
      <nav className="h-full w-full flex flex-col justify-center items-start p-6 gap-4 text-2xl font-light">
        {linksMenu.map((linkText, index) => (
          <LinkItem key={index} text={linkText} />
        ))}
      </nav>
    </section>
  );
};

import { LinkItem } from "@components/LinkItem.jsx";

export const NavList = ({ linksNav, hidden = true }) => {
  return (
    <nav className={`${hidden ? 'hidden' : ''} 
        h-auto w-full flex flex-col items-center justify-center text-primary-light gap-4 px-0 py-6
        sm:flex sm:flex-row sm:w-auto sm:py-2 sm:px-2 sm:gap-7`}>
      {linksNav.map((linkText, index) => (
        <LinkItem key={index} text={linkText} />
      ))}
    </nav>
  );
};

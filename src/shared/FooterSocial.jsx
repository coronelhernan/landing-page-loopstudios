import { footerIcons } from "@utils/icons.js";

export const FooterSocial = () => {
  return (
    <aside className="h-auto w-full flex flex-col items-center text-primary-light gap-2 px-0 py-8
    sm:w-1/2 sm:h-full sm:gap-4 sm:flex sm:justify-center sm:items-end sm:py-4 sm:px-6
    xs:flex-col xs:items-center xs:justify-center xs:text-center">
      <div className="flex gap-4 xs:gap-6">
        {footerIcons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center gap-5 sm:gap-2 group">
            <img
              src={icon}
              alt={`Social icon ${index}`}
              className="h-7 cursor-pointer transition-opacity duration-300 group-hover:opacity-75 sm:h-6" 
            />
            <span className="w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
            </span>
          </div>
        ))}
      </div>

      <h2 className="font-josefin text-xl text-primary-gray text-center font-semibold sm:text-base">
        © 2021 Loopstudios. All rights reserved.
      </h2>
    </aside>
  );
};

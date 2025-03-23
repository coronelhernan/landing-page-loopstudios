import "@assets/layout.css";
import { desktopImages, mobileImages, imagesCreationsSections } from "@utils/images.js";
import { creationsInfo } from "@utils/textContent.js";
import { CreationItem } from "@components/CreationItem.jsx";

export const Creations = () => {
  const { title, buttonText, items } = creationsInfo;
  const imgMobile = imagesCreationsSections.map(image => mobileImages[`mobile${image}`]);
  const imgDesktop = imagesCreationsSections.map(image => desktopImages[`desktop${image}`]);

  return (
    <section className="layout w-full min-h-screen grid gap-8 px-6 py-10 
      sm:px-25 sm:py-10 grid-cols-1 sm:grid-cols-2 
      lg:grid-cols-4">
      <header className="header flex justify-start items-center col-span-4 lg:col-span-3">
        <h1 className="text-primary-dark text-4xl font-josefin font-semibold">
          {title}
        </h1>
      </header>

      <aside className="aside flex justify-end items-center lg:col-span-1 col-span-4">
        <a
          className="bg-primary-light border-2 border-primary-gray-dark text-primary-dark font-semibold px-12 py-2 hover:bg-primary-dark hover:text-primary-light hover:border-black transition-all duration-250 ease-in-out"
          href="#"
        >
          <h1 className="text-base font-josefin">
            {buttonText}
          </h1>
        </a>
      </aside>

      <main className="main grid col-span-4 grid-cols-1 gap-6 py-10 mb-12
        lg:col-span-4 lg:grid-cols-4 lg:mb-20">
        {imgDesktop.map((img, index) => {
          const [firstWord, secondWord] = items[index];

          return (
            <CreationItem
              key={index}
              mobileImg={imgMobile[index]}
              desktopImg={img}
              firstWord={firstWord}
              secondWord={secondWord}
            />
          );
        })}
      </main>
    </section>
  );
};

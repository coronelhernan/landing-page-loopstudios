import { Header } from "@shared/Header.jsx";
import { textsHero, textsHeroMobile } from "@utils/textContent.js";

export const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-start p-6 bg-cover bg-center bg-[url('/images/mobile/image-hero.jpg')] 
    sm:h-[80vh] sm:p-10 sm:bg-[url('/images/desktop/image-hero.jpg')]">
      <Header isLogoVisible={true} isVisibleButton={true} />

      <main className="h-64 w-full border-2 border-white flex flex-col justify-center mt-28 px-2 py-2
        sm:h-68 sm:w-[700px] sm:items-start sm:translate-x-[50px] sm:mt-16">
        <div className="flex flex-col h-full items-start justify-center w-full sm:px-2 p-2">
          <div className="hidden sm:block">
            {textsHero.map((text, index) => (
              <h1 key={index} className="text-primary-light text-6xl font-josefin sm:text-7xl text-start">
                {text}
              </h1>
            ))}
          </div>

          <div className="sm:hidden space-y-0">
            {textsHeroMobile.map((text, index) => (
              <h1 key={index} className="text-primary-light text-[2.5rem] font-josefin sm:text-7xl text-start m-0">
                {text}
              </h1>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};
